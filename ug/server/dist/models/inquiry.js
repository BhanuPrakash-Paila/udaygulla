"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inquiry = void 0;
const mongoose_1 = require("mongoose");
const inquirySchema = new mongoose_1.Schema({ name: { type: String, required: true }, email: { type: String, required: true, index: true }, phone: String, projectType: String, eventDate: Date, budget: String, message: { type: String, required: true }, consent: { type: Boolean, required: true }, status: { type: String, enum: ["new", "reviewing", "replied", "archived"], default: "new", index: true }, source: String, emailDeliveryStatus: { type: String, enum: ["pending", "sent", "failed"], default: "pending" } }, { timestamps: true });
exports.Inquiry = (0, mongoose_1.model)("Inquiry", inquirySchema);
