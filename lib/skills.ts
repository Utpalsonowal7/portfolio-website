export type SkillCategory = {
     id: string;
     title: string;
     description: string;
     skills: readonly string[];
};

export const skillCategories: readonly SkillCategory[] = [
     {
          id: "languages",
          title: "Languages",
          description:
               "The languages I use to build interfaces, APIs, and business applications.",
          skills: ["TypeScript", "JavaScript", "Python", "C", "C++", "PHP", "HTML", "CSS"],
     },
     {
          id: "frontend",
          title: "Frontend",
          description:
               "Responsive interfaces, reusable components, and accessible web experiences.",
          skills: [
               "React",
               "Next.js",
               "Tailwind CSS",
               "Bootstrap",
               "Responsive Design",
               "Shadcn UI",
               "React Router",
               "Redux Toolkit",
               "Context API",
               "Axios",
          ],
     },
     {
          id: "backend",
          title: "Backend",
          description:
               "Database-driven services, API integrations, and streamed responses.",
          skills: [
               "Node.js",
               "Express",
               "FastAPI",
               "REST APIs",
               "Server-Sent Events",
               "API Integrations",
               "Zod",
          ],
     },
     {
          id: "databases",
          title: "Databases & ORM",
          description:
               "Relational data, vector search, caching, and database access.",
          skills: [
               "PostgreSQL",
               "MongoDB",
               "pgvector",
               "Redis",
               "Prisma",
               "SQLAlchemy",
               "SQL",
               "Database Indexing",
          ],
     },
     {
          id: "authentication",
          title: "Authentication",
          description:
               "Secure sign-in flows and access control for user-owned data.",
          skills: [
               "JWT",
               "OAuth",
               "Email OTP",
               "Role-Based Access Control",
               "HttpOnly Cookies",
               "Refresh Token Rotation",
               "Session Management",
               "Authentication & Authorization",
               "Account Linking",
               "Email Verification",
               "Multi-Tenant Data Isolation",
          ],
     },
     {
          id: "ai-background-jobs",
          title: "AI & Background Jobs",
          description:
               "Document retrieval, AI integrations, and asynchronous processing.",
          skills: [
               "Gemini API / SDK",
               "LLMs",
               "Prompt Engineering",
               "Vector Databases",
               "BullMQ",
               "Retrieval-Augmented Generation",
               "Embeddings",
               "Vector Search",
               "Document Chunking",
               "Background Jobs",
               "Scheduled Health Checks",
               "Redis Rate Limiting",
          ],
     },
     {
          id: "cloud-deployment",
          title: "Cloud & Deployment",
          description:
               "Deploying applications, configuring domains, and automating builds.",
          skills: [
               "AWS EC2",
               "AWS S3",
               "AWS Lambda",
               "AWS RDS",
               "Vercel",
               "Render",
               "Railway",
               "Cloudflare",
               "Docker",
               "CI/CD (GitHub Actions)",
               "Custom Domains",
               "DNS Configuration",
          ],
     },
     {
          id: "tools-services",
          title: "Tools & Services",
          description:
               "Development tools and services for media, email, and integrations.",
          skills: [
               "Git",
               "GitHub",
               "VSCode",
               "Postman",
               "Figma",
               "k6",
               "Linux",
               "WSL",
               "Cloudinary",
               "ImageKit",
               "Brevo",
          ],
     },
];


export const skills = {
     Languages: ["TypeScript", "JavaScript", "Python PHP"],
     Databases: ["PostgreSQL",
               "MongoDB", "pgvector Redis"],
     Other: ["HTML CSS", "Tailwind Bootstrap", "REST APIs OAuth"],
     Tools: ["Git GitHub", "Docker VSCode"],
     Frameworks: ["React Next.js", "Express FastAPI"],
} as const;

export const extendedTools: readonly string[] = [
     ...skills.Tools,
     "Postman Linux WSL",
     "CI/CD (GitHub Actions)",
];
