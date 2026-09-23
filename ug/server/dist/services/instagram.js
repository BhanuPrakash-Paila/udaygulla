"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstagramMedia = getInstagramMedia;
const env_js_1 = require("../config/env.js");
async function getInstagramMedia() { if (!env_js_1.env.INSTAGRAM_ACCESS_TOKEN || !env_js_1.env.INSTAGRAM_USER_ID)
    return []; try {
    const response = await fetch(`https://graph.instagram.com/${env_js_1.env.INSTAGRAM_USER_ID}/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${env_js_1.env.INSTAGRAM_ACCESS_TOKEN}`, { signal: AbortSignal.timeout(4000) });
    if (!response.ok)
        return [];
    const payload = await response.json();
    return payload.data ?? [];
}
catch {
    return [];
} }
