import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { env } from "./config/env.js";
import { Inquiry } from "./models/inquiry.js";
import { PortfolioItem } from "./models/portfolio-item.js";
import { Testimonial } from "./models/testimonial.js";
import { requireAdmin } from "./middleware/admin.js";
import { notifyInquiry } from "./services/mailer.js";
import { getInstagramMedia } from "./services/instagram.js";

const inquiryInput = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  eventDate: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
  consent: z.coerce.boolean(),
  website: z.string().optional(),
});
export const app = express();
app.use(cors({ origin: env.FRONTEND_ORIGIN }));
app.use(express.json({ limit: "100kb" }));
app.use(
  "/api/inquiries",
  rateLimit({ windowMs: env.RATE_LIMIT_WINDOW_MS, limit: env.RATE_LIMIT_MAX }),
);
app.get("/api/health", (_req, res) =>
  res.json({ data: { status: "ok", service: "atelier-noir-api" }, error: null }),
);
app.get("/api/portfolio", async (req, res, next) => {
  try {
    const page = Math.max(1, Number(req.query.page ?? 1));
    const limit = Math.min(24, Math.max(1, Number(req.query.limit ?? 12)));
    const filter = {
      published: true,
      ...(req.query.category ? { category: req.query.category } : {}),
    };
    const [data, total] = await Promise.all([
      PortfolioItem.find(filter)
        .sort({ featured: -1, sortOrder: 1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      PortfolioItem.countDocuments(filter),
    ]);
    res.json({ data, error: null, meta: { page, limit, total } });
  } catch (error) {
    next(error);
  }
});
app.get("/api/portfolio/:slug", async (req, res, next) => {
  try {
    const data = await PortfolioItem.findOne({ slug: req.params.slug, published: true }).lean();
    if (!data) return res.status(404).json({ data: null, error: "Not found" });
    res.json({ data, error: null });
  } catch (error) {
    next(error);
  }
});
app.get("/api/testimonials", async (_req, res, next) => {
  try {
    const data = await Testimonial.find({ approved: true }).sort({ sortOrder: 1 }).lean();
    res.json({ data, error: null });
  } catch (error) {
    next(error);
  }
});
app.post("/api/inquiries", async (req, res, next) => {
  try {
    const input = inquiryInput.parse(req.body);
    if (input.website) return res.status(202).json({ data: { accepted: true }, error: null });
    const inquiry = await Inquiry.create(input);
    const sent = await notifyInquiry(input);
    inquiry.emailDeliveryStatus = sent ? "sent" : "pending";
    await inquiry.save();
    res.status(201).json({ data: { id: inquiry.id }, error: null });
  } catch (error) {
    next(error);
  }
});
app.get("/api/instagram", async (_req, res) =>
  res.json({ data: await getInstagramMedia(), error: null }),
);
app.use("/api/admin", requireAdmin);
app.get("/api/admin/portfolio", async (_req, res, next) => {
  try {
    res.json({ data: await PortfolioItem.find().sort({ sortOrder: 1 }).lean(), error: null });
  } catch (error) {
    next(error);
  }
});
app.post("/api/admin/portfolio", async (req, res, next) => {
  try {
    res.status(201).json({ data: await PortfolioItem.create(req.body), error: null });
  } catch (error) {
    next(error);
  }
});
app.patch("/api/admin/portfolio/:id", async (req, res, next) => {
  try {
    res.json({
      data: await PortfolioItem.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      }),
      error: null,
    });
  } catch (error) {
    next(error);
  }
});
app.delete("/api/admin/portfolio/:id", async (req, res, next) => {
  try {
    await PortfolioItem.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
app.get("/api/admin/testimonials", async (_req, res, next) => {
  try {
    res.json({ data: await Testimonial.find().lean(), error: null });
  } catch (error) {
    next(error);
  }
});
app.post("/api/admin/testimonials", async (req, res, next) => {
  try {
    res.status(201).json({ data: await Testimonial.create(req.body), error: null });
  } catch (error) {
    next(error);
  }
});
app.patch("/api/admin/testimonials/:id", async (req, res, next) => {
  try {
    res.json({
      data: await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true }),
      error: null,
    });
  } catch (error) {
    next(error);
  }
});
app.delete("/api/admin/testimonials/:id", async (req, res, next) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
app.get("/api/admin/inquiries", async (_req, res, next) => {
  try {
    res.json({ data: await Inquiry.find().sort({ createdAt: -1 }).lean(), error: null });
  } catch (error) {
    next(error);
  }
});
app.patch("/api/admin/inquiries/:id", async (req, res, next) => {
  try {
    res.json({
      data: await Inquiry.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true },
      ),
      error: null,
    });
  } catch (error) {
    next(error);
  }
});
app.post("/api/admin/media/signature", (_req, res) =>
  res
    .status(501)
    .json({ data: null, error: "Configure Blob Storage signing before uploading media" }),
);
app.use(
  (error: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
    void next;
    if (error instanceof z.ZodError)
      return res.status(400).json({ data: null, error: error.flatten() });
    console.error(error);
    res.status(500).json({ data: null, error: "Internal server error" });
  },
);
