

export const portfolio = {
     name: "Utpal",
     role: "Full Stack Developer",
     email: "sonowalu73@gmail.com",
     homeEmail: "sonowalu73@gmail.com",
     discord: "utpal_sonowal",
     homeDiscord: "utpal_sonowal",
     currentProject: "Study Buddy",
     copyright: `© Copyright ${new Date().getFullYear()}. Made by Utpal Sonowal`,
     contactText:
          "I’m available for freelance projects and software development opportunities. Have a project, a role, or a question in mind? Let’s connect.",
     introduction: [
          "Hello, I’m Utpal Sonowal!",
          "I’m a full-stack developer based in Assam, India. I build responsive websites, web applications, REST APIs, and database-driven business solutions.",
          "My experience includes a software development internship at NIC, freelance web development, and independent full-stack projects. I work with React, Next.js, TypeScript, Node.js, FastAPI, and PostgreSQL.",
          "I enjoy turning practical problems into working products, from transportation management systems to link analytics and AI-powered document chat.",
     ],
     social: {
          github: "https://github.com/Utpalsonowal7",
          dribbble: "",
          figma: "",
          discord: "",
          twitter: "https://x.com/UtpalSo95273383",
          linkedin: "https://www.linkedin.com/in/utpal-sonowal/",
     },
} as const;

export type ProjectAction = {
     label: "Live" | "Cached" | "Github" | "Figma";
     url?: string;
};

export type Project = {
     id: string;
     name: string;
     description: string;
     technologies: string[][];
     image?: string;
     actions: ProjectAction[];
};

export const completeProjects: Project[] = [
     {
          id: "study-buddy",
          name: "Study Buddy",
          description:
               "AI-powered document chat with RAG retrieval, streamed responses, source citations, and private user documents.",
          technologies: [
               ["React", "TypeScript", "FastAPI"],
               ["PostgreSQL", "pgvector", "Redis", "Gemini"],
          ],
          image: "/assets/pr1.png",
          actions: [
               { label: "Live", url: "https://studybuddy.utpx.in/dashboard" },
               {
                    label: "Github",
                    url: "https://github.com/Utpalsonowal7/study-buddy.git",
               },
          ],
     },
     {
          id: "lnkshrt",
          name: "LnkShrt",
          description:
               "A link-shortening platform with authentication, detailed click analytics, password protection, and link expiration.",
          technologies: [
               ["React", "TypeScript", "Node.js"],
               ["Express", "PostgreSQL"],
          ],
          image: "/assets/pr2.png",
          actions: [
               {
                    label: "Live",
                    url: "https://app.utpx.in",
               },
               {
                    label: "Github",
                    url: "https://github.com/Utpalsonowal7/link-shortner-backend",
               },
          ],
     },
     {
          id: "pulseboard",
          name: "PulseBoard",
          description:
               "An uptime monitoring dashboard with scheduled health checks, incident tracking, and background jobs.",
          technologies: [
               ["React", "TypeScript", "Node.js", "Express"],
               ["Prisma", "PostgreSQL", "Docker"],
          ],
          image: "/assets/pr3.png",
          actions: [
               { label: "Live" },
               {
                    label: "Github",
                    url: "https://github.com/Utpalsonowal7/pulseboard-uptime-monitor.git",
               },
          ],
     },
     {
          id: "food-supply-management",
          name: "Food Supply Management",
          description:
               "Built during my NIC internship to manage two-tier transportation, warehouse mappings, role-based access, and monthly billing reports.",
          technologies: [["PHP", "JavaScript", "Bootstrap"], ["PostgreSQL"]],
          image: "/assets/food-supply-management.png",
          actions: [{ label: "Github" }],
     },
     {
          id: "school-website",
          name: "High School Website",
          description:
               "A responsive school website with an admin dashboard for managing notices, events, and gallery uploads.",
          technologies: [
               ["React", "TypeScript", "Express"],
               ["Cloudinary", "Vercel", "Render"],
          ],
          image: "/assets/school-website.png",
          actions: [
               {
                    label: "Live",
                    url: "https://high-school-website-ten.vercel.app",
               },
               { label: "Github" },
          ],
     },
     {
          id: "portfolio",
          name: "Developer Portfolio",
          description:
               "A responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS.",
          technologies: [["Next.js", "TypeScript", "Tailwind CSS"]],
          image: "/assets/pr5.png",
          actions: [
               {
                    label: "Github",
                    url: "https://github.com/Utpalsonowal7/portfolio-website",
               },
          ],
     },
];

export const featuredProjects: Project[] = completeProjects.slice(0, 3);

export const smallProjects: Project[] = [
     {
          id: "fastapi-auth",
          name: "FastAPI Authentication",
          description:
               "Authentication with email OTP, Google and GitHub OAuth, secure cookies, refresh-token rotation, and session revocation.",
          technologies: [
               ["Python", "FastAPI", "PostgreSQL"],
               ["Redis", "OAuth", "JWT"],
          ],
          actions: [{ label: "Github" }], 
     },
     {
          id: "thumbnail-maker",
          name: "AI Thumbnail Maker",
          description:
               "An AI thumbnail application with background processing, job tracking, image generation, and Redis-backed rate limiting.",
          technologies: [
               ["FastAPI", "SQLAlchemy", "PostgreSQL"],
               ["Redis", "Gemini", "ImageKit"],
          ],
          actions: [{ label: "Github" }], 
     },
];

export const skills = {
     Languages: ["TypeScript", "JavaScript Python", "PHP"],
     Databases: ["PostgreSQL", "pgvector Redis"],
     Other: ["HTML CSS", "Tailwind Bootstrap", "REST APIs OAuth"],
     Tools: ["Git GitHub", "Docker VSCode", "Postman Linux"],
     Frameworks: ["React Next.js", "Node.js Express", "FastAPI"],
} as const;

export const funFacts = [
     "I’m based in Assam, India",
     "I studied Computer Science through BCA",
     "I gained development experience at NIC",
     "I build full-stack and AI-powered applications",
     "I also work on freelance web projects",
     "My portfolio domain is utpx.in",
];
