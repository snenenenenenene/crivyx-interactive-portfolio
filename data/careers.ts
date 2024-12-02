export interface JobPosition {
  id: string;
  title: string;
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred?: string[];
  benefits?: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: "game-developer",
    title: "Game Developer",
    type: "Full-time",
    location: "Antwerp, Belgium / Remote",
    department: "Development",
    description:
      "Join us in creating innovative horror game mechanics and pushing technical boundaries.",
    responsibilities: [
      "Develop and implement game mechanics and systems",
      "Work with AI and behavior systems",
      "Optimize game performance",
      "Collaborate with artists and designers to implement features",
      "Contribute to technical architecture decisions",
    ],
    requirements: [
      "Proven ability to create game systems and mechanics",
      "Experience with Unreal Engine or similar game engines",
      "Strong C++ programming skills",
      "Experience with version control systems (Git)",
      "Excellent problem-solving abilities",
    ],
    preferred: [
      "Experience with AI systems",
      "Knowledge of multiplayer game development",
      "Previous work on horror games",
      "Understanding of optimization techniques",
    ],
    benefits: [
      "Merit-based compensation system",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance",
      "Flexible hours",
    ],
  },
  {
    id: "3d-artist",
    title: "3D Artist",
    type: "Full-time",
    location: "Antwerp, Belgium / Remote",
    department: "Art",
    description:
      "Help us create terrifying creatures and atmospheric environments.",
    responsibilities: [
      "Create high-quality 3D models and environments",
      "Develop textures and materials",
      "Work on character and creature designs",
      "Optimize assets for real-time rendering",
      "Collaborate with the art team on visual style",
    ],
    requirements: [
      "Strong portfolio demonstrating 3D modeling skills",
      "Experience with Maya, 3ds Max, or Blender",
      "Proficiency with PBR workflows",
      "Knowledge of real-time rendering techniques",
      "Understanding of optimization for games",
    ],
    preferred: [
      "Experience with Unreal Engine",
      "Background in horror game aesthetics",
      "Character modeling experience",
      "VFX creation skills",
    ],
    benefits: [
      "Merit-based compensation system",
      "Remote work options",
      "Professional development budget",
      "Health insurance",
      "Flexible hours",
    ],
  },
];
