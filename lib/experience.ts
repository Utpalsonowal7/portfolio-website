export type Experience = {
  id: string;
  role: string;
  organization: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract" | "Volunteer";
  startDate: string;
  endDate?: string; // Leave empty for a current role.
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

// Add future roles here, newest first. Both pages use this list.
export const experiences: Experience[] = [
  {
    id: "nic-internship",
    role: "Full Stack Developer Intern",
    organization: "National Informatics Centre (NIC)",
    type: "Internship",
    startDate: "Jan 2025",
    endDate: "Dec 2025",
    location: "Lakhimpur, Assam, India",
    description: "Built a two-tier transportation management system to automate food supply transportation billing across warehouses, wholesalers, and retailers.",
    highlights: [
      "Implemented role-based access for system administrators, district administrators, and data-entry users.",
      "Automated transportation costs using commodity, distance, and geographical area data.",
      "Reduced billing preparation from approximately 3–4 hours to around 10 minutes.",
      "Generated downloadable Excel billing sheets with automated formatting and monthly reports.",
    ],
    technologies: ["PHP", "PostgreSQL", "JavaScript", "Bootstrap"],
  },
];
