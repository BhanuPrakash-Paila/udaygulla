"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  type Project,
  type ProjectCategory,
  defaultProjects,
  STORAGE_KEY_PROJECTS,
  createProjectSlug,
  getProjectCategoryLabel,
  isPreviewProject,
} from "../lib/portfolio";

const emptyProject = {
  title: "",
  description: "",
  image: "",
  link: "",
  category: "wedding" as Project["category"],
};

const projectFilters: {
  id: string;
  label: string;
  categories: ProjectCategory[];
}[] = [
  { id: "all", label: "All Work", categories: [] },
  {
    id: "photography",
    label: "Photography",
    categories: ["wedding", "baby", "personal", "couple"],
  },
  {
    id: "events",
    label: "Weddings & Events",
    categories: ["wedding", "event", "couple"],
  },
  { id: "films", label: "Films & Videography", categories: ["video"] },
  { id: "brand", label: "Brand & Product", categories: ["promo"] },
  { id: "social", label: "Social Media Content", categories: ["insta"] },
];

const projectCategoryOptions: { value: ProjectCategory; label: string }[] = [
  { value: "wedding", label: "Wedding" },
  { value: "event", label: "Event" },
  { value: "baby", label: "Baby & family" },
  { value: "personal", label: "Personal & lifestyle" },
  { value: "couple", label: "Couple" },
  { value: "video", label: "Film & videography" },
  { value: "promo", label: "Brand & product" },
  { value: "insta", label: "Social media" },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({ ...emptyProject });
  const [editId, setEditId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const stored = localStorage.getItem(STORAGE_KEY_PROJECTS);
      if (stored) {
        try {
          setProjects(JSON.parse(stored));
        } catch {
          // ignore invalid JSON
        }
      }
    });

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!projects.length) return;
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
  }, [projects]);

  const openEditModal = (project: Project) => {
    setEditId(project.id);
    setFormState({
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      category: project.category,
    });
    setErrors({});
    setIsModalOpen(true);
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!formState.title.trim()) nextErrors.title = "Project title is required.";
    if (!formState.description.trim()) nextErrors.description = "Description is required.";
    if (!formState.image.trim()) nextErrors.image = "Image URL is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    const slug = createProjectSlug(formState.title);
    const currentProject = editId ? projects.find((item) => item.id === editId) : undefined;
    const currentProjectIsPreview = currentProject ? isPreviewProject(currentProject) : false;

    const project: Project = {
      id: editId ?? Date.now().toString(),
      slug,
      title: formState.title,
      description: formState.description,
      image: formState.image,
      link: formState.link || "#contact",
      category: formState.category,
      gallery: currentProjectIsPreview
        ? [formState.image]
        : currentProject?.gallery.length
          ? currentProject.gallery
          : [formState.image],
      videoClips: currentProjectIsPreview ? [] : (currentProject?.videoClips ?? []),
    };

    if (editId) {
      setProjects((current) => current.map((item) => (item.id === editId ? project : item)));
    } else {
      setProjects((current) => [project, ...current]);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Delete this project?")) return;
    setProjects((current) => current.filter((project) => project.id !== id));
  };

  const visibleFilters = projectFilters.filter(
    (filter) =>
      filter.id === "all" ||
      projects.some((project) => filter.categories.includes(project.category)),
  );
  const selectedFilter =
    visibleFilters.find((filter) => filter.id === activeFilter) ?? visibleFilters[0];
  const filteredProjects = projects.filter((project) => {
    return (
      !selectedFilter ||
      selectedFilter.id === "all" ||
      selectedFilter.categories.includes(project.category)
    );
  });

  return (
    <section id="projects" className="mt-24 scroll-mt-28">
      <ScrollReveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--portfolio-violet)] sm:text-sm">
          Selected work
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--portfolio-plum)] sm:text-4xl">
          Stories told through the lens.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#665d66] sm:text-base">
          A collection of moments, visuals, and creative projects shaped by emotion, perspective,
          and attention to detail.
        </p>
      </ScrollReveal>

      <div
        className="mt-7 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {visibleFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={selectedFilter?.id === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--portfolio-violet)] ${
              selectedFilter?.id === filter.id
                ? "border-[var(--portfolio-plum)] bg-[var(--portfolio-plum)] text-white"
                : "border-[#c7a9b8]/70 bg-white/60 text-[#5e5660] hover:border-[var(--portfolio-violet)] hover:bg-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => {
          const isPreview = isPreviewProject(project);
          const isPortrait = ["baby", "personal", "couple"].includes(project.category);

          return (
            <ScrollReveal key={`${activeFilter}-${project.id}`} delay={(index % 3) * 80}>
              <article className="project-card group relative overflow-hidden rounded-2xl border border-[#d8cbd2] bg-[#fffdfc] shadow-[0_18px_48px_-38px_rgba(41,35,43,0.62)] transition duration-300 hover:-translate-y-1 hover:border-[#c7a9b8] hover:shadow-[0_26px_56px_-38px_rgba(41,35,43,0.7)]">
                <div className="absolute right-3 top-3 z-20 flex gap-2 md:opacity-0 md:transition-opacity md:duration-200 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                  <button
                    type="button"
                    aria-label={`Edit ${project.title}`}
                    onClick={() => openEditModal(project)}
                    className="min-h-9 rounded-full border border-white/60 bg-[var(--portfolio-plum)]/90 px-3 text-xs font-semibold text-white backdrop-blur focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    aria-label={`Delete ${project.title}`}
                    onClick={() => handleDelete(project.id)}
                    className="min-h-9 rounded-full border border-white/60 bg-[var(--portfolio-plum)]/90 px-3 text-xs font-semibold text-white backdrop-blur focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Delete
                  </button>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="block focus-visible:outline-none"
                >
                  <div
                    className={`project-image relative overflow-hidden ${isPortrait ? "aspect-4/5" : "aspect-4/3"}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={isPortrait ? 800 : 1200}
                      height={isPortrait ? 1000 : 900}
                      sizes="(max-width: 767px) 88vw, (max-width: 1279px) 44vw, 30vw"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#29232b]/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                    {isPreview && (
                      <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-[#29232b]/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                        Preview image · replace
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                          {getProjectCategoryLabel(project.category)}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold leading-tight sm:text-xl">
                          {project.title}
                        </h3>
                      </div>
                      <span
                        aria-hidden="true"
                        className="mb-0.5 shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 p-4 sm:p-5">
                    <p className="line-clamp-2 text-sm leading-6 text-[#665d66]">
                      {isPreview
                        ? "Sample portfolio entry. Replace this image and description with verified project work."
                        : project.description}
                    </p>
                    <span className="inline-flex min-h-8 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--portfolio-violet)]">
                      View project <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-[#c7a9b8] bg-white/60 px-6 py-12 text-center">
            <p className="text-lg font-semibold text-[var(--portfolio-plum)]">
              No projects in this category yet.
            </p>
            <p className="mt-2 text-sm text-[#665d66]">
              Choose another category or add a project preview.
            </p>
          </div>
        )}
      </div>

      <ScrollReveal className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#c7a9b8]/60 pt-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-[var(--portfolio-plum)]">
            Your story could be next.
          </h3>
          <p className="mt-1 text-sm text-[#665d66]">
            Let&apos;s talk about your next shoot, event, or creative idea.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--portfolio-violet)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#5743c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-violet)] motion-reduce:transform-none"
        >
          Let&apos;s work together <span aria-hidden="true">↗</span>
        </a>
      </ScrollReveal>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Project Details</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Edit Project</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-title"
                >
                  Title
                </label>
                <input
                  id="project-title"
                  type="text"
                  value={formState.title}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
                {errors.title && <p className="mt-2 text-sm text-rose-400">{errors.title}</p>}
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-description"
                >
                  Description
                </label>
                <textarea
                  id="project-description"
                  rows={4}
                  value={formState.description}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      description: event.target.value,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
                {errors.description && (
                  <p className="mt-2 text-sm text-rose-400">{errors.description}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-category"
                >
                  Project category
                </label>
                <select
                  id="project-category"
                  value={formState.category}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      category: event.target.value as ProjectCategory,
                    }))
                  }
                  className="mb-5 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                >
                  {projectCategoryOptions.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-image"
                >
                  Image / Thumbnail URL
                </label>
                <input
                  id="project-image"
                  type="text"
                  value={formState.image}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      image: event.target.value,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
                {errors.image && <p className="mt-2 text-sm text-rose-400">{errors.image}</p>}
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-link"
                >
                  Link
                </label>
                <input
                  id="project-link"
                  type="text"
                  value={formState.link}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      link: event.target.value,
                    }))
                  }
                  placeholder="#contact"
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900 px-5 py-3 text-sm text-slate-200 transition hover:border-slate-700 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Save Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
