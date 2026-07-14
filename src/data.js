export const profile = {
  name: "Prachi Kumari",
  role: "Full Stack Developer",
  company: "Possessive Panda",
  tagline:
    "I design, build, and grow web products end to end — from pixel-perfect UI to APIs, analytics, and ads.",
  email: "prachikr585@gmail.com",
  phone: "6206786331",
};

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

export const projects = [
  // {
  //   id: "ecom",
  //   name: "E-commerce Platform",
  //   type: "Full Stack",
  //   summary:
  //     "A complete online store experience with product catalogs, cart flows, checkout, and admin-ready order management.",
  //   details: [
  //     "Built storefront UI and product browsing with responsive layouts",
  //     "Implemented cart, checkout, and order lifecycle on the backend",
  //     "Wired conversion tracking for ads and analytics funnels",
  //   ],
  //   stack: ["React", "Node.js", "REST APIs", "GA4"],
  // },
  {
    id: "khush",
    name: "Khush Clothing",
    type: "E-commerce · Fashion",
    url: "https://khushpehno.com/",
    summary:
      "A full clothing e-commerce website for browsing collections, buying apparel, and managing the shopper journey end to end.",
    details: [
      "Storefront for clothing catalogs, categories, and product detail pages",
      "Cart, checkout, and order flows tailored for fashion retail",
      "Responsive shopping experience with conversion tracking hooks",
    ],
    stack: ["React", "Node.js", "REST APIs", "GA4"],
  },
  {
    id: "khush-admin",
    name: "Khush Admin Panel",
    type: "Dashboard / Ops",
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
    id: "erp",
    name: "ERP Management System",
    type: "Enterprise / Ops",
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
    id: "vibgyor",
    name: "Vibgyor",
    type: "Dating · Social",
    url: "https://vibgyor.love/",
    summary:
      "India's free LGBTQAI+ dating and social app — matching, feeds, chat, and community, built bilingual for Hindi and English.",
    details: [
      "Dating + social feed in one product for queer community across India",
      "Privacy-first profiles, safe chat, and report/block tools",
      "Full-stack work spanning product UI, APIs, and growth measurement",
    ],
    stack: ["React", "Node.js", "Realtime", "APIs"],
  },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Responsive UI", "Component systems"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Auth & roles", "Database-backed features"],
  },
  {
    title: "DevOps & Tools",
    items: ["AWS EC2", "GitHub", "Deployments", "Basic app development"],
  },
  {
    title: "Growth & Analytics",
    items: ["GA4", "Pixel tracking", "Google Ads Sense", "Conversion measurement"],
  },
];
