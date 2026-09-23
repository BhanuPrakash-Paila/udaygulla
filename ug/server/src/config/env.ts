import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  MONGODB_URI: z.string().min(1),
  ADMIN_API_KEY: z.string().min(16),
  FRONTEND_ORIGIN: z.string().url(),
  PUBLIC_SITE_URL: z.string().url(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().default(587),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  CONTACT_TO_EMAIL: z.string().email(),
  CONTACT_FROM_EMAIL: z.string().email(),
  INSTAGRAM_ACCESS_TOKEN: z.string().optional(),
  INSTAGRAM_USER_ID: z.string().optional(),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),
  RATE_LIMIT_MAX: z.coerce.number().default(100),
});
export const env = schema.parse(process.env);
