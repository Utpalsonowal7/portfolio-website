// export const portfolio = {
//      name: "Utpal",
//      role: "Web designer and front-end developer",
//      email: "elias@elias-dev.ml",
//      homeEmail: "elias@elias.me",
//      discord: "Elias#1234",
//      homeDiscord: "!Elias#3519",
//      currentProject: "Portfolio",
//      copyright: "© Copyright 2022. Made by Elias",
//      contactText:
//           "I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me",
//      introduction: [
//           "Hello, i’m Elias!",
//           "I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.",
//           "Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.",
//      ],
//      social: {
//           github: "",
//           dribbble: "",
//           figma: "https://www.figma.com/design/gYse7ukSOayUzVGwBuoZZa/Portfolio--Community-?node-id=0-1",
//           discord: "",
//           twitter: "",
//      },
// } as const;

// export type ProjectAction = {
//      label: "Live" | "Cached" | "Github" | "Figma";
//      url?: string;
// };
// export type Project = {
//      id: string;
//      name: string;
//      description: string;
//      technologies: string[][];
//      image?: string;
//      actions: ProjectAction[];
// };

// export const completeProjects: Project[] = [
//      {
//           id: "chertnodes",
//           name: "ChertNodes",
//           description: "Minecraft servers hosting",
//           technologies: [["HTML", "SCSS", "Python", "Flask"]],
//           image: "/assets/b781e.png",
//           actions: [{ label: "Live" }, { label: "Cached" }],
//      },
//      {
//           id: "kahoot",
//           name: "Kahoot Answers Viewer",
//           description: "Get answers to your kahoot quiz",
//           technologies: [["CSS", "Express", "Node.js"]],
//           image: "/assets/96c73.png",
//           actions: [{ label: "Live" }],
//      },
//      {
//           id: "protectx",
//           name: "ProtectX",
//           description: "Discord anti-crash bot",
//           technologies: [["React", "Express", "Discord.js", "Node.js"]],
//           image: "/assets/6ca22.png",
//           actions: [{ label: "Cached" }],
//      },
//      {
//           id: "kotik",
//           name: "Kotik Bot",
//           description: "Multi-functional discord bot",
//           technologies: [["HTML", "CSS", "JS"]],
//           image: "/assets/bc097.png",
//           actions: [{ label: "Live" }],
//      },
//      {
//           id: "portfolio",
//           name: "Portfolio",
//           description: "You’re using it rn",
//           technologies: [["Vue", "TS", "Less"]],
//           image: "/assets/b9f5b.png",
//           actions: [{ label: "Github" }],
//      },
// ];

// export const featuredProjects: Project[] = [
//      completeProjects[0],
//      {
//           ...completeProjects[2],
//           technologies: [
//                ["React", "Express", "Discord.js", "Node.js"],
//                ["HTML", "SCSS", "Python", "Flask"],
//           ],
//           actions: [{ label: "Live" }],
//      },
//      completeProjects[1],
// ];

// export const smallProjects: Project[] = [
//      {
//           id: "bot-boilerplate",
//           name: "Bot boilerplate",
//           description:
//                "Start creating scalable discord.js bot with typescript in seconds",
//           technologies: [["Discord.js", "TS", "JS"]],
//           actions: [{ label: "Github" }],
//      },
//      {
//           id: "blog",
//           name: "My blog",
//           description: "Front-end of my future blog website written in vue",
//           technologies: [["VUE", "CSS", "JS"]],
//           actions: [{ label: "Github" }],
//      },
//      {
//           id: "chess",
//           name: "Chess pro",
//           description:
//                "Figma landing page about service for viewing chess tournaments",
//           technologies: [["Figma"]],
//           actions: [{ label: "Figma" }],
//      },
//      {
//           id: "crash",
//           name: "Crash protect website",
//           description:
//                "Figma template for website about anti-raid, anti-crash discord bot",
//           technologies: [["Figma"]],
//           actions: [{ label: "Figma" }],
//      },
//      {
//           id: "css",
//           name: "CSS expirements",
//           description: "Collection of my different little projects in css",
//           technologies: [["HTML", "CSS"]],
//           actions: [{ label: "Live" }],
//      },
//      {
//           id: "nvim",
//           name: "Web Dev nvim config",
//           description: "Config for neovim perfect for web developer",
//           technologies: [["Lua", "NeoVim"]],
//           actions: [{ label: "Github" }],
//      },
//      {
//           id: "ooku",
//           name: "Ooku",
//           description: "Simple link shortener with auth",
//           technologies: [["Python", "Quart", "HTML"]],
//           actions: [{ label: "Live" }],
//      },
//      {
//           id: "school",
//           name: "School website",
//           description: "Figma template website for my school",
//           technologies: [["Figma"]],
//           actions: [{ label: "Figma" }],
//      },
// ];

// export const skills = {
//      Languages: ["TypeScript Lua", "Python JavaScript"],
//      Databases: ["SQLite PostgreSQL", "Mongo"],
//      Other: ["HTML CSS EJS SCSS", "REST Jinja"],
//      Tools: ["VSCode Neovim Linux", "Figma XFCE Arch", "Git Font Awesome"],
//      Frameworks: ["React Vue", "Disnake Discord.js", "Flask Express.js"],
// } as const;

// export const funFacts = [
//      "I like winter more than summer",
//      "I often bike with my friends",
//      "I like pizza and pasta",
//      "I was in Egypt, Poland and Turkey",
//      "My favorite movie is The Green Mile",
//      "I am still in school",
//      "I don’t have any siblings",
// ];

export const portfolio = {
     name: "Utpal",
     role: "Full Stack Developer",
     email: "", // Add your email
     homeEmail: "", // Add the same email
     discord: "",
     homeDiscord: "",
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
          twitter: "",
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
