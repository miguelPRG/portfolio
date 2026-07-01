export interface Project {
  repository: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  stars: number;
  forks: number;
  gradient: string;
  featured?: boolean;
}

export const profile = {
  name: 'Miguel Gonçalves',
  username: 'miguelPRG',
  role: 'Full-Stack Developer',
  avatar: 'https://github.com/miguelPRG.png',
  bio: 'Passionate Full-Stack Developer focused on building scalable, performant web applications. I love turning complex problems into elegant, maintainable solutions with clean code and modern technology.',
  location: 'Portugal',
  github: 'https://github.com/miguelPRG',
  linkedin: 'https://www.linkedin.com/in/miguel-prg/',
  email: 'miguel@psafe365.com',
  typingRoles: [
    'Full-Stack Developer',
    'React & Node.js Specialist',
    'TypeScript Enthusiast',
    'Problem Solver',
  ],
};

export const projects: Project[] = [
  {
    repository: 'ClassRoomate',
    title: 'ClassRoomate',
    description:
      'Full-stack classroom reservation system with authentication, permissions and conflict prevention.',
    tech: ['React', 'TypeScript', 'FastAPI', 'MongoDB', 'Docker'],
    github: 'https://github.com/miguelPRG/ClassRoomate',
    demo:"https://github.com/miguelPRG/ClassRoomate/blob/master/screenshot.png?raw=true",
    image:
      'https://github.com/miguelPRG/ClassRoomate/blob/master/screenshot.png?raw=true',
    stars: 0,
    forks: 0,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    featured: true,
  },
  {
    repository: 'BeerBlockchain',
    title: 'Beer Blockchain',
    description:
      'Craft-beer supply-chain traceability using digital signatures and Ethereum Sepolia.',
    tech: ['Python', 'FastAPI', 'Ethereum', 'Digital Signatures'],
    github: 'https://github.com/miguelPRG/BeerBlockchain',
    image: "https://github.com/miguelPRG/BeerBlockchain/blob/main/screenshot.png?raw=true",
    stars: 0,
    forks: 0,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    repository: 'WeatherApp',
    title: 'Weather App',
    description:
      'Weather application with location search, interactive charts and a secure Express backend.',
    tech: ['React', 'TypeScript', 'Express', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/miguelPRG/WeatherApp',
    image: "https://github.com/miguelPRG/WeatherApp/blob/main/frontend/assets/screenshot.png?raw=true",
    demo: 'https://weather-app-henna-two-41.vercel.app/',
    // To use your own screenshot, place it in public/projects and use:
    // image: '/projects/weather-app.webp',
    stars: 0,
    forks: 0,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    repository: 'portfolio',
    title: 'Developer Portfolio',
    description:
      'Professional full-stack developer portfolio built with Next.js and a responsive modern interface.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/miguelPRG/portfolio',
    image: "https://github.com/miguelPRG/portfolio/blob/main/screenshot.png?raw=true",
    demo: 'https://portfolio-sepia-alpha-19.vercel.app/',
    stars: 0,
    forks: 0,
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    repository: 'Best-Wines-EU',
    title: 'Best Wines EU',
    description:
      'Interactive data application for exploring and analysing European wines, prices and quality.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Jupyter', 'Plotly'],
    github: 'https://github.com/miguelPRG/Best-Wines-EU',
    image: "https://github.com/miguelPRG/Best-Wines-EU/blob/main/dashboard.png?raw=true",
    stars: 0,
    forks: 0,
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    repository: 'TestIntegration',
    title: 'Test Integration',
    description:
      'Integration test suite for a Library Management REST API and its cross-entity business rules.',
    tech: ['Java', 'JUnit 5', 'REST Assured', 'Integration Testing'],
    github: 'https://github.com/miguelPRG/TestIntegration',
    image:"https://github.com/miguelPRG/TestIntegration/blob/main/image.png?raw=true",
    stars: 0,
    forks: 0,
    gradient: 'from-red-500/20 to-rose-500/20',
  },
];

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    description: 'Modern, responsive interfaces focused on user experience.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    description: 'APIs, business logic and data-driven systems.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'GraphQL'],
  },
  {
    category: 'Tools & DevOps',
    description: 'Tools to build, automate and deliver software.',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    category: 'Extra',
    description: 'Complementary technologies that expand my stack.',
    skills: ['Linux', 'Solidity', 'Nginx'],
  },
];

export const timeline = [
  {
    year: 'Now',
    title: 'Full-Stack Developer in progress',
    org: 'Portfolio, GitHub & real-world projects',
    desc: 'Turning ideas into complete products: React frontends, typed APIs, data-driven apps and clean deployment workflows.',
    highlight: 'Building with purpose',
    type: 'work',
  },
  {
    year: '2025',
    title: 'Project-based learning became the engine',
    org: 'ClassRoomate, WeatherApp, BeerBlockchain',
    desc: 'Built projects that connect UI, APIs, data, testing and deployment — the point where learning starts behaving like engineering.',
    highlight: 'Learning by shipping',
    type: 'project',
  },
  {
    year: 'Foundation',
    title: 'Software engineering foundations',
    org: 'Computer Science path',
    desc: 'Developed the fundamentals behind the code: algorithms, databases, web development, testing discipline and problem solving.',
    highlight: 'The base layer',
    type: 'education',
  },
];
