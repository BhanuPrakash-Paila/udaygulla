const skillCategories = [
  {
    id: "photography",
    title: "Photography",
    description: "Still images shaped around people, place, and light.",
    accent: "bg-rose-500",
    skills: [
      "Wedding & Engagement Photography",
      "Candid Photography",
      "Portrait & Lifestyle Photography",
      "Event Photography",
      "Corporate Event Photography",
      "Product & Brand Photography",
      "Travel & Street Photography",
      "Lighting & Composition",
      "Visual Storytelling",
    ],
  },
  {
    id: "videography",
    title: "Videography & Event Coverage",
    description: "Planned coverage for celebrations, events, and brand stories.",
    accent: "bg-amber-500",
    skills: [
      "Wedding Films & Highlight Videos",
      "Event Videography",
      "Birthday & Private Event Coverage",
      "Corporate Event Coverage",
      "Brand Campaign Videos",
      "Behind-the-Scenes Filming",
      "Camera & Gimbal Operation",
      "Shot Planning & Coordination",
    ],
  },
  {
    id: "editing",
    title: "Photo & Video Editing",
    description: "Finishing work that brings photographs and footage together.",
    accent: "bg-teal-600",
    skills: [
      "Photo Retouching & Enhancement",
      "Color Correction",
      "Color Grading",
      "Cinematic Video Editing",
      "Wedding Highlight Editing",
      "Event Recap Videos",
      "Audio Synchronization & Sound Design",
      "Photo Album Design",
    ],
  },
  {
    id: "writing",
    title: "Content Writing & Copywriting",
    description: "Clear, audience-aware writing for digital channels.",
    accent: "bg-indigo-600",
    skills: [
      "Social Media Captions",
      "Blog & Article Writing",
      "SEO Content Writing",
      "Video Scriptwriting",
      "Creative Hooks",
      "Advertising & Promotional Copy",
      "Brand Storytelling",
      "Product Descriptions",
      "YouTube Titles & Descriptions",
    ],
  },
  {
    id: "social-content",
    title: "Social Media & Brand Content",
    description: "Short-form and campaign assets with a consistent visual voice.",
    accent: "bg-sky-600",
    skills: [
      "Instagram Reels & YouTube Shorts",
      "Social Media Content Creation",
      "Product Launch Content",
      "Promotional Videos",
      "Social Media Campaign Content",
      "Thumbnail & Post Design",
      "Content Calendar Planning",
      "Brand Visual Consistency",
    ],
  },
  {
    id: "creative-professional",
    title: "Creative & Professional Skills",
    description: "Thoughtful collaboration from first idea through delivery.",
    accent: "bg-lime-600",
    skills: [
      "Creative Direction",
      "Concept Development",
      "Storyboarding & Shot Planning",
      "Client Communication",
      "On-Location Adaptability",
      "Project Management",
      "Deadline Management",
      "Attention to Detail",
      "Feedback & Revision Management",
    ],
  },
] as const;

const softwareTools = [
  "Adobe Lightroom",
  "Adobe Photoshop",
  "Adobe Premiere Pro",
  "Adobe After Effects",
];

export default function Skills() {
  return (
    <section id="skills" className="mt-20 scroll-mt-28">
      <div className="mb-8 max-w-3xl sm:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">Skills</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Creative craft, from capture to story
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          A versatile creative practice spanning photography, video production, editing, and brand
          storytelling.
        </p>
      </div>

      <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <article
            key={category.id}
            className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.7)] sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${category.accent}`}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-950">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className={`mt-[0.65rem] h-1 w-1 shrink-0 rounded-full ${category.accent}`}
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-slate-800 pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
          Software
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Creative software tools">
          {softwareTools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-slate-700 bg-slate-900 px-3.5 py-2 text-sm text-slate-200"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
