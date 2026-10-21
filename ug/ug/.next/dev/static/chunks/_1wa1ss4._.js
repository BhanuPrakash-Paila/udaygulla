(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORAGE_KEY_PROJECTS",
    ()=>STORAGE_KEY_PROJECTS,
    "createProjectSlug",
    ()=>createProjectSlug,
    "defaultProjects",
    ()=>defaultProjects,
    "getGalleryForCategory",
    ()=>getGalleryForCategory,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectCategoryLabel",
    ()=>getProjectCategoryLabel,
    "getProjectGalleryTitle",
    ()=>getProjectGalleryTitle,
    "getVideoClipsForCategory",
    ()=>getVideoClipsForCategory,
    "serviceCategories",
    ()=>serviceCategories,
    "serviceOfferings",
    ()=>serviceOfferings
]);
const STORAGE_KEY_PROJECTS = "portfolio_projects";
const serviceOfferings = [
    "Wedding photography",
    "Baby photo shoots",
    "Event coverage",
    "Party shoots",
    "Promotional photos",
    "Photo editing",
    "Video editing",
    "Video shoots"
];
const serviceCategories = [
    {
        id: "wedding",
        title: "Wedding Shoots",
        description: "Cinematic coverage from first look to last dance, with curated portraits and emotional video clips.",
        images: [
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1502663656924-1db2b4c0d3f1?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: "baby",
        title: "Baby Shoots",
        description: "Soft, intimate portraits that capture newborn milestones and tender family moments.",
        images: [
            "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: "event",
        title: "Event Coverage",
        description: "Live events captured with energy and clarity, from product launches to VIP celebrations.",
        images: [
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: "party",
        title: "Party Shoots",
        description: "Vibrant party photography with bold color, movement, and atmosphere in every frame.",
        images: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: "promo",
        title: "Promotional Photos",
        description: "Marketing-ready visuals for brands, campaigns, and social media launches.",
        images: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80"
        ]
    }
];
const defaultProjects = [
    {
        id: "wedding-album-highlights",
        slug: "wedding-album-highlights",
        title: "Wedding Album Highlights",
        description: "Premium wedding photography and cinematic wedding recap with elegant storytelling.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
        link: "#contact",
        category: "wedding",
        gallery: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
        ],
        videoClips: [
            {
                title: "Golden Hour Wedding Reel",
                url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ"
            }
        ]
    },
    {
        id: "event-coverage-showcase",
        slug: "event-coverage-showcase",
        title: "Event Coverage Showcase",
        description: "High-energy event coverage with polished storytelling for launches, parties, and celebrations.",
        image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1000&q=80",
        link: "#contact",
        category: "event",
        gallery: [
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80"
        ],
        videoClips: [
            {
                title: "Launch Day Recap",
                url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ"
            }
        ]
    },
    {
        id: "baby-portrait-session",
        slug: "baby-portrait-session",
        title: "Baby Portrait Session",
        description: "Soft newborn and baby photo shoots with warm, timeless mood and family-first storytelling.",
        image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=1000&q=80",
        link: "#contact",
        category: "baby",
        gallery: [
            "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
        ],
        videoClips: [
            {
                title: "Newborn Story Reel",
                url: "https://www.youtube.com/watch?v=2X6D9u3_R-4"
            }
        ]
    },
    {
        id: "personal-style-shoot",
        slug: "personal-style-shoot",
        title: "Personal Style Shoot",
        description: "Creative portrait sessions for personal branding, lifestyle, and polished editorial visuals.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
        link: "#contact",
        category: "personal",
        gallery: [
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
        ],
        videoClips: [
            {
                title: "Personal Brand Reel",
                url: "https://www.youtube.com/watch?v=Z6uX4a2Jdzg"
            }
        ]
    },
    {
        id: "couple-portrait-story",
        slug: "couple-portrait-story",
        title: "Couple Portrait Story",
        description: "Romantic couple photography with cinematic portraits and soft-motion highlights.",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
        link: "#contact",
        category: "couple",
        gallery: [
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
        ],
        videoClips: [
            {
                title: "Romantic Highlights",
                url: "https://www.youtube.com/watch?v=QsV-9I9b2q8"
            }
        ]
    },
    {
        id: "promo-campaign-showcase",
        slug: "promo-campaign-showcase",
        title: "Promotional Campaign Showcase",
        description: "Branded promotional photos and video teasers that elevate launches, campaigns, and social storytelling.",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
        link: "#contact",
        category: "promo",
        gallery: [
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80"
        ],
        videoClips: [
            {
                title: "Promotional Launch Teaser",
                url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ"
            }
        ]
    },
    {
        id: "insta-viral-clips",
        slug: "insta-viral-clips",
        title: "Insta Viral Clips",
        description: "High-energy reels crafted for engagement, shares, and viral reach on Instagram.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
        link: "https://www.instagram.com/_chandu4u/reels/?hl=en",
        category: "insta",
        gallery: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=1000&q=80"
        ],
        videoClips: [
            {
                title: "Instagram Reels Showcase",
                url: "https://www.instagram.com/_chandu4u/reels/?hl=en"
            }
        ]
    }
];
function getProjectBySlug(slug) {
    return defaultProjects.find((project)=>project.slug === slug) ?? null;
}
function getProjectCategoryLabel(category) {
    switch(category){
        case "wedding":
            return "Wedding";
        case "event":
            return "Event";
        case "baby":
            return "Baby";
        case "personal":
            return "Personal";
        case "couple":
            return "Couple";
        case "promo":
            return "Promotional";
        case "insta":
            return "Insta Clips";
        case "video":
            return "Video";
        default:
            return "Project";
    }
}
function getProjectGalleryTitle(category) {
    switch(category){
        case "wedding":
            return "Recent Wedding Gallery";
        case "event":
            return "Recent Event Gallery";
        case "baby":
            return "Recent Baby Gallery";
        case "personal":
            return "Recent Personal Gallery";
        case "couple":
            return "Recent Couple Gallery";
        case "promo":
            return "Recent Promotional Gallery";
        case "insta":
            return "Recent Insta Clips";
        case "video":
            return "Recent Video Clips";
        default:
            return "Recent Gallery";
    }
}
function createProjectSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80);
}
function getGalleryForCategory(category) {
    switch(category){
        case "wedding":
            return [
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
            ];
        case "event":
            return [
                "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1000&q=80"
            ];
        case "baby":
            return [
                "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
            ];
        case "personal":
            return [
                "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
            ];
        case "couple":
            return [
                "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
            ];
        case "promo":
            return [
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80"
            ];
        case "insta":
            return [
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=1000&q=80"
            ];
        default:
            return [];
    }
}
function getVideoClipsForCategory(category) {
    switch(category){
        case "wedding":
            return [
                {
                    title: "Golden Hour Wedding Reel",
                    url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ"
                }
            ];
        case "event":
            return [
                {
                    title: "Event Highlights Reel",
                    url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ"
                }
            ];
        case "baby":
            return [
                {
                    title: "Newborn Story Reel",
                    url: "https://www.youtube.com/watch?v=2X6D9u3_R-4"
                }
            ];
        case "personal":
            return [
                {
                    title: "Personal Brand Reel",
                    url: "https://www.youtube.com/watch?v=Z6uX4a2Jdzg"
                }
            ];
        case "couple":
            return [
                {
                    title: "Romantic Highlights",
                    url: "https://www.youtube.com/watch?v=QsV-9I9b2q8"
                }
            ];
        case "promo":
            return [
                {
                    title: "Promotion Launch Highlight",
                    url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ"
                }
            ];
        case "insta":
            return [
                {
                    title: "Instagram Reels Showcase",
                    url: "https://www.instagram.com/_chandu4u/reels/?hl=en"
                }
            ];
        case "video":
            return [
                {
                    title: "Edited Video Highlight",
                    url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ"
                }
            ];
        default:
            return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Contact() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    async function handleSubmit(event) {
        event.preventDefault();
        setStatus("sending");
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        try {
            const response = await fetch("/api/inquiries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error("Request failed");
            form.reset();
            setStatus("success");
        } catch  {
            setStatus("error");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-10 lg:grid-cols-[1.05fr_0.95fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold text-slate-950 sm:text-4xl",
                            children: "Let's create something unforgettable."
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-xl text-sm leading-7 text-slate-600 sm:text-base",
                            children: "Reach out with a few details about your project and I'll respond with a tailored plan for photography, video editing, or frontend development."
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 grid-cols-1 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3",
                            children: [
                                {
                                    label: "Instagram",
                                    url: "https://www.instagram.com/_chandu4u/?hl=en",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.55 2.55a.75.75 0 0 1 .75.75v1.4a.75.75 0 0 1-1.5 0V6.8a.75.75 0 0 1 .75-.75Zm-4.3 1.2a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, this)
                                },
                                {
                                    label: "Twitter",
                                    url: "https://twitter.com/_chandu4u",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22.162 5.656c-.793.352-1.645.588-2.538.694a4.44 4.44 0 0 0 1.948-2.45 8.91 8.91 0 0 1-2.82 1.08 4.44 4.44 0 0 0-7.564 4.044A12.6 12.6 0 0 1 3.15 4.894a4.44 4.44 0 0 0 1.375 5.93 4.43 4.43 0 0 1-2.01-.556v.056a4.44 4.44 0 0 0 3.56 4.35 4.45 4.45 0 0 1-1.139.153 4.14 4.14 0 0 1-.834-.08 4.44 4.44 0 0 0 4.15 3.08 8.9 8.9 0 0 1-5.51 1.9c-.358 0-.71-.021-1.056-.062a12.56 12.56 0 0 0 6.795 1.992c8.153 0 12.607-6.75 12.607-12.607 0-.192-.005-.383-.014-.573a9.01 9.01 0 0 0 2.214-2.294Z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 74,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this)
                                },
                                {
                                    label: "Facebook",
                                    url: "https://www.facebook.com/_chandu4u",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M13.483 21.5V13.41h2.99l.45-3.49h-3.44V7.83c0-.98.273-1.65 1.69-1.65h1.8V3.01a24.13 24.13 0 0 0-2.62-.136c-2.59 0-4.36 1.58-4.36 4.49v2.5H7.87v3.49h2.97V21.5h2.64Z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                },
                                {
                                    label: "WhatsApp",
                                    url: "https://wa.me/9876545678",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2.002C6.486 2.002 2 6.488 2 12.002c0 1.974.516 3.82 1.413 5.397L2 22l4.78-1.4A9.955 9.955 0 0 0 12 22.002c5.514 0 10-4.486 10-10 0-5.514-4.486-9.999-10-9.999Zm0 1.5c4.69 0 8.5 3.81 8.5 8.499 0 4.093-2.87 7.572-6.785 8.346l-.401.1-.256-.265A8.47 8.47 0 0 1 5.5 12.001c0-4.688 3.81-8.499 8.5-8.499Zm-1.08 3.353a.75.75 0 0 0-1.252.675c.022.314.082.707.18 1.168.103.489.708 1.363 1.454 2.108.744.744 1.618 1.351 2.107 1.453.48.1.875.158 1.188.18a.75.75 0 0 0 .675-1.252l-.611-.61a.75.75 0 0 0-.716-.186c-.454.098-.965.112-1.355.025a6.05 6.05 0 0 1-1.34-.42 2.193 2.193 0 0 1-.923-.92 6.008 6.008 0 0 1-.42-1.34c-.087-.39-.073-.901.025-1.355a.75.75 0 0 0-.185-.716l-.61-.61Z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this)
                                },
                                {
                                    label: "Call",
                                    url: "tel:9876545678",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1.002 1.002 0 0 1 1.11-.21 11.56 11.56 0 0 0 3.64.58 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C8.63 21.5 2.5 15.37 2.5 8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.58 3.64.11.27.04.59-.21.8l-2.25 2.35Z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 116,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this)
                                }
                            ].map(({ label, url, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: url,
                                    target: label === "Call" ? "_self" : "_blank",
                                    rel: label === "Call" ? undefined : "noreferrer",
                                    className: "inline-flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 transition hover:border-indigo-300 hover:bg-white hover:text-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600",
                                            children: icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "website",
                                    children: "Website"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "website",
                                    name: "website",
                                    tabIndex: -1,
                                    autoComplete: "off"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm font-medium text-slate-700",
                                    htmlFor: "name",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "name",
                                    name: "name",
                                    type: "text",
                                    placeholder: "Your name",
                                    className: "w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm font-medium text-slate-700",
                                    htmlFor: "email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    placeholder: "you@example.com",
                                    className: "w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm font-medium text-slate-700",
                                    htmlFor: "message",
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "message",
                                    name: "message",
                                    rows: 5,
                                    placeholder: "Tell me about your project",
                                    className: "w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: status === "sending",
                            className: "inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500",
                            children: status === "sending" ? "Sending..." : "Send Message"
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600",
                            "aria-live": "polite",
                            children: [
                                status === "success" && "Thanks, your message has been sent.",
                                status === "error" && "Something went wrong. Please try again."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Contact.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Contact, "PrSSnJYnmPMLjC7rLJ6w5budhnU=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const navItems = [
    {
        label: "Home",
        id: "home"
    },
    {
        label: "About",
        id: "about"
    },
    {
        label: "Services",
        id: "services"
    },
    {
        label: "Projects",
        id: "projects"
    },
    {
        label: "Skills",
        id: "skills"
    },
    {
        label: "Contact",
        id: "contact"
    }
];
function Header() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    const scrollPosition = window.scrollY + 140;
                    const visibleSection = navItems.reduce({
                        "Header.useEffect.handleScroll.visibleSection": (current, item)=>{
                            const section = document.getElementById(item.id);
                            if (!section) return current;
                            if (section.offsetTop <= scrollPosition) {
                                return item.id;
                            }
                            return current;
                        }
                    }["Header.useEffect.handleScroll.visibleSection"], navItems[0].id);
                    setActiveSection(visibleSection);
                }
            }["Header.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 border-b border-slate-900/70 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-slate-950/25",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-lg font-semibold tracking-tight text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300 shadow-lg shadow-sky-500/10",
                                children: "UD"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Uday Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${item.id}`,
                                onClick: ()=>setMenuOpen(false),
                                className: `transition ${activeSection === item.id ? "text-white underline decoration-sky-400/50 underline-offset-8" : "hover:text-white"}`,
                                children: item.label
                            }, item.id, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Toggle navigation",
                        "aria-expanded": menuOpen,
                        onClick: ()=>setMenuOpen((prev)=>!prev),
                        className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-slate-700 hover:text-white md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative block h-5 w-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform ${menuOpen ? "-translate-y-1.5 rotate-45" : "-translate-y-1.5"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform ${menuOpen ? "translate-y-1.5 -rotate-45" : "translate-y-1.5"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${menuOpen ? "block" : "hidden"} border-t border-slate-900/70 bg-slate-950/95 md:hidden`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "space-y-1 px-6 py-4 text-sm font-medium text-slate-300",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${item.id}`,
                            onClick: ()=>setMenuOpen(false),
                            className: `block rounded-3xl px-4 py-3 transition ${activeSection === item.id ? "bg-slate-900 text-white" : "hover:bg-slate-900/80 hover:text-white"}`,
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Header, "hWv398AxrQ/6WYtSMXSj4i5ZF6k=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_PROFILE = "/profile.svg";
function Hero() {
    _s();
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PROFILE);
    const [isCustomImage, setIsCustomImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timeoutId = window.setTimeout({
                "Hero.useEffect.timeoutId": ()=>{
                    const savedImage = window.localStorage.getItem("portfolio_profile_image");
                    if (savedImage) {
                        setProfileImage(savedImage);
                        setIsCustomImage(true);
                    }
                }
            }["Hero.useEffect.timeoutId"]);
            return ({
                "Hero.useEffect": ()=>window.clearTimeout(timeoutId)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const handleProfileUpload = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ()=>{
            const result = reader.result;
            if (typeof result === "string") {
                setProfileImage(result);
                setIsCustomImage(true);
                window.localStorage.setItem("portfolio_profile_image", result);
            }
        };
        reader.readAsDataURL(file);
    };
    const handleRemovePhoto = ()=>{
        setProfileImage(DEFAULT_PROFILE);
        setIsCustomImage(false);
        window.localStorage.removeItem("portfolio_profile_image");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 px-6 py-16 shadow-[0_24px_70px_-30px_rgba(17,24,39,0.24)] backdrop-blur-xl sm:px-8 lg:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-16 top-8 h-44 w-44 rounded-full bg-teal-400/15 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-12 bottom-[-2rem] h-56 w-56 rounded-full bg-indigo-400/15 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center text-slate-900 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fade-in flex-1 space-y-6 md:max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700",
                                children: "Freelancer | Photo & Video Editing"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl",
                                        children: "Uday Gulla"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl",
                                        children: "Freelancer | Photo & Video Editing | Creative Storytelling"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-7 text-slate-600 sm:text-lg",
                                children: "Frontend developer with React and Next.js experience, crafting modern visual portfolios and immersive digital experiences."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "inline-flex items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500",
                                        children: "Contact Me"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#projects",
                                        className: "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-slate-50 hover:text-slate-900",
                                        children: "See Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fade-in-up flex-1 md:max-w-[420px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto w-full max-w-[360px] rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_-30px_rgba(17,24,39,0.24)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-[1.75rem] bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: profileImage,
                                        alt: "Profile",
                                        width: 720,
                                        height: 720,
                                        className: "h-[360px] w-full object-cover transition duration-700 ease-out"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "group flex cursor-pointer items-center justify-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-white hover:text-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "hidden",
                                                    onChange: handleProfileUpload
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                "Upload profile picture"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        isCustomImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleRemovePhoto,
                                            className: "inline-flex w-full items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100",
                                            children: "Remove profile picture"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Hero, "I3UfIlISvPLF/8x8lb2Ufob6L3k=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/portfolio.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const emptyProject = {
    title: "",
    description: "",
    image: "",
    link: "",
    category: "wedding"
};
function Projects() {
    _s();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultProjects"]);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...emptyProject
    });
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            const timeoutId = window.setTimeout({
                "Projects.useEffect.timeoutId": ()=>{
                    const stored = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEY_PROJECTS"]);
                    if (stored) {
                        try {
                            setProjects(JSON.parse(stored));
                        } catch  {
                        // ignore invalid JSON
                        }
                    }
                }
            }["Projects.useEffect.timeoutId"]);
            return ({
                "Projects.useEffect": ()=>window.clearTimeout(timeoutId)
            })["Projects.useEffect"];
        }
    }["Projects.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            if (!projects.length) return;
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEY_PROJECTS"], JSON.stringify(projects));
        }
    }["Projects.useEffect"], [
        projects
    ]);
    const openAddModal = ()=>{
        setEditId(null);
        setFormState({
            ...emptyProject
        });
        setErrors({});
        setIsModalOpen(true);
    };
    const openEditModal = (project)=>{
        setEditId(project.id);
        setFormState({
            title: project.title,
            description: project.description,
            image: project.image,
            link: project.link,
            category: project.category
        });
        setErrors({});
        setIsModalOpen(true);
    };
    const validateForm = ()=>{
        const nextErrors = {};
        if (!formState.title.trim()) nextErrors.title = "Project title is required.";
        if (!formState.description.trim()) nextErrors.description = "Description is required.";
        if (!formState.image.trim()) nextErrors.image = "Image URL is required.";
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };
    const handleSubmit = ()=>{
        if (!validateForm()) return;
        const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectSlug"])(formState.title);
        const project = {
            id: editId ?? Date.now().toString(),
            slug,
            title: formState.title,
            description: formState.description,
            image: formState.image,
            link: formState.link || "#contact",
            category: formState.category,
            gallery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGalleryForCategory"])(formState.category),
            videoClips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVideoClipsForCategory"])(formState.category)
        };
        if (editId) {
            setProjects((current)=>current.map((item)=>item.id === editId ? project : item));
        } else {
            setProjects((current)=>[
                    project,
                    ...current
                ]);
        }
        setIsModalOpen(false);
    };
    const handleDelete = (id)=>{
        if (!window.confirm("Delete this project?")) return;
        setProjects((current)=>current.filter((project)=>project.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm uppercase tracking-[0.3em] text-sky-300",
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/components/Projects.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-3xl font-semibold text-white sm:text-4xl",
                                children: "Manage Your Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/components/Projects.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Projects.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openAddModal,
                        className: "inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400",
                        children: "Add Project"
                    }, void 0, false, {
                        fileName: "[project]/components/Projects.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Projects.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-xl text-sm leading-7 text-slate-400 sm:text-base",
                children: "Add, edit, and remove projects with responsive cards that update instantly and persist in your browser."
            }, void 0, false, {
                fileName: "[project]/components/Projects.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
                children: [
                    projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/projects/${project.slug}`,
                            className: "group relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/90 shadow-[0_30px_50px_-30px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-sky-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-4 top-4 z-10 flex items-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (event)=>{
                                                event.preventDefault();
                                                openEditModal(project);
                                            },
                                            className: "rounded-full border border-slate-700 bg-slate-950/90 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:bg-slate-800",
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (event)=>{
                                                event.preventDefault();
                                                handleDelete(project.id);
                                            },
                                            className: "rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/20",
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Projects.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-72 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.image,
                                            alt: project.title,
                                            width: 1000,
                                            height: 700,
                                            className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Projects.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold text-white",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Projects.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300",
                                                    children: project.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Projects.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Projects.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-6 text-slate-400",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-white",
                                            children: [
                                                "View details",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Projects.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Projects.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Projects.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/components/Projects.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)),
                    projects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-full rounded-[2rem] border border-dashed border-slate-700/70 bg-slate-900/80 p-10 text-center text-slate-400",
                        children: "No projects yet. Start by adding a new project above."
                    }, void 0, false, {
                        fileName: "[project]/components/Projects.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Projects.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/Projects.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm uppercase tracking-[0.3em] text-sky-300",
                                                children: "Project Details"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-2 text-2xl font-semibold text-white",
                                                children: editId ? "Edit Project" : "Add New Project"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsModalOpen(false),
                                        className: "rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:text-white",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Projects.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-slate-300",
                                                htmlFor: "project-title",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "project-title",
                                                type: "text",
                                                value: formState.title,
                                                onChange: (event)=>setFormState((prev)=>({
                                                            ...prev,
                                                            title: event.target.value
                                                        })),
                                                className: "w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-rose-400",
                                                children: errors.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-slate-300",
                                                htmlFor: "project-description",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "project-description",
                                                rows: 4,
                                                value: formState.description,
                                                onChange: (event)=>setFormState((prev)=>({
                                                            ...prev,
                                                            description: event.target.value
                                                        })),
                                                className: "w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-rose-400",
                                                children: errors.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-slate-300",
                                                htmlFor: "project-image",
                                                children: "Image / Thumbnail URL"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "project-image",
                                                type: "text",
                                                value: formState.image,
                                                onChange: (event)=>setFormState((prev)=>({
                                                            ...prev,
                                                            image: event.target.value
                                                        })),
                                                className: "w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            errors.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-rose-400",
                                                children: errors.image
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-slate-300",
                                                htmlFor: "project-link",
                                                children: "Link"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "project-link",
                                                type: "text",
                                                value: formState.link,
                                                onChange: (event)=>setFormState((prev)=>({
                                                            ...prev,
                                                            link: event.target.value
                                                        })),
                                                placeholder: "#contact",
                                                className: "w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 sm:flex-row sm:justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsModalOpen(false),
                                                className: "inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900 px-5 py-3 text-sm text-slate-200 transition hover:border-slate-700 hover:text-white",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSubmit,
                                                className: "inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400",
                                                children: "Save Project"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Projects.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Projects.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Projects.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Projects.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(Projects, "cP/qDpe/eF5lQzp61T7Jz4zj+6Q=");
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/portfolio.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/portfolio.ts [app-client] (ecmascript)");
"use client";
;
;
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold uppercase tracking-[0.3em] text-teal-600",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold text-slate-950 sm:text-4xl",
                            children: "Streamlined Photo & Video Services"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-7 text-slate-600 sm:text-base",
                            children: "Professional offerings across wedding photography, baby shoots, event coverage, party shoots, promotional campaigns, photo editing, video editing, and video shoots."
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 lg:grid-cols-[0.95fr_1.05fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold uppercase tracking-[0.28em] text-slate-500",
                                    children: "What I offer"
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceOfferings"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-4 text-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-600",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-slate-900",
                                                            children: service
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm leading-6 text-slate-600",
                                                            children: "Professional delivery, polished editing, and high-impact visual storytelling."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, service, true, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold uppercase tracking-[0.28em] text-slate-500",
                                    children: "Service focus areas"
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceCategories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-slate-200 bg-white p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600",
                                                    children: category.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm leading-7 text-slate-600",
                                                    children: category.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, category.id, true, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Services.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "portfolio_skills";
const defaultSkills = [
    {
        id: "1",
        name: "Photoshop",
        category: "editing"
    },
    {
        id: "2",
        name: "Lightroom",
        category: "editing"
    },
    {
        id: "3",
        name: "Premiere Pro",
        category: "editing"
    },
    {
        id: "4",
        name: "After Effects",
        category: "editing"
    },
    {
        id: "5",
        name: "React",
        category: "coding"
    },
    {
        id: "6",
        name: "Next.js",
        category: "coding"
    },
    {
        id: "7",
        name: "GitHub",
        category: "coding"
    }
];
const emptySkill = {
    name: "",
    category: "editing"
};
function badgeStyles(category) {
    return `block w-full rounded-full px-4 py-2 text-sm font-semibold transition ${category === "editing" ? "border border-indigo-200 bg-indigo-50 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-100" : "border border-teal-200 bg-teal-50 text-teal-700 hover:border-teal-300 hover:bg-teal-100"}`;
}
function Skills() {
    _s();
    const [skills, setSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSkills);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...emptySkill
    });
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            const timeoutId = window.setTimeout({
                "Skills.useEffect.timeoutId": ()=>{
                    const stored = localStorage.getItem(STORAGE_KEY);
                    if (stored) {
                        try {
                            setSkills(JSON.parse(stored));
                        } catch  {
                        // ignore invalid JSON
                        }
                    }
                }
            }["Skills.useEffect.timeoutId"]);
            return ({
                "Skills.useEffect": ()=>window.clearTimeout(timeoutId)
            })["Skills.useEffect"];
        }
    }["Skills.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            if (!skills.length) return;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
        }
    }["Skills.useEffect"], [
        skills
    ]);
    const openAddModal = ()=>{
        setEditId(null);
        setFormState({
            ...emptySkill
        });
        setErrors({});
        setIsModalOpen(true);
    };
    const validateForm = ()=>{
        const nextErrors = {};
        if (!formState.name.trim()) nextErrors.name = "Skill name is required.";
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };
    const handleSubmit = ()=>{
        if (!validateForm()) return;
        const skill = {
            id: editId ?? Date.now().toString(),
            name: formState.name.trim(),
            category: formState.category
        };
        if (editId) {
            setSkills((current)=>current.map((item)=>item.id === editId ? skill : item));
        } else {
            setSkills((current)=>[
                    skill,
                    ...current
                ]);
        }
        setIsModalOpen(false);
    };
    const editingSkills = skills.filter((skill)=>skill.category === "editing");
    const codingSkills = skills.filter((skill)=>skill.category === "coding");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold uppercase tracking-[0.3em] text-teal-600",
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl",
                                children: "Manage Skill Badges"
                            }, void 0, false, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Skills.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openAddModal,
                        className: "inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500",
                        children: "Add Skill"
                    }, void 0, false, {
                        fileName: "[project]/components/Skills.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Skills.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-xl text-sm leading-7 text-slate-600 sm:text-base",
                children: "Add new skills, choose categories, and remove or update the badges that show on your portfolio."
            }, void 0, false, {
                fileName: "[project]/components/Skills.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-6 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold uppercase tracking-[0.28em] text-slate-500",
                                                children: "Editing Tools"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm text-slate-600",
                                                children: "Blue badges for creative suites."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-700",
                                        children: editingSkills.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: editingSkills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600",
                                    children: "No editing skills yet."
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this) : editingSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full rounded-3xl border border-slate-200 bg-white p-4 transition hover:border-indigo-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: badgeStyles(skill.category),
                                            children: skill.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    }, skill.id, false, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Skills.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold uppercase tracking-[0.28em] text-slate-500",
                                                children: "Coding Tools"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm text-slate-600",
                                                children: "Green badges for frontend skills."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700",
                                        children: codingSkills.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: codingSkills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600",
                                    children: "No coding skills yet."
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this) : codingSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full rounded-3xl border border-slate-200 bg-white p-4 transition hover:border-teal-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: badgeStyles(skill.category),
                                            children: skill.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this)
                                    }, skill.id, false, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Skills.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Skills.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/Skills.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold uppercase tracking-[0.3em] text-teal-600",
                                                children: "Skill Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-2 text-2xl font-semibold text-slate-950",
                                                children: editId ? "Edit Skill" : "Add Skill"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsModalOpen(false),
                                        className: "rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:border-teal-300 hover:bg-white",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-slate-700",
                                                htmlFor: "skill-name",
                                                children: "Skill name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "skill-name",
                                                type: "text",
                                                value: formState.name,
                                                onChange: (event)=>setFormState((prev)=>({
                                                            ...prev,
                                                            name: event.target.value
                                                        })),
                                                className: "w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-rose-600",
                                                children: errors.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 227,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-slate-700",
                                                htmlFor: "skill-category",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "skill-category",
                                                value: formState.category,
                                                onChange: (event)=>setFormState((prev)=>({
                                                            ...prev,
                                                            category: event.target.value
                                                        })),
                                                className: "w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "editing",
                                                        children: "Editing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Skills.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "coding",
                                                        children: "Coding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Skills.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 sm:flex-row sm:justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsModalOpen(false),
                                                className: "inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-700 transition hover:border-teal-300 hover:bg-white",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSubmit,
                                                className: "inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500",
                                                children: "Save Skill"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Skills.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Skills.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Skills.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Skills.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Skills.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Skills.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(Skills, "sAws19D8siMY2FNCAViGIfyh8EA=");
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/portfolio.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/portfolio.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1wa1ss4._.js.map