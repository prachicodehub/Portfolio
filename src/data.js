export const profile = {
  name: "Prachi Kumari",
  firstName: "Prachi",
  role: "Full Stack Developer",
  company: "Possessive Panda",
  location: "India",
  tagline:
    "I design, build, and grow web products end to end — from pixel-perfect UI to APIs, analytics, and ads.",
  email: "prachikr585@gmail.com",
  phone: "6206786331",
  github: "https://github.com/prachicodehub",
  linkedin: "https://www.linkedin.com/in/prachi259",
};

export const stats = [
  { value: "6+", label: "Products shipped" },
  { value: "3", label: "Live platforms in production" },
  { value: "8.76", label: "MCA CGPA" },
  { value: "E2E", label: "UI → API → Analytics" },
];

export const about = {
  education: {
    degree: "MCA",
    school: "NIET",
    years: "2023–2025",
    cgpa: "8.76",
  },
  paragraphs: [
    "I'm a Full Stack Developer at Possessive Panda, where I ship production features across the stack — React frontends, Node backends, and the growth layer that connects them to real users.",
    "Beyond code, I own pixel tracking, GA4 analytics, and Google Ads Sense setups so product decisions are grounded in data, not guesses. I also work with AWS EC2 deployments, GitHub workflows, Tailwind CSS, and have a basic grounding in app development.",
  ],
};

// `accent` drives each project card's colour treatment.
export const projects = [
  {
    id: "mealji",
    name: "Mealji",
    type: "Food-tech · Ordering",
    accent: "#ff8a4c",
    featured: true,
    summary:
      "A food ordering platform for browsing menus, placing orders, and tracking meals from kitchen to doorstep.",
    details: [
      "Menu discovery, cart, and checkout built mobile-first",
      "Order lifecycle and status updates handled on the backend",
      "Analytics and conversion tracking wired into the ordering funnel",
    ],
    stack: ["React", "Node.js", "REST APIs", "GA4"],
  },
  {
    id: "erp",
    name: "ERP Management System",
    type: "Enterprise · Operations",
    accent: "#7c9cff",
    featured: true,
    summary:
      "A full-fledged ERP for records, inventory, notifications, catalog syncing, and order management in one place.",
    details: [
      "Centralized records and inventory tracking across the business",
      "Notification flows to keep teams updated on critical events",
      "Catalog syncing and a complete order management system",
    ],
    stack: ["React", "Node.js", "Databases", "REST APIs"],
  },
  {
    id: "khush-studios",
    name: "Khush Studios",
    type: "Brand · Creative Studio",
    accent: "#f472b6",
    featured: true,
    summary:
      "The studio website for the Khush brand — showcasing collections, campaigns, and creative work with a clean, editorial feel.",
    details: [
      "Editorial layouts for lookbooks, campaigns, and brand stories",
      "Fast, image-heavy pages tuned for performance on mobile",
      "Connected to the Khush storefront and admin ecosystem",
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "SEO"],
  },
  {
    id: "khush",
    name: "Khush Clothing",
    type: "E-commerce · Fashion",
    accent: "#facc15",
    url: "https://khushpehno.com/",
    summary:
      "A full clothing e-commerce website for browsing collections, buying apparel, and managing the shopper journey end to end.",
    details: [
      "Storefront for catalogs, categories, and product detail pages",
      "Cart, checkout, and order flows tailored for fashion retail",
      "Responsive shopping experience with conversion tracking hooks",
    ],
    stack: ["React", "Node.js", "REST APIs", "GA4"],
  },
  {
    id: "khush-admin",
    name: "Khush Admin Panel",
    type: "Dashboard · Ops",
    accent: "#34d399",
    url: "https://admin.khushpehno.com/",
    summary:
      "An internal control center for running the Khush clothing store — products, users, and day-to-day operations.",
    details: [
      "Role-based views for admins to manage store operations",
      "CRUD workflows for products, users, and platform settings",
      "Clear data tables and filters for fast decision-making",
    ],
    stack: ["React", "Node.js", "Auth", "REST APIs"],
  },
  {
    id: "vibgyor",
    name: "Vibgyor",
    type: "Dating · Social",
    accent: "#a78bfa",
    url: "https://vibgyor.love/",
    summary:
      "India's free LGBTQAI+ dating and social app — matching, feeds, chat, and community, built bilingual for Hindi and English.",
    details: [
      "Dating + social feed in one product for the queer community",
      "Privacy-first profiles, safe chat, and report/block tools",
      "Full-stack work spanning product UI, APIs, and growth measurement",
    ],
    stack: ["React", "Node.js", "Realtime", "APIs"],
  },
];

export const experience = [
  {
    period: "Present",
    title: "Full Stack Developer",
    org: "Possessive Panda",
    points: [
      "Ship features across React frontends and Node backends for multiple client products",
      "Built Mealji, an ERP system, Khush Studios, and the Khush storefront + admin",
      "Own GA4, pixel tracking, and Ads setups; deploy on AWS EC2",
    ],
  },
  {
    period: "2023 – 2025",
    title: "Master of Computer Applications",
    org: "NIET",
    points: ["Graduated with a CGPA of 8.76"],
  },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Responsive UI", "Component systems"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Auth & roles", "Databases"],
  },
  {
    title: "DevOps & Tools",
    items: ["AWS EC2", "GitHub", "Deployments", "App development"],
  },
  {
    title: "Growth & Analytics",
    items: ["GA4", "Pixel tracking", "Google Ads Sense", "Conversion funnels"],
  },
];
