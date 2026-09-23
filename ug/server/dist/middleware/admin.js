"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = requireAdmin;
const node_crypto_1 = require("node:crypto");
const env_js_1 = require("../config/env.js");
function requireAdmin(req, res, next) { const supplied = req.header("x-admin-api-key") ?? ""; const a = Buffer.from(supplied); const b = Buffer.from(env_js_1.env.ADMIN_API_KEY); if (a.length !== b.length || !(0, node_crypto_1.timingSafeEqual)(a, b))
    return res.status(401).json({ data: null, error: "Unauthorized" }); next(); }
