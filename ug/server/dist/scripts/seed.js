"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_js_1 = require("../config/env.js");
const portfolio_item_js_1 = require("../models/portfolio-item.js");
const testimonial_js_1 = require("../models/testimonial.js");
const image = (id) => `https://images.unsplash.com/${id}?w=1400&q=85`;
const projects = ["The Quiet Current", "Form & Function", "A Sunday in June", "After Light", "Common Ground", "Salt / Stone"].map((title, index) => ({ title, slug: title.toLowerCase().replaceAll(" ", "-"), category: ["film", "editorial", "wedding", "portrait", "commercial", "travel"][index], excerpt: "A considered visual story.", description: "A considered visual story made with patience and intent.", coverMedia: { url: image(["photo-1464278533981-50106e6176b1", "photo-1497366811353-6870744d04b2", "photo-1519741497674-611481863552", "photo-1488426862026-3ee34a7d66df", "photo-1529156069898-49953e39b3ac", "photo-1500530855697-b586d89ba3ee"][index]), alt: title }, featured: index < 3, published: true, sortOrder: index }));
async function seed() { if (env_js_1.env.NODE_ENV === "production" && process.env.CONFIRM_PRODUCTION_SEED !== "true")
    throw new Error("Refusing production seed without CONFIRM_PRODUCTION_SEED=true"); await mongoose_1.default.connect(env_js_1.env.MONGODB_URI); await Promise.all(projects.map((item) => portfolio_item_js_1.PortfolioItem.updateOne({ slug: item.slug }, { $set: item }, { upsert: true }))); for (const testimonial of [{ quote: "There is a stillness in the work that lets you feel the moment.", clientName: "Cora & James", clientRole: "A Sunday in June" }, { quote: "The best creative partner we could have asked for.", clientName: "Mara Studio", clientRole: "Form & Function" }, { quote: "A rare eye for the details that make a place feel alive.", clientName: "Northline", clientRole: "The Quiet Current" }])
    await testimonial_js_1.Testimonial.updateOne({ clientName: testimonial.clientName }, { $set: { ...testimonial, approved: true } }, { upsert: true }); await mongoose_1.default.disconnect(); }
seed().catch((error) => { console.error(error); process.exit(1); });
