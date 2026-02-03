export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
  skills: string[];
  featured: boolean;
  detailedImage: string;
  detailedDescription: string;
  achievements: string[];
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
    detailedImage: "https://placehold.co/600x800/1a1a2e/06b6d4?text=Humaner+AI",
    detailedDescription: "Led frontend development for an AI-first startup, rapidly prototyping and shipping innovative products that showcased cutting-edge AI capabilities. Collaborated closely with AI engineers and product managers to translate complex AI features into intuitive user experiences.",
    achievements: [
      "Shipped 4+ AI-powered products from prototype to production",
      "Reduced kiosk photo processing time by 40% through optimization",
      "Successfully deployed at 10+ live events with 99.9% uptime",
    ],
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
    detailedImage: "https://placehold.co/600x800/1a1a2e/14b8a6?text=ChexCar",
    detailedDescription: "Managed the development lifecycle for KIA's enterprise fleet management platform, bridging technical and business requirements while ensuring quality standards were met throughout the deployment process.",
    achievements: [
      "Streamlined QA workflow reducing bug turnaround time by 30%",
      "Coordinated releases across 3 cross-functional teams",
    ],
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
    detailedImage: "https://placehold.co/600x800/1a1a2e/22d3ee?text=Meetup+Lab",
    detailedDescription: "Founded and led a tech community focused on bridging the gap between developers and designers. Created a platform for knowledge sharing and professional networking in the Korean tech industry.",
    achievements: [
      "Hosted 8+ successful meetup events",
      "Built a community of 200+ developers and designers",
      "Featured speakers from top Korean tech companies",
    ],
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
    detailedImage: "https://placehold.co/600x800/1a1a2e/2dd4bf?text=RF+Camp",
    detailedDescription: "Full-stack developer for a global illustration-sharing platform, working on both mobile frontend and backend systems. Led the internationalization effort for European markets while maintaining code quality across multiple regional versions.",
    achievements: [
      "Launched app in 2 new European markets (Spain, France)",
      "Improved app load time by 25% through code optimization",
      "Implemented community features used by 50K+ monthly users",
    ],
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
    detailedImage: "https://placehold.co/600x800/1a1a2e/5eead4?text=CLA+Corp",
    detailedDescription: "Led frontend development for an influencer marketing platform, building both mobile and web applications from scratch. Created intuitive interfaces that connected brands with influencers, streamlining the entire advertising campaign workflow.",
    achievements: [
      "Built mobile app from scratch serving 10K+ users",
      "Developed web platform connecting 500+ advertisers",
      "Achieved 4.5+ star rating on app stores",
    ],
  },
];
