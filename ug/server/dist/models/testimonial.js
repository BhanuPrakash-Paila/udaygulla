"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testimonial = void 0;
const mongoose_1 = require("mongoose");
const testimonialSchema = new mongoose_1.Schema({ quote: { type: String, required: true }, clientName: { type: String, required: true }, clientRole: String, projectSlug: String, image: String, featured: Boolean, approved: { type: Boolean, default: false, index: true }, sortOrder: Number }, { timestamps: true });
exports.Testimonial = (0, mongoose_1.model)("Testimonial", testimonialSchema);
