import { Schema, model } from "mongoose";
const inquirySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: String,
    projectType: String,
    eventDate: Date,
    budget: String,
    message: { type: String, required: true },
    consent: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ["new", "reviewing", "replied", "archived"],
      default: "new",
      index: true,
    },
    source: String,
    emailDeliveryStatus: { type: String, enum: ["pending", "sent", "failed"], default: "pending" },
  },
  { timestamps: true },
);
export const Inquiry = model("Inquiry", inquirySchema);
