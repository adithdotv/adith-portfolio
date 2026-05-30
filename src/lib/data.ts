export const profile = {
  name: "Adith V",
  role: "Full-Stack Developer",
  tagline:
     "Building modern full-stack applications with React, Node.js, and Web3 technologies.",
  location: "Kannur, Kerala, India",
  email: "adithv137@gmail.com",
  socials: {
    github: "https://github.com/adithdotv",
    linkedin: "https://www.linkedin.com/in/adith-v-1412001b4/",
    twitter: "https://twitter.com/Adith1817",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Hackathons Participated" },
  { value: "1+", label: "Years Industry Experience" },
];

export const exploring = [
  "AI agents",
  "Web3 infrastructure",
  "scalable backend systems",
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "MUI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Web3",
    skills: [
      "Solidity",
      "web3.js",
      "Wallet Integration",
      "Smart Contract Interaction",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Figma",
      "VS Code",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
  accent: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "FAIRLANCE - Decentralized Freelance Marketplace",
    description:
      "FAIRLANCE is a decentralized Web3 freelance marketplace that connects clients and freelancers through blockchain-powered escrow payments, reputation NFTs, and DAO-based governance.",
    tags: ["React", "MUI", "Solidity", "Metamask", "Web3.js"],
    link: "#",
    repo: "https://github.com/adithdotv/FairLance",
    accent: "from-violet-500 to-fuchsia-500",
    image: "/projects/fairlance.webp",
  },
  {
    title: "ZEITGEIST 2026 - College IT Fest Platform",
    description:
      "Full-stack event registration platform with team and solo participant management, Cashfree UPI and card payments, JWT-signed QR ticket generation, automated confirmation emails, on-ground QR check-in scanner, and a role-based admin dashboard.",
    tags: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "Cashfree API", "JWT", "Railway"],
    link: "https://zeitgeistkuc.in/",
    repo: "https://github.com/Anugrxh/IT-Fest-Backend",
    accent: "from-cyan-500 to-blue-500",
    image: "/projects/zeitgeist.webp",
  },
  {
    title: "Campus Arts Fest Website",
    description:
      "A modern, responsive website for the annual campus arts festival, featuring event listings, and live updates.",
    tags: ["React", "Firebase", "Vite", "Vercel"],
    link: "https://kuc-sagavazhvu-2025.web.app/",
    repo: "https://github.com/adithdotv/KUC-Kalolsavam-Result",
    accent: "from-emerald-500 to-teal-500",
    image: "/projects/campus-fest.webp",
  },
  {
    title: "PaySphere Decentralized Global Payroll",
    description:
      "Revolutionary payroll platform on Shardeum blockchain. Pay employees globally with instant, low-cost, and transparent cryptocurrency transactions.",
    tags: ["React", "Solidity", "Shardeum", "Web3.js", "Vercel"],
    link: "https://pay-sphere-nine.vercel.app/",
    repo: "https://github.com/adithdotv/PaySphere",
    accent: "from-amber-500 to-orange-500",
    image: "/projects/paysphere.webp",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Snapshare AI",
    period: "2026 — Present",
    description:
      "Full-stack developer at Snapshare AI, building innovative solutions for the AI-powered image sharing platform.",
    highlights: [
      "Developed and maintained a CRM system for managing users, workflows, and internal operations.",
      "Built responsive frontend interfaces using React, Next.js, MUI, and Tailwind CSS.",
      "Integrated REST APIs and handled frontend-backend communication for platform features.",
      "Collaborated with the development team using Git workflows, pull requests, and conflict resolution.",
      "Worked on performance optimization, bug fixing, and improving overall user experience.",
    ],
  },
];
