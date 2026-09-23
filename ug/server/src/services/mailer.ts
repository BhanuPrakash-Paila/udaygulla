import nodemailer from "nodemailer";
import { env } from "../config/env.js";
export async function notifyInquiry(inquiry: {
  name: string;
  email: string;
  projectType?: string;
  message: string;
}) {
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASSWORD) return false;
  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD },
  });
  await transporter.sendMail({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    replyTo: inquiry.email,
    subject: `New inquiry from ${inquiry.name}`,
    text: `${inquiry.projectType ?? "Project"}\n\n${inquiry.message}`,
  });
  return true;
}
