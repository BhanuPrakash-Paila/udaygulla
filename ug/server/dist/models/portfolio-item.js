"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioItem = void 0;
const mongoose_1 = require("mongoose");
const mediaSchema = new mongoose_1.Schema({ url: { type: String, required: true }, alt: { type: String, required: true }, width: Number, height: Number, posterUrl: String }, { _id: false });
const portfolioSchema = new mongoose_1.Schema({ title: { type: String, required: true }, slug: { type: String, unique: true, required: true, index: true }, category: { type: String, required: true, index: true }, excerpt: String, description: String, coverMedia: { type: mediaSchema, required: true }, media: [mediaSchema], featured: { type: Boolean, default: false, index: true }, published: { type: Boolean, default: false, index: true }, sortOrder: { type: Number, default: 0, index: true }, services: [String], location: String, shootDate: Date, credits: [String], seo: { title: String, description: String } }, { timestamps: true });
exports.PortfolioItem = (0, mongoose_1.model)("PortfolioItem", portfolioSchema);
