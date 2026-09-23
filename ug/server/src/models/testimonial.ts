import { Schema, model } from "mongoose";
const testimonialSchema = new Schema(
  {
    quote: { type: String, required: true },
    clientName: { type: String, required: true },
    clientRole: String,
    projectSlug: String,
    image: String,
    featured: Boolean,
    approved: { type: Boolean, default: false, index: true },
    sortOrder: Number,
  },
  { timestamps: true },
);
export const Testimonial = model("Testimonial", testimonialSchema);
