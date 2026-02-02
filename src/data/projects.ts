export interface Project {
  id: string;
  name: string;
  description: string;
  whatIDid: string;
  techStack: string[];
  thumbnail: string;
  detailedImage: string;
}

export const projects: Project[] = [
  {
    id: "photo-nemo",
    name: "Photo Nemo - AI Photo Kiosk",
    description:
      "Beyond simple shooting, we deliver branded, tailor-made photo experiences. Meet the next-generation photobooth that elevates event success and brand value together.",
    whatIDid:
      "Led full-stack development of a Next.js-based AI photo kiosk, integrating ComfyUI for on-device image generation and AWS S3 for secure storage. Designed intuitive UI/UX to enhance user engagement and streamline photo processing.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "AWS",
      "Figma",
      "ComfyUI",
      "Stable Diffusion",
      "Electron",
      "ChatGPT",
    ],
    thumbnail: "/project/photoNemo-thumbnail.webp",
    detailedImage: "/project/photonemo-modal.webp",
  },
  {
    id: "mimicle",
    name: "Mimicle App",
    description:
      "An emotion-sharing platform through art. A mobile app where users can draw, share illustrations, and receive emotion cards.",
    whatIDid:
      "Developed core community and UI features for an illustration-sharing mobile app with PHP backend and MySQL. Owned Spanish and French app versions, building reusable features across regions.",
    techStack: ["PHP", "MySQL", "Vanilla JS"],
    thumbnail: "/project/mimicle-thumbnail.png",
    detailedImage: "/project/mimicle-modal.png",
  },
];
