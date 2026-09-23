"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const schema = zod_1.z.object({ NODE_ENV: zod_1.z.enum(["development", "test", "production"]).default("development"), PORT: zod_1.z.coerce.number().default(4000), MONGODB_URI: zod_1.z.string().min(1), ADMIN_API_KEY: zod_1.z.string().min(16), FRONTEND_ORIGIN: zod_1.z.string().url(), PUBLIC_SITE_URL: zod_1.z.string().url(), SMTP_HOST: zod_1.z.string().optional(), SMTP_PORT: zod_1.z.coerce.number().default(587), SMTP_USER: zod_1.z.string().optional(), SMTP_PASSWORD: zod_1.z.string().optional(), CONTACT_TO_EMAIL: zod_1.z.string().email(), CONTACT_FROM_EMAIL: zod_1.z.string().email(), INSTAGRAM_ACCESS_TOKEN: zod_1.z.string().optional(), INSTAGRAM_USER_ID: zod_1.z.string().optional(), RATE_LIMIT_WINDOW_MS: zod_1.z.coerce.number().default(900000), RATE_LIMIT_MAX: zod_1.z.coerce.number().default(100) });
exports.env = schema.parse(process.env);
