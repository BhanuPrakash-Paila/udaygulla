import { Schema, model } from "mongoose";
const mediaSchema = new Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    width: Number,
    height: Number,
    posterUrl: String,
  },
  { _id: false },
);
const portfolioSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true, index: true },
    category: { type: String, required: true, index: true },
    excerpt: String,
    description: String,
    coverMedia: { type: mediaSchema, required: true },
    media: [mediaSchema],
    featured: { type: Boolean, default: false, index: true },
    published: { type: Boolean, default: false, index: true },
    sortOrder: { type: Number, default: 0, index: true },
    services: [String],
    location: String,
    shootDate: Date,
    credits: [String],
    seo: { title: String, description: String },
  },
  { timestamps: true },
);
export const PortfolioItem = model("PortfolioItem", portfolioSchema);
