"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const zod_1 = require("zod");
const env_js_1 = require("./config/env.js");
const inquiry_js_1 = require("./models/inquiry.js");
const portfolio_item_js_1 = require("./models/portfolio-item.js");
const testimonial_js_1 = require("./models/testimonial.js");
const admin_js_1 = require("./middleware/admin.js");
const mailer_js_1 = require("./services/mailer.js");
const instagram_js_1 = require("./services/instagram.js");
const inquiryInput = zod_1.z.object({ name: zod_1.z.string().min(2), email: zod_1.z.string().email(), phone: zod_1.z.string().optional(), projectType: zod_1.z.string().optional(), eventDate: zod_1.z.string().optional(), budget: zod_1.z.string().optional(), message: zod_1.z.string().min(10), consent: zod_1.z.coerce.boolean(), website: zod_1.z.string().optional() });
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({ origin: env_js_1.env.FRONTEND_ORIGIN }));
exports.app.use(express_1.default.json({ limit: "100kb" }));
exports.app.use("/api/inquiries", (0, express_rate_limit_1.default)({ windowMs: env_js_1.env.RATE_LIMIT_WINDOW_MS, limit: env_js_1.env.RATE_LIMIT_MAX }));
exports.app.get("/api/health", (_req, res) => res.json({ data: { status: "ok", service: "atelier-noir-api" }, error: null }));
exports.app.get("/api/portfolio", async (req, res, next) => { try {
    const page = Math.max(1, Number(req.query.page ?? 1));
    const limit = Math.min(24, Math.max(1, Number(req.query.limit ?? 12)));
    const filter = { published: true, ...(req.query.category ? { category: req.query.category } : {}) };
    const [data, total] = await Promise.all([portfolio_item_js_1.PortfolioItem.find(filter).sort({ featured: -1, sortOrder: 1 }).skip((page - 1) * limit).limit(limit).lean(), portfolio_item_js_1.PortfolioItem.countDocuments(filter)]);
    res.json({ data, error: null, meta: { page, limit, total } });
}
catch (error) {
    next(error);
} });
exports.app.get("/api/portfolio/:slug", async (req, res, next) => { try {
    const data = await portfolio_item_js_1.PortfolioItem.findOne({ slug: req.params.slug, published: true }).lean();
    if (!data)
        return res.status(404).json({ data: null, error: "Not found" });
    res.json({ data, error: null });
}
catch (error) {
    next(error);
} });
exports.app.get("/api/testimonials", async (_req, res, next) => { try {
    const data = await testimonial_js_1.Testimonial.find({ approved: true }).sort({ sortOrder: 1 }).lean();
    res.json({ data, error: null });
}
catch (error) {
    next(error);
} });
exports.app.post("/api/inquiries", async (req, res, next) => { try {
    const input = inquiryInput.parse(req.body);
    if (input.website)
        return res.status(202).json({ data: { accepted: true }, error: null });
    const inquiry = await inquiry_js_1.Inquiry.create(input);
    const sent = await (0, mailer_js_1.notifyInquiry)(input);
    inquiry.emailDeliveryStatus = sent ? "sent" : "pending";
    await inquiry.save();
    res.status(201).json({ data: { id: inquiry.id }, error: null });
}
catch (error) {
    next(error);
} });
exports.app.get("/api/instagram", async (_req, res) => res.json({ data: await (0, instagram_js_1.getInstagramMedia)(), error: null }));
exports.app.use("/api/admin", admin_js_1.requireAdmin);
exports.app.get("/api/admin/portfolio", async (_req, res, next) => { try {
    res.json({ data: await portfolio_item_js_1.PortfolioItem.find().sort({ sortOrder: 1 }).lean(), error: null });
}
catch (error) {
    next(error);
} });
exports.app.post("/api/admin/portfolio", async (req, res, next) => { try {
    res.status(201).json({ data: await portfolio_item_js_1.PortfolioItem.create(req.body), error: null });
}
catch (error) {
    next(error);
} });
exports.app.patch("/api/admin/portfolio/:id", async (req, res, next) => { try {
    res.json({ data: await portfolio_item_js_1.PortfolioItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }), error: null });
}
catch (error) {
    next(error);
} });
exports.app.delete("/api/admin/portfolio/:id", async (req, res, next) => { try {
    await portfolio_item_js_1.PortfolioItem.findByIdAndDelete(req.params.id);
    res.status(204).end();
}
catch (error) {
    next(error);
} });
exports.app.get("/api/admin/testimonials", async (_req, res, next) => { try {
    res.json({ data: await testimonial_js_1.Testimonial.find().lean(), error: null });
}
catch (error) {
    next(error);
} });
exports.app.post("/api/admin/testimonials", async (req, res, next) => { try {
    res.status(201).json({ data: await testimonial_js_1.Testimonial.create(req.body), error: null });
}
catch (error) {
    next(error);
} });
exports.app.patch("/api/admin/testimonials/:id", async (req, res, next) => { try {
    res.json({ data: await testimonial_js_1.Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true }), error: null });
}
catch (error) {
    next(error);
} });
exports.app.delete("/api/admin/testimonials/:id", async (req, res, next) => { try {
    await testimonial_js_1.Testimonial.findByIdAndDelete(req.params.id);
    res.status(204).end();
}
catch (error) {
    next(error);
} });
exports.app.get("/api/admin/inquiries", async (_req, res, next) => { try {
    res.json({ data: await inquiry_js_1.Inquiry.find().sort({ createdAt: -1 }).lean(), error: null });
}
catch (error) {
    next(error);
} });
exports.app.patch("/api/admin/inquiries/:id", async (req, res, next) => { try {
    res.json({ data: await inquiry_js_1.Inquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true }), error: null });
}
catch (error) {
    next(error);
} });
exports.app.post("/api/admin/media/signature", (_req, res) => res.status(501).json({ data: null, error: "Configure Blob Storage signing before uploading media" }));
exports.app.use((error, _req, res, next) => { void next; if (error instanceof zod_1.z.ZodError)
    return res.status(400).json({ data: null, error: error.flatten() }); console.error(error); res.status(500).json({ data: null, error: "Internal server error" }); });
