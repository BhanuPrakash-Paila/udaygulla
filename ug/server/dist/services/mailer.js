"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyInquiry = notifyInquiry;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_js_1 = require("../config/env.js");
async function notifyInquiry(inquiry) { if (!env_js_1.env.SMTP_HOST || !env_js_1.env.SMTP_USER || !env_js_1.env.SMTP_PASSWORD)
    return false; const transporter = nodemailer_1.default.createTransport({ host: env_js_1.env.SMTP_HOST, port: env_js_1.env.SMTP_PORT, secure: env_js_1.env.SMTP_PORT === 465, auth: { user: env_js_1.env.SMTP_USER, pass: env_js_1.env.SMTP_PASSWORD } }); await transporter.sendMail({ from: env_js_1.env.CONTACT_FROM_EMAIL, to: env_js_1.env.CONTACT_TO_EMAIL, replyTo: inquiry.email, subject: `New inquiry from ${inquiry.name}`, text: `${inquiry.projectType ?? "Project"}\n\n${inquiry.message}` }); return true; }
