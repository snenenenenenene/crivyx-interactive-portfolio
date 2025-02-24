// /config/config.ts

export const config = {
  company: {
    name: "Cretaceous Couch",
    foundedYear: 2025,
    location: "Antwerp, Belgium",
    mission:
      "Developing psychological horror games that challenge conventional gameplay mechanics and industry standards.",
    vision:
      "To redefine both horror gaming and game studio culture through innovation and merit-based growth.",
    contact: {
      general: "info@crivyx.com",
      press: "press@crivyx.com",
      careers: "careers@crivyx.com",
    },
    events: [
      {
        name: "UNWRAP 2024",
        date: "2024",
        location: "Antwerp",
        status: "completed",
      },
      {
        name: "UNWRAP 2025",
        date: "2025",
        location: "Antwerp",
        status: "planned",
      },
      {
        name: "GDC 2026",
        date: "2026",
        location: "San Francisco",
        status: "planned",
      },
    ],
  },

  team: {
    members: [
      {
        name: "Senne Bels",
        role: "Lead Developer",
        image: "/team/senne.jpg",
        bio: "Experienced developer with a passion for creating immersive gaming experiences.",
        socials: {
          linkedin: "https://linkedin.com/in/senne-bels",
          github: "https://github.com/sennebels",
        },
      },
      {
        name: "Remko Luyckx",
        role: "Lead Designer",
        image: "/team/remko.jpg",
        bio: "Creative visionary focused on crafting unforgettable horror experiences.",
        socials: {
          linkedin: "https://linkedin.com/in/remko-luyckx",
          artstation: "https://artstation.com/remkoluyckx",
        },
      },
      {
        name: "Philip Milanov",
        role: "Lead Animator",
        image: "/team/philip.jpg",
        bio: "Animation expert specializing in creating fluid, lifelike character movements.",
        socials: {
          linkedin: "https://www.linkedin.com/in/philip-milanov",
          artstation: "https://www.artstation.com/philip_milanov",
        },
      },
    ],
    openPositions: [
      {
        title: "Game Developer",
        type: "Full-time",
        location: "Antwerp, Belgium / Remote",
        description:
          "Join us in creating innovative horror game mechanics and pushing technical boundaries.",
        requirements: [
          "Proven ability to create game systems and mechanics",
          "Experience with Unreal Engine or similar game engines",
          "Passion for horror games and player experience",
          "Strong problem-solving skills",
        ],
      },
      {
        title: "3D Artist",
        type: "Full-time",
        location: "Antwerp, Belgium / Remote",
        description:
          "Help us create terrifying creatures and atmospheric environments.",
        requirements: [
          "Strong portfolio demonstrating 3D modeling skills",
          "Experience with PBR workflows",
          "Knowledge of real-time rendering techniques",
          "Eye for horror aesthetics",
        ],
      },
    ],
  },

  game: {
    ornitho: {
      title: "ORNITHO",
      tagline: "Survive prehistoric terror in modern Antwerp",
      description:
        "A psychological horror survival experience where prehistoric predators transform Antwerp's iconic landmarks into a hunting ground of primal terror.",
      status: "pre-alpha" as const,
      releaseWindow: "TBA",
      platforms: ["Steam (PC)", "Console versions planned"],
      ageRating: {
        pegi: "16",
        esrb: "M (Mature)",
      },
      features: [
        {
          title: "Multiplayer Survival",
          description:
            "Team up or survive alone in a world where every shadow could hide ancient death.",
        },
        {
          title: "Dynamic AI",
          description:
            "Face intelligent dinosaurs that learn from your tactics and adapt their hunting strategies.",
        },
        {
          title: "Psychological Horror",
          description:
            "Experience a sanity system that makes every encounter more terrifying than the last.",
        },
        {
          title: "Iconic Locations",
          description:
            "Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds.",
        },
      ],
      media: {
        images: [
          {
            src: "/games/ornitho/central-station.webp",
            alt: "Antwerp Central Station transformed into a prehistoric hunting ground",
            caption:
              "Experience Antwerp Central Station as you've never seen it before",
          },
          {
            src: "/games/ornitho/cathedral.webp",
            alt: "Antwerp Cathedral in a post-apocalyptic setting",
            caption: "Gothic architecture meets prehistoric terror",
          },
        ],
        videos: [
          {
            title: "Announcement Trailer",
            thumbnail: "/games/ornitho/trailer-thumb.jpg",
            url: "/games/ornitho/trailer.mp4",
          },
        ],
      },
      requirements: {
        minimum: {
          os: "Windows 10 64-bit",
          cpu: "Intel Core i5-8400 / AMD Ryzen 5 2600",
          gpu: "NVIDIA GTX 1660 6GB / AMD RX 5600 XT",
          ram: "16 GB",
          storage: "100 GB",
        },
        recommended: {
          os: "Windows 10/11 64-bit",
          cpu: "Intel Core i7-10700K / AMD Ryzen 7 5800X",
          gpu: "NVIDIA RTX 3070 / AMD RX 6800",
          ram: "32 GB",
          storage: "100 GB SSD",
        },
      },
    },
  },

  site: {
    name: "Cretaceous Couch",
    description:
      "We develop psychological horror games that challenge conventional gameplay mechanics and industry standards.",
    url: "https://www.crivyx.com",
    ogImage: "https://www.crivyx.com/og.jpg",
    themeColor: "#ff0000",
    navigation: {
      main: [
        { name: "Home", href: "/" },
        { name: "Games", href: "/games" },
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Community", href: "/community" },
        { name: "Investors", href: "/investors" },
      ],
      footer: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  },

  social: {
    discord: process.env.NEXT_PUBLIC_DISCORD_URL,
    reddit: process.env.NEXT_PUBLIC_REDDIT_URL,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    steam: process.env.NEXT_PUBLIC_STEAM_URL,
  },

  theme: {
    colors: {
      primary: {
        black: "#000000",
        gray: "#8f8f8f",
        darkgray: "#161614",
        red: "#ff0000",
        white: "#ffffff",
      },
    },
    fonts: {
      heading: "Radlush",
      body: "Inter",
      mono: "JetBrains Mono",
    },
  },
} as const;

export type Config = typeof config;
