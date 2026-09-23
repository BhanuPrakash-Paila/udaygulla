"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_js_1 = require("./app.js");
const env_js_1 = require("./config/env.js");
mongoose_1.default.connect(env_js_1.env.MONGODB_URI).then(() => app_js_1.app.listen(env_js_1.env.PORT, () => console.log(`API listening on ${env_js_1.env.PORT}`))).catch((error) => { console.error(error); process.exit(1); });
