import React from "react";

interface ProjectType {
  name: string;
  stack: string[];
  url?: string;
  dashboard?: string;
  github?: string;
  description: string;
  featured?: boolean;
  category: string;
}

const PROJECTS_DATA: ProjectType[] = [
  {
    name: "CodeMap – AI-Powered Learning Platform",
    stack: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Firebase Auth",
      "Gemini AI",
      "React Query",
      "Tailwind CSS",
      "Framer Motion",
    ],
    url: "https://codemapuser.netlify.app/",
    dashboard: "https://dashboard-roadmap.netlify.app/authpage",
    github: "https://github.com/rofaidaezzat/CodeMap",
    description:
      "Built admin panel with Next.js, Redux Toolkit, Tailwind CSS, and Framer Motion. Features include form validation, user roles, grading, and notifications. User side uses Firebase Auth, React Query, and Gemini LLM chatbot for learning recommendations.",
    featured: true,
    category: "team",
  },
  {
    name: "System Management Platform",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
      "shadcn/ui",
      "Clerk",
      "Zod",
    ],
    url: "https://full-stack-todo-app-sigma.vercel.app/sign-in?redirect_url=https%3A%2F%2Ffull-stack-todo-app-sigma.vercel.app%2F",
    github: "https://github.com/rofaidaezzat/full-stack-todo-App",
    description:
      "Full-stack web app for managing users and workflows. Includes Clerk authentication, Zod validation, and a responsive UI.",
    category: "solo",
  },
  {
    name: "Fitness Training Website",
    stack: ["React", "Supabase Auth", "Axios", "React Query", "Framer Motion"],
    url: "https://exercise-fitness-website.vercel.app/",
    github: "https://github.com/rofaidaezzat/Exercise-fitness-website",
    description:
      "Responsive fitness platform showing exercises by muscle group. Includes animated UI, icons, and toast notifications.",
    category: "team",
  },
  {
    name: "VS Code Clone",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Syntax Highlighter",
      "Match Sorter",
      "Resizable Panels",
    ],
    url: "https://vs-code-clone-mauve.vercel.app/",
    github: "https://github.com/rofaidaezzat/VS_Code_Clone",
    description:
      "Visual Studio Code clone with panel resizing, code highlighting, and file search functionality.",
    category: "solo",
  },
  {
    name: "Taw3ya – Islamic Awareness Platform",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "Freelance contribution to the 'Monotheism' page. Focused on front-end implementation and responsiveness.",
    category: "freelance",
  },
  {
    name: "Modern Wear – Product Dashboard",
    stack: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    url: "https://modern-wear-chi.vercel.app/",
    github: "https://github.com/rofaidaezzat/ModernWear",
    description:
      "Built a fully functional product dashboard with CRUD operations, product filtering, and reusable components.",
    category: "solo",
  },
  {
    name: "E-Commerce – Formal Wear Shop",
    stack: [
      "React 19",
      "Vite",
      "Chakra UI",
      "Redux Toolkit",
      "RTK Query",
      "Framer Motion",
    ],
    url: "https://e-commerceappuser.netlify.app/",
    github: "https://github.com/rofaidaezzat/E-Commerce",
    description:
      "Modern, responsive e-commerce site with product filtering, cart features, and smooth UI animations. Backend migration to Supabase is in progress.",
    category: "solo",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
      <div className="space-y-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-green-400">
              {project.name}
            </h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-green-600 text-white text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4 flex-wrap">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  className="text-sm text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-md"
                >
                  🔗 Live
                </a>
              )}
              {project.dashboard && (
                <a
                  href={project.dashboard}
                  target="_blank"
                  className="text-sm text-white bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md"
                >
                  📊 Dashboard
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-green-400 hover:underline px-3 py-1.5"
                >
                  🐙 GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
