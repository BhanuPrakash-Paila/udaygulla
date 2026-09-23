import { NextFunction, Request, Response } from "express";
import { timingSafeEqual } from "node:crypto";
import { env } from "../config/env.js";
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const supplied = req.header("x-admin-api-key") ?? "";
  const a = Buffer.from(supplied);
  const b = Buffer.from(env.ADMIN_API_KEY);
  if (a.length !== b.length || !timingSafeEqual(a, b))
    return res.status(401).json({ data: null, error: "Unauthorized" });
  next();
}
