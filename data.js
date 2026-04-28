// data.js — content lifted from CV / projects.md / books.md
window.__PORTFOLIO_DATA__ = {
  identity: {
    name: "Ivan Manuel Dias Pestana",
    short: "Ivan Dias",
    role: "Telecommunications Engineer",
    subrole: "Enterprise Private Wireless · Technical Project Manager",
    location: "Madrid, Spain",
    email: "ivamdias@gmail.com",
    linkedin: "https://www.linkedin.com/in/ivamdias/",
    phone: "+34 659 846 439"
  },
  bio: {
    short: "I lead end-to-end technical delivery of private 4G/5G networks for enterprises across Europe — from architecture to production rollout.",
    long: [
      "I'm a telecommunications engineer with deep expertise in wireless networks, IT solutions, and cloud technologies. Today I lead technical projects in the emerging private wireless space at Nokia.",
      "Over the years I've worked across continents with customers from a wide range of sectors — major mobile carriers, industry, defense, enterprises, and public critical communications — performing roles from hands-on lab testing and network integration to architecture design and technical project leadership.",
      "Solving challenging problems while keeping the focus on the client is what I optimize for. That perspective comes from being involved at every stage of a technical project: initial design, deployment, production rollout, and ongoing support.",
      "Outside of work I'm a perpetual learner — chasing certifications, building side projects, and trying new cloud and AI tools to scratch creative itches and solve real-world problems."
    ]
  },
  stats: [
    { num: "20", suffix: "+", label: "Years in Telecom" },
    { num: "4G", suffix: "/5G", label: "Private Wireless" },
    { num: "3", suffix: "", label: "Continents Served" },
    { num: "AWS", suffix: "", label: "Solutions Architect" }
  ],
  skills: {
    technical: [
      "3GPP 4G/5G Core",
      "Radio Access (2G–5G)",
      "Network Architecture",
      "IP & Networking",
      "AWS",
      "Linux",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Python",
      "Traces Analysis",
      "Troubleshooting"
    ],
    soft: ["Customer focused", "Communication", "Adaptability", "Teamwork", "Creativity", "Self-awareness"]
  },
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Portuguese", level: "Intermediate" }
  ],
  experience: [
    {
      title: "Project Support Engineer — Enterprise Private Wireless",
      company: "Nokia",
      location: "Madrid, Spain",
      from: "2022", to: "Present",
      current: true,
      blurb: "End-to-end technical lead for the design, deployment, and implementation of new 4G/5G private wireless networks for enterprises across the European region.",
      bullets: [
        "Own technical delivery across Radio Access, EPC/5GC Core, IP networking, and appliance services",
        "Lead projects across defense, broadband carriers, industry, critical communications, and public sector",
        "Bridge architecture, deployment, and production support — from inception to handover"
      ]
    },
    {
      title: "Radio Access Customer Support Engineer",
      company: "Nokia",
      location: "Madrid, Spain",
      from: "2011", to: "2022",
      blurb: "Customer support dedicated mainly to Telefónica Móviles España, with parallel involvement in mid-term projects across Europe.",
      bullets: [
        "2G/3G/4G/5G/IoT lab testing and certification of new HW/SW features for Nokia Radio Access",
        "Production support, NPI pilots, software rollout, FOA feature planning",
        "Network integration support and 24/7 emergency service",
        "Mid-term assignments: O2 UK, AIDF Spain, O2 Germany, TMN Portugal, others"
      ]
    },
    {
      title: "Radio Access Support Engineer",
      company: "Nokia",
      location: "Caracas, Venezuela",
      from: "2006", to: "2010",
      blurb: "Radio Access CARE & NI engineer focused on 2G network deployment for Telefónica Móviles. BSC commissioning, integration, and 24/7 emergency response.",
      bullets: [
        "BSS implementation support across the Andean region (Colombia, Peru, Ecuador)",
        "Six months on-hands training at the R&D Nokia Lab, Dallas TX, USA"
      ]
    },
    {
      title: "CDMA BTS Integration Engineer",
      company: "Lucent Technologies",
      location: "Caracas, Venezuela",
      from: "2005", to: "2006",
      blurb: "CDMA / 1X EV-DO base-station integration for Telefónica Móviles Venezuela and Movilnet — database creation, rehosting, troubleshooting, and monitoring.",
      bullets: []
    },
    {
      title: "Internship — Telecom Control Systems",
      company: "CANTV",
      location: "Caracas, Venezuela",
      from: "2003", to: "2004",
      blurb: "Study case on the development of a control system for the fixed wired pressurized phone network.",
      bullets: []
    }
  ],
  education: {
    degree: "Telecommunications Engineering — Bachelor's Degree",
    school: "Universidad Nacional Experimental de las Fuerzas Armadas (UNEFA)",
    place: "Maracay, Venezuela",
    years: "1999 – 2004"
  },
  certifications: [
    { name: "AWS Certified Solutions Architect — Associate", year: "2022" },
    { name: "Certified Kubernetes Administrator (CKA)", year: "2023" },
    { name: "Docker Mastery: Kubernetes + Swarm", year: "2025" },
    { name: "100 Days of Code: Python Bootcamp", year: "2022" },
    { name: "NCSS 5G Network Implementation", year: "2021" },
    { name: "5G Nokia NPI Certified Engineer", year: "2018" }
  ],
  award: {
    title: "Nokia Innovative Idea — 1st place",
    project: "Edge TV — \"Create the new TV\"",
    year: "2016"
  },
  projects: [
    {
      title: "Telegram → Notion AI Task Manager",
      tagline: "A cloud-native AI agent that turns text, voice notes, and images from Telegram into well-structured Notion tasks.",
      description: "Bridges Telegram and Notion via an LLM agent. Text is parsed for stakeholders, deadlines, and intent; voice messages are transcribed and contextually enriched; images go through an 11-category classification pipeline (receipts, screenshots, handwritten notes, diagrams, documents…) and route to specialized prompts. Includes per-user Notion DB isolation, invitation-code onboarding, and AI task-completion matching.",
      tech: ["Python", "OpenAI GPT", "PostgreSQL", "Neon", "Railway", "Telegram Bot API", "Notion API"],
      links: { live: "https://web-production-e3419.up.railway.app/" },
      featured: true,
      diagram: "telegram-notion"
    },
    {
      title: "Edge TV",
      tagline: "Award-winning concept exploring the future of television at the network edge.",
      description: "First-place winner of Nokia's \"Create the new TV\" Innovative Idea program. Concept video and pitch around bringing personalized TV experiences to the network edge.",
      tech: ["Concept", "Edge Compute", "Pitch"],
      links: { live: "https://vimeo.com/220293796" },
      diagram: "edge-tv"
    }
  ],
  books: [
    { title: "AI Engineering",                 author: "Chip Huyen",     query: "AI Engineering Chip Huyen" },
    { title: "The Phoenix Project",            author: "Gene Kim",       query: "The Phoenix Project Gene Kim" },
    { title: "Atomic Habits",                  author: "James Clear",    query: "Atomic Habits James Clear" },
    { title: "Getting Things Done",            author: "David Allen",    query: "Getting Things Done David Allen" },
    { title: "Life 3.0",                       author: "Max Tegmark",    query: "Life 3.0 Max Tegmark" },
    { title: "Zero to One",                    author: "Peter Thiel",    query: "Zero to One Peter Thiel" },
    { title: "The Lean Startup",               author: "Eric Ries",      query: "The Lean Startup Eric Ries" }
  ]
};
