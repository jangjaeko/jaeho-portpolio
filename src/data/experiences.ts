export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
  skills: string[];
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Humaner AI",
    role: "Product-Focused Frontend Developer",
    period: "Oct 2023 – Jul 2025",
    description: [
      "Designed and developed multiple prototype and demo-focused frontends (AI Search, Creator AI, AI Companion, AI Photo Kiosk) using React, Next.js, and Electron.",
      "Built and shipped a kiosk-based AI photo system from prototype to production, improving real-time performance at live events.",
      "Integrated emerging AI technologies (ComfyUI, Stable Diffusion) into demo features.",
    ],
    logo: "https://placehold.co/80x80/1a1a2e/06b6d4?text=H",
    skills: ["React", "Next.js", "Electron", "TypeScript"],
    featured: true,
  },
  {
    id: 2,
    company: "ChexCar (KIA)",
    role: "Project Manager & Frontend Developer",
    period: "Apr 2023 – Aug 2023",
    description: [
      "Supported deployment processes and QA workflows for KIA Corporation's fleet management platform.",
      "Worked cross-functionally with QA engineers and business teams to strengthen development-to-test automation.",
    ],
    logo: "https://placehold.co/80x80/1a1a2e/14b8a6?text=C",
    skills: ["React", "QA Automation", "Project Management"],
    featured: false,
  },
  {
    id: 3,
    company: "Meetup Lab",
    role: "Community Manager - Tech Meetup",
    period: "May 2023 – Aug 2023",
    description: [
      "Organized developer-designer collaboration meetups, featuring industry leaders like the CEO of Dexter Studio (Major VFX company).",
      "Improved communication between technical and creative teams.",
    ],
    logo: "https://placehold.co/80x80/1a1a2e/22d3ee?text=M",
    skills: ["Community Building", "Event Planning", "UI/UX"],
    featured: false,
  },
  {
    id: 4,
    company: "RF Camp - Mimicle",
    role: "Full-Stack Developer",
    period: "Sep 2022 – Apr 2023",
    description: [
      "Developed core community and UI features for an illustration-sharing mobile app with PHP backend and MySQL.",
      "Owned Spanish and French app versions, building reusable features across regions.",
    ],
    logo: "https://placehold.co/80x80/1a1a2e/2dd4bf?text=RF",
    skills: ["React Native", "PHP", "MySQL", "JavaScript"],
    featured: false,
  },
  {
    id: 5,
    company: "CLA Corporation",
    role: "Frontend Developer",
    period: "Oct 2021 – Aug 2022",
    description: [
      "Built the full frontend of an influencer management mobile app using React Native with REST API integration.",
      "Developed a React-based web platform for advertisers and influencers to manage advertising opportunities.",
    ],
    logo: "https://placehold.co/80x80/1a1a2e/5eead4?text=CLA",
    skills: ["React", "React Native", "REST API"],
    featured: false,
  },
];
