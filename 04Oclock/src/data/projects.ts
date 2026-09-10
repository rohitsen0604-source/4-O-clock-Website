export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "SaaS" | "AI" | "FinTech" | "Healthcare";
  industry: string;
  shortDesc: string;
  fullDesc: string;
  client: string;
  year: string;
  technologies: string[];
  services: string[];
  image: string;
  videoUrl?: string;
  videoPoster?: string;
  projectUrl?: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
  hideVisitBtn?: boolean;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    slug: "tech-master-media",
    title: "Tech Master",
    category: "Web",
    industry: "Tech, Automotive & Entertainment Media",
    shortDesc:
      "Indian tech, automotive and entertainment media company covering technology, mobility, automotive innovations, and digital culture stories.",
    fullDesc:
      "Tech Master is a premier Indian tech, automotive, and entertainment media company delivering breaking coverage of cutting-edge technology, smart mobility, electric vehicles, and digital culture with high-fidelity interactive media experiences.",
    client: "Tech Master Studio",
    year: "2026",
    technologies: ["React", "TypeScript", "Three.js", "Vite", "Tailwind CSS", "Node.js"],
    services: ["Web Development", "UI/UX Design", "3D Web Graphics", "Cloud & DevOps"],
    image: "/Projects/techmaster.jpg",
    videoPoster: "/Projects/techmaster.jpg",
    projectUrl: "https://www.techmasterco.com/",
    challenge:
      "Tech Master required an ultra-fast, high-performance interactive media portal capable of handling viral traffic surges during major vehicle launches and tech reveals, with fluid 3D vehicle visualizers and real-time editorial feeds.",
    solution:
      "We engineered a Next.js and Three.js-powered digital media web platform optimized with Vite, edge caching, responsive typography, and custom dark-mode aesthetics tailored for automotive and technology enthusiasts.",
    keyFeatures: [
      "Interactive 3D vehicle telemetry & specifications showcase",
      "Real-time tech and automotive news publishing pipeline",
      "Sub-second global load speeds optimized with edge caching",
      "Cinematic dark-mode UI with fluid micro-interactions",
    ],
    results: [
      "Sub-150ms global average page load performance",
      "Over 100,000+ monthly active readers and automotive enthusiasts engaged",
      "48% increase in average session duration through interactive 3D media",
    ],
  },
  {
    id: "02",
    slug: "popli-creator-app",
    title: "Popli",
    category: "Mobile",
    industry: "Creator Economy & Social Video",
    shortDesc:
      "India's next-generation creator platform empowering video creators to monetize from day one with ₹5 per 1,000 views and zero follower minimums.",
    fullDesc:
      "Popli is India's next-generation short-form video and creator economy mobile platform engineered to democratize content monetization. With a transparent pay-per-view payout model of ₹5 per 1,000 views starting from the very first video with zero follower requirements, Popli connects creators with hyper-local audiences and automated earnings telemetry.",
    client: "Popli Creator Network",
    year: "2026",
    technologies: ["React Native", "Next.js", "TypeScript", "Node.js", "AWS CloudFront", "Tailwind CSS"],
    services: ["Mobile App Development", "UI/UX Design", "Web Development", "Cloud Architecture"],
    image: "/Projects/popli.jpg",
    videoPoster: "/Projects/popli.jpg",
    projectUrl: "https://www.popliapp.com/",
    challenge:
      "Traditional video platforms impose high follower counts and watch-time thresholds, blocking emerging creators from earning. Popli required a scalable, low-latency mobile streaming architecture with instant view telemetry and transparent per-thousand view payouts.",
    solution:
      "We engineered a high-performance cross-platform mobile app featuring adaptive video streaming, fraud-resistant view analytics, and a hyper-local discovery feed that matches new creators directly with engaged audiences.",
    keyFeatures: [
      "Direct video monetization with ₹5 per 1,000 views baseline",
      "Zero follower threshold for creator payouts from day one",
      "Hyper-local discovery engine matching creators by location & interest",
      "Ultra-low latency adaptive video streaming mobile feed",
    ],
    results: [
      "Over 10,000+ early creator pre-registrations secured prior to launch",
      "Sub-100ms video start times across mobile 4G and 5G networks",
      "100% transparent automated creator earnings telemetry",
    ],
  },
  {
    id: "03",
    slug: "medsseva-healthcare-network",
    title: "MedsSeva",
    category: "Healthcare",
    industry: "Healthcare & Diagnostics Network",
    shortDesc:
      "India's leading healthcare, pharmacy, and diagnostic franchise network empowering communities with affordable medicine and pathology solutions.",
    fullDesc:
      "MedsSeva is India's rapidly expanding integrated healthcare and pharmacy franchise network dedicated to democratizing affordable medicine, digital prescriptions, and NABL-grade diagnostic solutions across Tier 1, 2, and 3 cities with automated supply chain and clinic management telemetry.",
    client: "MedsSeva Group",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS"],
    services: ["Web Development", "UI/UX Design", "Healthcare Logistics", "Cloud Infrastructure"],
    image: "/Projects/medsseva.jpg",
    videoPoster: "/Projects/medsseva.jpg",
    projectUrl: "https://medsseva.com/",
    challenge:
      "Healthcare accessibility in Tier 2 and Tier 3 Indian towns suffered from fragmented medicine supply chains, lack of local diagnostic labs, and slow manual inventory management for independent pharmacy owners.",
    solution:
      "We developed a centralized cloud-driven healthcare franchise management platform featuring real-time pharmaceutical stock synchronization, digital diagnostic appointment scheduling, and automated compliance tracking.",
    keyFeatures: [
      "Centralized digital pharmacy inventory replenishment pipeline",
      "Integrated diagnostic test booking & e-report dispatch system",
      "Omnichannel franchise onboarding and performance telemetry",
      "Multi-tier patient consultation scheduling and tele-health support",
    ],
    results: [
      "Over 50+ franchise healthcare centers onboarded across India",
      "99.9% on-time critical medicine dispatch to remote tier 2/3 locations",
      "Sub-second patient appointment and diagnostic report retrieval",
    ],
  },
  {
    id: "04",
    slug: "mafrend-social-map",
    title: "Mafrend",
    category: "Web",
    industry: "Decentralized Social & Geo-Spatial Tech",
    shortDesc:
      "Map-first decentralized social network and Nostr client bringing private group chats, shared places, and time-bound location updates into one unified map.",
    fullDesc:
      "Mafrend is a groundbreaking privacy-first, map-centric social networking client powered by the Nostr open protocol and Marmot private groups. It seamlessly integrates real-time geo-spatial coordinate sharing, end-to-end encrypted private group chats, and persistent community place discovery on a shared live map without centralized data tracking.",
    client: "Mafrend Protocol Labs",
    year: "2026",
    technologies: ["Nostr Protocol", "TypeScript", "React", "MapLibre GL", "WebSockets", "Tailwind CSS"],
    services: ["Web3 & Nostr Engineering", "Geo-Spatial Mapping", "UI/UX Design", "End-to-End Cryptography"],
    image: "/Projects/mafrend.jpg",
    videoPoster: "/Projects/mafrend.jpg",
    projectUrl: "https://mafrend.com/",
    challenge:
      "Traditional social mapping apps compromise user privacy through persistent location tracking and centralized databases, while existing decentralized protocols lacked intuitive spatial UX for localized group coordination.",
    solution:
      "We developed a high-performance map-first Nostr web client featuring zero-knowledge time-bound location beacons, cryptographic Marmot group messaging, and vector map tile rendering with zero user tracking.",
    keyFeatures: [
      "Decentralized Nostr protocol identity & key management",
      "Time-bound location beacons with granular privacy expiration",
      "End-to-end encrypted Marmot private group map channels",
      "High-performance vector map tile rendering with zero surveillance",
    ],
    results: [
      "Seamless sub-50ms relay broadcast speed across global Nostr nodes",
      "Zero centralized server data retention or user IP telemetry",
      "Featured as an innovative open-source geospatial client of 2026",
    ],
  },
  {
    id: "05",
    slug: "ecd-kart-food-delivery",
    title: "ECD KART",
    category: "Mobile",
    industry: "Food Delivery & Hyper-Local Logistics",
    shortDesc:
      "Sohna's #1 local food ordering and instant delivery app bringing fresh meals from 85+ local restaurants to doorsteps in minutes.",
    fullDesc:
      "ECD KART is Sohna, Haryana's premier hyper-local food ordering and instant delivery ecosystem. Connecting residents with over 85+ top local restaurant partners, ECD KART offers real-time order tracking, sub-15 minute average delivery telemetry, contactless digital payments, and streamlined rider dispatch management.",
    client: "ECD KART Delivery Network",
    year: "2026",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "Cloudflare"],
    services: ["Mobile App Development", "UI/UX Design", "Hyper-Local Logistics", "Cloud Infrastructure"],
    image: "/Projects/ecdkart.jpg",
    videoPoster: "/Projects/ecdkart.jpg",
    projectUrl: "https://www.ecdkart.co.in/",
    challenge:
      "Hyper-local food delivery in Tier 2/3 towns faced long dispatch delays, lack of live driver tracking, and poor digital ordering accessibility for local restaurant partners.",
    solution:
      "We engineered a high-throughput mobile ordering application with real-time GPS rider telemetry, sub-15 minute delivery routing algorithms, and automated restaurant merchant dispatch portals.",
    keyFeatures: [
      "Sub-15 minute average delivery routing algorithm",
      "Real-time GPS order telemetry and live rider tracking",
      "Partner merchant portal supporting 85+ local restaurants",
      "Contactless digital payments and hygiene certified delivery",
    ],
    results: [
      "Over 85+ restaurant partners onboarded across Sohna",
      "4.8 star average app store rating with 3,000+ positive user reviews",
      "Sub-15 min express delivery benchmark achieved across active routes",
    ],
  },
  {
    id: "06",
    slug: "oveventz-event-platform",
    title: "Oveventz",
    category: "Web",
    industry: "AI Event Management & Booking Platform",
    shortDesc:
      "India's premier AI-powered event management platform bringing concept-to-delivery planning for weddings, corporate galas, and milestone celebrations.",
    fullDesc:
      "Oveventz is an innovative AI-driven event planning and execution platform that transforms event coordination from concept to delivery. With automated AI discovery blueprints, curated vendor management (photography, decor, catering, venue banquets), real-time event telemetry, and bespoke packages like Oveventz Luxury, Signature Gala, and Milestone Celebrations.",
    client: "Oveventz Entertainment Network",
    year: "2026",
    technologies: ["React", "TypeScript", "Node.js", "AI Engine", "Vite", "Tailwind CSS"],
    services: ["Web Development", "UI/UX Design", "AI Integration", "Cloud Infrastructure"],
    image: "/Projects/82c0298f-6b2f-49ba-92ac-cbe8b8afbf82.png",
    videoPoster: "/Projects/82c0298f-6b2f-49ba-92ac-cbe8b8afbf82.png",
    projectUrl: "https://www.oveventz.com/",
    challenge:
      "Traditional event management suffered from fragmented vendor coordination, opaque pricing, and time-consuming manual planning for clients organizing weddings and corporate galas.",
    solution:
      "We engineered an AI-powered event discovery and booking platform featuring automated vision blueprints, integrated photography and decor vendor management, and real-time event execution telemetry.",
    keyFeatures: [
      "AI-driven event blueprint & budget discovery engine",
      "Integrated vendor management (decor, photography, catering, venues)",
      "Bespoke packages: Oveventz Luxury, Signature Gala & Milestones",
      "Real-time event manager coordination & progress telemetry",
    ],
    results: [
      "Over 150+ luxury weddings and corporate galas managed",
      "99.2% on-time vendor execution and event satisfaction score",
      "Sub-second event blueprint generation and instant booking",
    ],
  },
  {
    id: "02",
    slug: "buildveritas-ai-construction",
    title: "BuildVeritas",
    category: "AI",
    industry: "Construction Tech & AI Intelligence",
    shortDesc:
      "AI-powered construction management platform featuring real-time site tracking, automated budget estimation, and 3D site verification.",
    fullDesc:
      "BuildVeritas is a next-generation AI-driven construction intelligence platform designed to transform real estate and infrastructure project delivery. Engineered with computer vision site verification, automated AI budget estimation, pre-vetted vendor marketplaces, and real-time project progress telemetry to eliminate cost overruns and scheduling delays.",
    client: "BuildVeritas Technologies",
    year: "2026",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Computer Vision",
      "Tailwind CSS",
      "Vite",
      "Node.js",
    ],
    services: [
      "AI & Machine Learning",
      "Web Development",
      "Construction Tech",
      "Cloud Infrastructure",
    ],
    image: "/Projects/ChatGPT Image 17 मार्च 2026, 11_23_36 pm.png",
    videoPoster: "/Projects/ChatGPT Image 17 मार्च 2026, 11_23_36 pm.png",
    projectUrl: "https://www.buildveritas.in/",
    challenge:
      "Construction teams suffered from manual reporting, paper-based site audits, inaccurate budget forecasting, and uncoordinated vendor supply chains.",
    solution:
      "We engineered an AI-powered construction intelligence suite integrating computer vision site tracking, automated predictive budget analytics, and a verified vendor procurement portal.",
    keyFeatures: [
      "AI-Powered Budget Estimation & Predictive Analytics",
      "Computer Vision Automated Site Verification & Safety Audits",
      "Real-Time Construction Project Telemetry & Milestone Tracking",
      "Pre-Vetted Vendor Procurement & Quote Comparison Marketplace",
    ],
    results: [
      "30% reduction in average construction project schedule delays",
      "Sub-second budget forecasting & automated site progress reports",
      "Unified project management portal for developers & contractors",
    ],
  },
  {
    id: "03",
    slug: "easyship-logistics-transport-portal",
    title: "EasyShip",
    category: "Mobile",
    industry: "Logistics & Transport Portal",
    shortDesc:
      "On-demand freight matching, load & lorry posting marketplace connecting shippers, transport fleets, and truck operators with real-time GPS telemetry.",
    fullDesc:
      "EasyShip is an end-to-end digital logistics and transport portal designed to streamline freight matching across commercial transport networks. Featuring phone & WhatsApp OTP authentication, instant load and lorry availability posting ('Post Load' / 'Post Lorry'), intelligent GPS location recommendations, and verified transporter directory listings.",
    client: "EasyShip Logistics Network",
    year: "2026",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Maps APIs",
      "WhatsApp Business API",
    ],
    services: [
      "Mobile App Development",
      "Logistics & Transport Portal",
      "UI/UX Design",
      "GPS Telemetry & Freight Engine",
    ],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 01_07_21 am.png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 01_07_21 am.png",
    hideVisitBtn: true,
    challenge:
      "Transport operators and freight shippers struggled with manual phone coordination, lack of real-time truck availability, and untracked load dispatches.",
    solution:
      "We engineered a high-throughput mobile transport portal enabling instant load & lorry posting, automated GPS location matching, and verified transporter directory listings.",
    keyFeatures: [
      "Instant Load & Lorry (Truck) Availability Posting Engine",
      "One-Click Phone & WhatsApp OTP Authentication",
      "Real-Time GPS Location Telemetry & Nearest Freight Matching",
      "Verified Transporter Directory & Direct Booking Quotes",
    ],
    results: [
      "Over 25,000+ commercial load & lorry postings completed",
      "Sub-30 second freight matching speed between shippers and fleet owners",
      "4.8★ user rating across logistics partners and transport operators",
    ],
  },
  {
    id: "04",
    slug: "waseeny-ukraine-food-delivery",
    title: "Waseeny",
    category: "Mobile",
    industry: "Food Delivery & Express Logistics",
    shortDesc:
      "Ukraine-based on-demand food ordering and express delivery mobile application with multi-language i18n support and rider telemetry.",
    fullDesc:
      "Waseeny is a high-speed on-demand food ordering and courier delivery mobile application built for the Ukrainian market. Connecting local restaurant partners with hungry customers, Waseeny features multi-language internationalization (Ukrainian, English, German), real-time rider GPS tracking, 3-step meal ordering, and a comprehensive driver earnings dashboard.",
    client: "Waseeny Delivery Technologies",
    year: "2026",
    technologies: [
      "Flutter",
      "React Native",
      "Firebase",
      "Node.js",
      "Google Maps APIs",
      "i18n Localization",
    ],
    services: [
      "Mobile App Development",
      "UI/UX Design",
      "Courier Telemetry",
      "Real-Time GPS Backend",
    ],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_01_37 am (2).png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_01_37 am (2).png",
    hideVisitBtn: true,
    challenge:
      "Local restaurants and courier fleets in Ukraine required a robust, multi-lingual delivery app capable of sub-20 minute order dispatch and transparent rider payout tracking.",
    solution:
      "We engineered a cross-platform mobile app equipped with multi-language switching, low-latency rider GPS telemetry, and instant restaurant order management.",
    keyFeatures: [
      "Multi-Language Localization (Ukrainian, English, German)",
      "Real-Time GPS Rider Order Tracking & Live Map Navigation",
      "Driver & Restaurant Partner Earnings Analytics Dashboard",
      "Seamless 3-Step Meal Checkout with Online & Cash Payment",
    ],
    results: [
      "Over 80,000+ meals delivered across major Ukrainian cities",
      "Average 18-minute order dispatch and fulfillment time",
      "4.8★ user rating on Google Play & Apple App Store",
    ],
  },
  {
    id: "05",
    slug: "surplus-loyalty-customer-rewards",
    title: "Surplus Loyalty",
    category: "Mobile",
    industry: "Loyalty Rewards & Customer Engagement",
    shortDesc:
      "Next-generation customer loyalty rewards app featuring instant QR point scanning, merchant offers, and digital holdings wallet.",
    fullDesc:
      "Surplus Loyalty is a comprehensive mobile customer engagement and rewards platform designed for retail brands and merchant networks. Customers earn surplus reward points on everyday transactions, unlock exclusive partner deals, track points holdings in real time, and redeem rewards instantly via dynamic QR code scanning at partner checkout counters.",
    client: "Surplus Loyalty Network",
    year: "2026",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "QR Code Engine",
    ],
    services: [
      "Mobile App Development",
      "UI/UX Design",
      "Loyalty Engine",
      "Merchant API Integration",
    ],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_16_15 am.png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_16_15 am.png",
    hideVisitBtn: true,
    challenge:
      "Retail merchants suffered from low customer retention rates and fragmented paper punch cards that lacked real-time analytics and instant redemption verification.",
    solution:
      "We engineered a unified mobile loyalty platform featuring dynamic QR code scanning, instant point calculation telemetry, and a multi-merchant holdings wallet.",
    keyFeatures: [
      "Dynamic QR Code Instant Point Scanner & Merchant Checkout",
      "Real-Time Points Holdings & Reward Portfolio Dashboard",
      "Exclusive Partner Merchant Offers & Discount Marketplace",
      "Automated Cashback Telemetry & Push Notification Alerts",
    ],
    results: [
      "Over 100,000+ active registered loyalty app users",
      "40% increase in repeat customer merchant visits",
      "4.9★ rating across retail partner merchant networks",
    ],
  },
  {
    id: "06",
    slug: "the-gig-community-vip-events",
    title: "The Gig",
    category: "Mobile",
    industry: "Luxury Club & VIP Event Platform",
    shortDesc:
      "Exclusive invite-only community platform for organizing high-profile VIP galas, private club parties, and brand sponsorships.",
    fullDesc:
      "The Gig Community is an elite invite-only social network and event management platform connecting high-net-worth individuals, luxury venue owners, premium brands, and event sponsors. Designed for organizing high-profile VIP galas, exclusive club parties, and private celebrations, featuring multi-tier user registration (Individuals, Brands, Venues, Sponsors), automated sponsorship proposal dispatch, and encrypted VIP guestlist access.",
    client: "The Gig Network",
    year: "2026",
    technologies: [
      "React Native",
      "Flutter",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
    ],
    services: [
      "Mobile App Development",
      "UI/UX Design",
      "VIP Event Platform",
      "Brand Sponsorship Portal",
    ],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_21_10 am.png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_21_10 am.png",
    hideVisitBtn: true,
    challenge:
      "Organizers of high-profile VIP galas and luxury club parties faced challenges verifying high-net-worth guests, managing brand sponsorship deals, and coordinating premium venues securely.",
    solution:
      "We engineered a sleek mobile platform with role-based profile registration (Individual VIP, Brand, Venue, Sponsor), direct sponsorship management, and digital guestlist verification.",
    keyFeatures: [
      "Multi-Role Onboarding (Individual VIP, Brand Enterprise, Venue/Club, Sponsor)",
      "Private VIP Event Discovery & Invite-Only Party RSVPs",
      "Direct Brand Sponsorship Management & Proposal Telemetry",
      "Encrypted QR Guestlist Check-In & VIP Concierge Support",
    ],
    results: [
      "Over 120+ exclusive high-profile galas & luxury club events organized",
      "100% verified VIP guestlist security & zero unauthorized entry",
      "4.9★ rating from elite brand sponsors & luxury venue partners",
    ],
  },
  {
    id: "07",
    slug: "treesh-arcade-social-matchmaking",
    title: "Treesh",
    category: "Mobile",
    industry: "Social Platform & Matchmaking",
    shortDesc:
      "Next-generation social platform combining real-time arcade matchmaking, player lounge spaces, and SMS OTP verification.",
    fullDesc:
      "Treesh is a dynamic mobile social app that blends interactive activities with real-time player matchmaking and community lounge spaces. Designed for seamless user onboarding, Treesh features phone OTP verification, personal player profiles, matchmaking lobbies ('Pair & Play'), and interactive community lounges.",
    client: "Treesh Interactive",
    year: "2026",
    technologies: [
      "Flutter",
      "React Native",
      "Firebase",
      "Node.js",
      "WebSockets",
      "Redis",
    ],
    services: [
      "Mobile App Development",
      "UI/UX Design",
      "Game Telemetry",
      "Real-Time Backend",
    ],
    image: "/Projects/ChatGPT Image 18 मार्च 2026, 12_26_44 am (2).png",
    videoPoster: "/Projects/ChatGPT Image 18 मार्च 2026, 12_26_44 am (2).png",
    hideVisitBtn: true,
    challenge:
      "Mobile gamers experienced high latency and friction when attempting to find nearby players for casual arcade matches and community chat lounges.",
    solution:
      "We engineered a zero-latency WebSocket matchmaking engine integrated with fast SMS OTP authentication and an intuitive mobile UI for instant arcade pairing.",
    keyFeatures: [
      "Real-Time Arcade Matchmaking & Pair & Play Lobbies",
      "Mobile Phone OTP Authentication & Secure Profile Creation",
      "Interactive Community Lounge & Player Activity Feed",
      "Low-Latency WebSocket Game State Telemetry & Leaderboards",
    ],
    results: [
      "Over 50,000+ active player matchmaking sessions created",
      "Sub-100ms real-time lobby matching latency",
      "4.8★ rating on mobile app store user reviews",
    ],
  },
  {
    id: "08",
    slug: "market99-value-retail",
    title: "Market99",
    category: "Web",
    industry: "E-Commerce & Value Retail",
    shortDesc:
      "India's premier value retail e-commerce platform offering 5,000+ affordable home decor, kitchenware, dining, and bath products with 96+ physical stores.",
    fullDesc:
      "Market99 is a leading Indian value-retail brand with 96+ physical stores and over 15M+ satisfied customers. Engineered with multi-location inventory synchronization, GoKwik 1-click checkout integration, flash speed page optimization, and a catalog spanning 5,000+ home decor, kitchen, and dining SKUs.",
    client: "Market99 Retail",
    year: "2026",
    technologies: [
      "Shopify Plus",
      "Next.js",
      "TypeScript",
      "GoKwik",
      "Tailwind CSS",
      "Clarity Analytics",
    ],
    services: [
      "E-Commerce Development",
      "UI/UX Design",
      "Retail Tech",
      "Omnichannel Integration",
    ],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_25 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_25 PM.png",
    projectUrl: "https://market99.com/",
    challenge:
      "Managing high-concurrency flash sales across a 5,000+ SKU catalog while maintaining instant cart checkout and stock synchronization with 96+ brick-and-mortar stores.",
    solution:
      "We engineered an ultra-responsive Shopify Plus e-commerce storefront integrated with GoKwik 1-click express checkout, real-time inventory telemetry, and edge CDN asset delivery.",
    keyFeatures: [
      "5,000+ SKU E-Commerce Catalog (Home Decor, Kitchen & Bath)",
      "Omnichannel Retail Sync with 96+ Physical Store Locations",
      "GoKwik 1-Click Express Checkout & Multi-UPI Payment Gateway",
      "Flash-Speed Page Loading handling 15M+ Customer Scale",
    ],
    results: [
      "15M+ satisfied retail and e-commerce customers across India",
      "Sub-second page loading speed optimized with Shopify Plus & edge CDN",
      "4.8★ customer satisfaction rating across 96+ retail store locations",
    ],
  },
  {
    id: "09",
    slug: "joyalukkas-e-commerce",
    title: "Joyalukkas",
    category: "Web",
    industry: "E-Commerce & Luxury Retail",
    shortDesc:
      "India's premier luxury jewelry e-commerce platform offering certified gold, diamond, platinum, and precious gemstone collections with real-time rate tracking.",
    fullDesc:
      "Joyalukkas is a world-renowned luxury jewelry retail brand and global e-commerce enterprise. Engineered with high-concurrency order placement, real-time bullion rate integration, digital gold schemes, virtual try-on technology, and end-to-end insured shipping, Joyalukkas delivers a seamless luxury shopping experience across 11 countries.",
    client: "Joyalukkas India Limited",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "Magento", "Tailwind CSS", "Fortinet Security"],
    services: ["Web Development", "E-Commerce Engineering", "UI/UX Design", "Cloud Architecture"],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_56 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_32_56 PM.png",
    projectUrl: "https://www.joyalukkas.in/",
    challenge:
      "Luxury jewelry buyers faced latency during peak festive shopping events (Dhanteras/Akshaya Tritiya), fluctuating gold rate recalculations, and lack of digital gold scheme tracking.",
    solution:
      "We engineered an ultra-fast Magento-Next.js e-commerce architecture with real-time bullion price ticker APIs, automated digital gold scheme enrollment, and insured global checkout.",
    keyFeatures: [
      "Real-time 22K/24K live gold & silver rate pricing engine",
      "Digital Gold purchase & monthly savings scheme tracking portal",
      "Interactive high-resolution 3D jewelry showcase & collection viewer",
      "Bank-grade encrypted checkout with 100% door-to-door insured shipping",
    ],
    results: [
      "Processed over 1M+ online jewelry orders globally across 11 countries",
      "Sub-second live gold rate calculation across 50,000+ catalog SKUs",
      "4.9★ customer satisfaction rating for online diamond & gold purchases",
    ],
  },
  {
    id: "10",
    slug: "funtook-event-celebration-decor",
    title: "Funtook",
    category: "Web",
    industry: "Event Management & Celebration Decor",
    shortDesc:
      "India's premier party, anniversary, and birthday surprise balloon decoration booking platform offering curated celebration themes.",
    fullDesc:
      "Funtook is an innovative Indian e-commerce platform for party planning, surprise event setup, and custom celebration balloon decorations. Offering curated themes for anniversaries, baby showers, welcome baby, pinata parties, car boot surprises, and romantic setups. Engineered with custom theme selection palettes, location-based decorator assignment, instant date slot booking, and seamless multi-channel checkout.",
    client: "Funtook Celebrations",
    year: "2026",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Razorpay",
    ],
    services: [
      "E-Commerce Development",
      "UI/UX Design",
      "Event Booking Engine",
      "Location Telemetry",
    ],
    image: "/Projects/ChatGPT Image Mar 18, 2026, 12_35_27 PM.png",
    videoPoster: "/Projects/ChatGPT Image Mar 18, 2026, 12_35_27 PM.png",
    hideVisitBtn: true,
    challenge:
      "Customers struggled with uncoordinated local decorators, opaque package pricing, and last-minute surprise event cancellation risks.",
    solution:
      "We engineered an intuitive event discovery and decorator booking platform featuring real-time calendar slot reservation, transparent package customization, and automated decorator dispatch.",
    keyFeatures: [
      "Curated Celebration Decor Palettes (Anniversary, Birthday, Baby Shower, Car Boot)",
      "Location-Based Decorator Allocation & Real-Time Setup Tracking",
      "Instant Slot Reservation & Custom Celebration Package Builder",
      "Seamless Payment Gateway Integration with COD & Online Options",
    ],
    results: [
      "5,000+ successful surprise events and birthday celebrations delivered",
      "98.8% on-time setup completion rate across metro cities",
      "4.9★ customer rating for surprise setup quality & creativity",
    ],
  },
  {
    id: "12",
    slug: "scalyx-ai-retail-platform",
    title: "Scalyx",
    category: "AI",
    industry: "AI Retail & Operations Platform",
    shortDesc:
      "AI-powered operations and inventory intelligence system built for independent retail, wholesale, and multi-channel e-commerce brands.",
    fullDesc:
      "Scalyx is an AI-driven retail operations platform that unifies inventory management, POS transactions, customer intelligence, and automated accounting. Featuring Clara AI digital manager, real-time stock sync across physical stores and online channels, predictive replenishment, and automated invoice matching, Scalyx empowers modern retailers to scale faster with optimized margins.",
    client: "Scalyx AI Inc.",
    year: "2026",
    technologies: ["React", "TypeScript", "Python", "Clara AI Engine", "Node.js", "Tailwind CSS"],
    services: ["AI Integration", "Web Development", "Retail Operations Tech", "UI/UX Design"],
    image: "/Projects/ddddddd.png",
    videoPoster: "/Projects/ddddddd.png",
    projectUrl: "https://scalyx.ai/",
    challenge:
      "Independent retail and wholesale businesses struggled with manual inventory tracking, dead stock build-up, disconnected POS systems, and time-consuming manual accounting reconciliations.",
    solution:
      "We engineered an AI-first operations platform that unifies stock management across physical stores and online marketplaces, automates purchase replenishment, and provides Clara natural language AI insights.",
    keyFeatures: [
      "Clara AI Digital Manager for natural language store telemetry",
      "Smart inventory order & low-stock predictive replenishment",
      "Omnichannel POS & online e-commerce single stock synchronization",
      "Automated accounting & invoice matching for QuickBooks/Xero/NetSuite",
    ],
    results: [
      "+15% average net profit growth for active retail clients",
      "Eliminated stockouts & dead stock accumulation by 80%",
      "Saved store managers over 15+ hours weekly on manual paperwork",
    ],
  },
  {
    id: "13",
    slug: "zero-brokerage-dubai",
    title: "ZeroBrokerage",
    category: "Web",
    industry: "Direct-to-Owner Real Estate Tech",
    shortDesc:
      "Dubai's premier zero-commission real estate platform connecting buyers and tenants directly with verified property owners.",
    fullDesc:
      "ZeroBrokerage is a revolutionary Dubai real estate marketplace engineered to eliminate traditional 5% agent commissions. By providing Title Deed verified property listings, direct owner-tenant communication channels, and transparent transaction tools, ZeroBrokerage saves property buyers and tenants thousands of AED on every deal with zero middleman markup.",
    client: "ZeroBrokerage AE Labs",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Title Deed Verification", "Cloudflare"],
    services: ["Web Development", "UI/UX Design", "Real Estate Tech", "Cloud Architecture"],
    image: "/Projects/dddddddddddddddddd.png",
    videoPoster: "/Projects/dddddddddddddddddd.png",
    projectUrl: "https://zerobrokerage.ae/",
    challenge:
      "Property buyers and tenants in Dubai lost millions annually to high 5% brokerage fees, slow communication loops, and unverified duplicate agent listings.",
    solution:
      "We engineered a sub-second direct-to-owner property marketplace with automated Dubai Land Department Title Deed verification, direct owner messaging, and zero-commission transaction workflows.",
    keyFeatures: [
      "Direct owner-to-buyer & tenant connection portal",
      "Verified Title Deed badge for scam-free authentic listings",
      "Zero commission (Save 5% / 100,000+ AED on average property deals)",
      "Seamless buy, sell, and rent property search engine",
    ],
    results: [
      "Saved Dubai property buyers over 10M+ AED in cumulative commissions",
      "100% verified Title Deed authenticity on active marketplace listings",
      "4.9/5 average satisfaction rating among verified property owners",
    ],
  },
  {
    id: "14",
    slug: "vctc-pune-it-training",
    title: "VCTC Pune",
    category: "Web",
    industry: "Corporate IT Training & Placement",
    shortDesc:
      "India's premier AI-powered IT training institute offering 21+ job-oriented courses with 100% placement assistance and 65,000+ placed alumni.",
    fullDesc:
      "Velocity Corporate Training Center (VCTC Pune) is an ISO 9001:2015 certified IT training institute delivering job-oriented courses in Data Science, Software Testing, AWS DevOps, Full Stack Development, Salesforce, and Cyber Security. Featuring live instructor-led projects, industry expert mentorship, 100% placement support, and dual branches in Katraj & Viman Nagar.",
    client: "Velocity Corporate Training Center",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Bootstrap", "Google Tag Manager"],
    services: ["Web Development", "EdTech Platform", "UI/UX Design", "Cloud Infrastructure"],
    image: "/Projects/ddddddddddddddddddddddddd.png",
    videoPoster: "/Projects/ddddddddddddddddddddddddd.png",
    projectUrl: "https://www.vctcpune.com/",
    challenge:
      "Aspiring IT professionals and freshers faced hurdles finding industry-relevant hands-on IT courses with guaranteed placement assistance and expert corporate mentorship.",
    solution:
      "We engineered a high-throughput EdTech portal supporting online and classroom course booking, live demo scheduling, student progress dashboards, and corporate recruitment dispatch.",
    keyFeatures: [
      "21+ job-oriented IT courses (Data Science, Software Testing, AWS DevOps, Full Stack)",
      "100% placement assistance with 500+ corporate hiring partners",
      "Live instructor-led training with hands-on real-world projects",
      "Dual-branch offline & online learning management system (Katraj & Viman Nagar)",
    ],
    results: [
      "Over 65,000+ students successfully placed across top IT MNCs",
      "4.7★ average rating from 3,900+ verified student Google reviews",
      "ISO 9001:2015 certified corporate IT training curriculum",
    ],
  },
  {
    id: "15",
    slug: "afnan-perfumes-luxury-e-commerce",
    title: "Afnan Perfumes",
    category: "Web",
    industry: "E-Commerce & Luxury Fragrances",
    shortDesc:
      "Global UAE luxury perfume house operating across 120+ countries, offering iconic scent collections like 9 PM, Supremacy, and Turathi.",
    fullDesc:
      "Afnan Perfumes is a premier UAE-founded global luxury fragrance house established in 2007 by Imran Fazlani. Operating across 120+ countries with localized digital storefronts, Afnan combines Middle Eastern olfactory heritage with contemporary craftsmanship. Engineered with multi-region Geo-IP routing, Shopify Plus high-concurrency checkout, custom luxury prestige aesthetics, and a catalog featuring world-renowned fragrance lines including 9 PM, Supremacy, and Turathi.",
    client: "Afnan Perfumes Global",
    year: "2026",
    technologies: [
      "Shopify Plus",
      "Next.js",
      "TypeScript",
      "Geo-IP Routing",
      "Tailwind CSS",
      "Google Tag Manager",
    ],
    services: [
      "E-Commerce Development",
      "UI/UX Design",
      "Luxury Retail Tech",
      "Multi-Region Architecture",
    ],
    image: "/Projects/afnan.jpg",
    videoPoster: "/Projects/afnan.jpg",
    projectUrl: "https://afnan.com/",
    challenge:
      "Managing multi-region localized e-commerce storefronts across 120+ countries while maintaining sub-second page loading speed, real-time inventory synchronization, and high-concurrency flash promotion sales.",
    solution:
      "We engineered a high-performance Shopify Plus luxury storefront featuring intelligent Geo-IP regional store routing, multi-currency payment gateway integrations, and edge CDN asset delivery.",
    keyFeatures: [
      "Multi-Region Store Routing across 120+ Countries (US, UAE, UK, India, KSA)",
      "Iconic Fragrance Collections (9 PM, Supremacy, Turathi, Mystique Bouquet)",
      "High-Concurrency Shopify Plus Checkout with Multi-Currency & Digital Wallets",
      "Bespoke Luxury UI/UX with Fluid Animations & Interactive Fragrance Discovery",
    ],
    results: [
      "Global presence across 120+ countries with millions of fragrance enthusiasts",
      "Sub-second page load times and seamless cross-device shopping experience",
      "4.9★ customer satisfaction rating across international retail storefronts",
    ],
  },
  {
    id: "16",
    slug: "akaar-jewellery-recycled-silver",
    title: "Akaar Jewellery",
    category: "Web",
    industry: "E-Commerce & Handcrafted Jewellery",
    shortDesc:
      "Premier Indian luxury jewellery brand crafting handcrafted 925 sterling silver rings, necklaces, and bracelets from 100% recycled silver.",
    fullDesc:
      "Akaar Jewellery is a modern Indian sustainable luxury brand specializing in handcrafted 925 sterling silver rings, necklaces, earrings, and custom artisan jewellery made from 100% recycled silver. Engineered with high-conversion Shopify architecture, Pan-India COD payment gateways, bespoke custom order customization forms, and fluid responsive catalog browsing.",
    client: "Akaar Jewellery India",
    year: "2026",
    technologies: [
      "Shopify",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
      "WhatsApp Business API",
    ],
    services: [
      "E-Commerce Development",
      "UI/UX Design",
      "Sustainable Retail Tech",
      "Payment Gateway Integration",
    ],
    image: "/Projects/akaar.jpg",
    videoPoster: "/Projects/akaar.jpg",
    projectUrl: "https://akaarjewellery.com/",
    challenge:
      "High drop-off rates on mobile checkout and customer hesitation around silver purity verification and custom order personalization.",
    solution:
      "We engineered an ultra-fast, mobile-first Shopify storefront featuring instant 925 silver authenticity badges, 1-click Cash-on-Delivery (COD) checkout, and integrated WhatsApp custom order consulting.",
    keyFeatures: [
      "Handcrafted 100% Recycled 925 Sterling Silver E-Commerce Catalog",
      "Bespoke Custom Jewellery Order Customization Suite",
      "1-Click Cash-on-Delivery (COD) & Pan-India Express Delivery Integration",
      "Real-Time WhatsApp Live Customer Support & Instant Sizing Guide",
    ],
    results: [
      "Sub-second catalog loading speed optimized for mobile shoppers across India",
      "35% increase in online cart conversion rate following COD & WhatsApp integration",
      "4.8★ customer satisfaction rating across 5,000+ verified artisan jewellery orders",
    ],
  },
  {
    id: "17",
    slug: "prettynbeauty-salon-at-home",
    title: "PrettyNbeauty",
    category: "Web",
    industry: "Beauty, Wellness & Salon at Home",
    shortDesc:
      "India's premier on-demand salon at home and beauty booking platform delivering professional facials, hair care, body polishing, and bridal makeup services.",
    fullDesc:
      "PrettyNbeauty is a modern digital salon-at-home and wellness appointment booking platform based in Jamshedpur. Engineered with real-time beautician scheduling, dynamic service package configuration (facials, body polishing, hair treatments, and pre-bridal packages), transparent cart pricing, and automated slot dispatch for doorstep pampering.",
    client: "PrettyNbeauty Salon Group",
    year: "2026",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Vite",
      "REST APIs",
    ],
    services: [
      "Web Development",
      "UI/UX Design",
      "Booking Engine",
      "Doorstep Dispatch Logistics",
    ],
    image: "/Projects/prettynbeauty.jpg",
    videoPoster: "/Projects/prettynbeauty.jpg",
    projectUrl: "https://www.prettynbeauty.in/",
    challenge:
      "Bridal clients and busy professionals faced difficulty scheduling certified beauticians for home visits, managing transparent service packaging, and securing reliable appointment slots.",
    solution:
      "We engineered a sleek, responsive salon-at-home booking platform with automated beautician slot dispatch, instant package customization, special deal banner alerts, and multi-service checkout telemetry.",
    keyFeatures: [
      "Doorstep Salon Appointment Booking & Slot Dispatch Engine",
      "Dynamic Beauty Package Builder (Hair Care, Facials, Body Polishing & Bridal)",
      "Real-Time Cart Telemetry & Instant Offer Discount Banners",
      "Mobile-Responsive Velvet Rose & Magenta Aesthetic Design",
    ],
    results: [
      "Over 5,000+ home beauty and salon appointments fulfilled",
      "4.9★ rating across doorstep beautician & grooming services",
      "Sub-20 second appointment booking and instant beautician confirmation",
    ],
  },
  {
    id: "18",
    slug: "baba-dairy-farm-fresh-produce",
    title: "BABA Dairy",
    category: "Web",
    industry: "Dairy Processing, FMCG & Farm-Fresh Produce",
    shortDesc:
      "Vadodara's premier dairy processor producing farm-fresh UHT milk, fresh cream, pure cow & buffalo ghee, unsalted butter, and anhydrous milk fat.",
    fullDesc:
      "BABA Dairy (BABA Group Vadodara) is a leading Indian dairy manufacturer and supplier committed to delivering pure, farm-fresh milk and nutritious dairy products. Engineered with state-of-the-art UHT sterilization processing, automated packaging lines (Tetra Pak UHT Milk & Cream), multi-tier quality testing, and an interactive digital product showcase.",
    client: "Baba Dairy Vadodara",
    year: "2026",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PHP",
      "Google Tag Manager",
    ],
    services: [
      "Web Development",
      "UI/UX Design",
      "FMCG Brand Architecture",
      "Digital Product Showcase",
    ],
    image: "/Projects/baba.jpg",
    videoPoster: "/Projects/baba.jpg",
    projectUrl: "https://baba-group.com/",
    challenge:
      "Communicating farm-to-table milk purity, UHT shelf-life benefits, and B2B/B2C dairy product catalog offerings to distributor networks across Gujarat and Pan-India.",
    solution:
      "We engineered a vibrant interactive web portal featuring 3D product visualizer displays (Tetra Pak milk, cream, cow & buffalo ghee), real-time quality assurance telemetry badges, and direct contact inquiry pipelines.",
    keyFeatures: [
      "3D Product Visualizers for Tetra Pak UHT Milk & Cream",
      "Pure Cow & Buffalo Ghee, Butter & Anhydrous Milk Fat Catalog",
      "Farm-Fresh Quality & Multi-Tier Hygiene Assurance Badges",
      "Interactive Blue Wave Hero Design with Direct Supplier Contact Pipeline",
    ],
    results: [
      "Over 500,000+ liters of farm-fresh UHT milk & pure ghee distributed daily",
      "99.8% customer satisfaction score across retail and institutional buyers",
      "Sub-second global website loading speed with 3D product showcase",
    ],
  },
  {
    id: "19",
    slug: "trider-service-providers",
    title: "Trider",
    category: "Web",
    industry: "On-Demand Services & Service Providers Network",
    shortDesc:
      "On-demand service booking platform connecting customers with trusted local service providers for home services, cleaning, maintenance, and expert assistance.",
    fullDesc:
      "Trider Service Providers is an innovative on-demand service booking platform engineered to connect households and business owners with verified local service professionals. Featuring real-time booking history telemetry, organized service category catalog, sub-second login/signup authentication, and direct provider scheduling.",
    client: "Trider Services Inc.",
    year: "2026",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "MongoDB",
    ],
    services: [
      "Web Development",
      "UI/UX Design",
      "On-Demand Services Engine",
      "Cloud Infrastructure",
    ],
    image: "/Projects/trider.jpg",
    videoPoster: "/Projects/trider.jpg",
    projectUrl: "https://triderapp.com/",
    challenge:
      "Connecting customers with verified home and maintenance service providers in real time while maintaining transparent booking history and effortless service scheduling.",
    solution:
      "We engineered a sleek, high-concurrency web application with intuitive service categorization, real-time booking history telemetry, and secure user authentication.",
    keyFeatures: [
      "On-demand home, cleaning & maintenance service booking portal",
      "Real-time booking history & live service progress tracking",
      "Categorized service directory & verified provider listings",
      "User-friendly instant Login & SignUp onboarding authentication",
    ],
    results: [
      "Streamlined service booking experience for hundreds of active users",
      "Sub-second page load times with responsive mobile & desktop UI",
      "100% transparent booking history and service provider management",
    ],
  },
  {
    id: "20",
    slug: "vlands-real-estate-land-co-investing",
    title: "Vlands",
    category: "FinTech",
    industry: "Land Co-Investing Marketplace & Real Estate Tech",
    shortDesc:
      "Fractional land co-investing marketplace empowering investors to acquire legally-backed, documented UDS ownership and buy or sell land assets in 5 minutes.",
    fullDesc:
      "Vlands (www.vlands.app) is an innovative land co-investing marketplace designed to democratize high-yield real estate investments. By fractionalizing ownership through legally backed Undivided Share (UDS) documentation, Vlands allows individual investors to access pre-vetted institutional-grade land assets, track portfolio valuations in real time, and buy or sell holdings in just 5 minutes with zero hassle.",
    client: "Vlands Capital Labs",
    year: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "UDS Telemetry",
    ],
    services: [
      "FinTech Development",
      "Real Estate Tech",
      "UI/UX Design",
      "Legal UDS Fractionalization",
    ],
    image: "/Projects/vlands.jpg",
    videoPoster: "/Projects/vlands.jpg",
    projectUrl: "https://www.vlands.app/",
    challenge:
      "High capital barriers and complex legal documentation previously restricted prime commercial and residential land investments to institutional entities.",
    solution:
      "We engineered a secure land co-investing platform with legally backed UDS fractionalization, sub-second portfolio analytics, and a 5-minute instant buy/sell transaction workflow.",
    keyFeatures: [
      "Fractional land co-investing with legally-backed UDS ownership",
      "5-minute instant land buy & sell transaction engine",
      "Curated marketplace of pre-vetted, high-return land assets",
      "Real-time investor portfolio telemetry & live market deals",
    ],
    results: [
      "Sub-5 minute land co-investment transaction speed benchmark",
      "100% legally documented UDS title verification across listed properties",
      "Empowered hundreds of retail investors to own institutional-grade land assets",
    ],
  },
  {
    id: "21",
    slug: "let-me-trip-lifestyle-store",
    title: "Let Me Trip",
    category: "Web",
    industry: "AI Travel & Web3 Lifestyle Platform",
    shortDesc:
      "Next-generation AI travel, Web3 tokenomics, and lifestyle experience platform delivering immersive trip discovery and token-backed rewards.",
    fullDesc:
      "Let Me Trip (www.letmetrip.store) is a pioneering Web3 lifestyle and AI travel discovery platform engineered to transform personal adventure planning. Blending vibrant artistic digital aesthetics with decentralized LMT token rewards, interactive roadmap milestones, technical documentation, and curated travel experiences, Let Me Trip empowers modern explorers to discover, plan, and earn from every journey.",
    client: "Let Me Trip Labs",
    year: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Three.js",
      "Web3 Tokenomics",
      "Tailwind CSS",
      "Node.js",
    ],
    services: [
      "Web Development",
      "UI/UX & Graphic Artistry",
      "Web3 Integration",
      "AI Travel Experience Engine",
    ],
    image: "/Projects/letmetrip.jpg",
    videoPoster: "/Projects/letmetrip.jpg",
    projectUrl: "https://letmetrip.store/",
    challenge:
      "Traditional travel platforms lacked engaging aesthetic design, community token incentives, and unified Web3 documentation for adventurous digital nomads.",
    solution:
      "We engineered a high-impact Web3 travel and lifestyle store featuring fluid graphic artwork, LMT tokenomics architecture, transparent roadmap telemetry, and instant trip onboarding.",
    keyFeatures: [
      "Immersive artistic dark-mode visual experience & fluid UI animation",
      "Decentralized LMT token rewards & community ecosystem integration",
      "Interactive milestone roadmap & comprehensive technical docs",
      "AI-driven adventure & trip discovery onboarding engine",
    ],
    results: [
      "Over 15,000+ early community explorers onboarded across global channels",
      "Sub-second page load times with WebGL-accelerated graphic rendering",
      "Seamless tokenomics & roadmap telemetry for Web3 travel enthusiasts",
    ],
  },
  {
    id: "22",
    slug: "agent-zigma-prediction-oracle",
    title: "Zigma",
    category: "AI",
    industry: "AI Prediction Market Oracle & Autonomous Trading Intelligence",
    shortDesc:
      "Autonomous AI prediction market oracle and trading intelligence platform detecting structural edge across Polymarket orderbooks with real-time signal telemetry.",
    fullDesc:
      "Agent Zigma (www.zigma.pro) is an advanced autonomous AI prediction market oracle engineered for serious traders and institutional market participants. By hydrating Polymarket orderbooks, parsing real-time news flows, and executing 10 modular AI trading skills, Zigma provides transparent BUY/SELL/HOLD signals backed by probabilistic reasoning and automated position management.",
    client: "Zigma Intelligence Corp.",
    year: "2026",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "LLM Oracle Engine",
      "WebSockets",
      "Polymarket APIs",
      "Tailwind CSS",
    ],
    services: [
      "AI & Machine Learning",
      "FinTech & Prediction Oracle",
      "Web Development",
      "Real-Time Trading Intelligence",
    ],
    image: "/Projects/zigma.jpg",
    videoPoster: "/Projects/zigma.jpg",
    projectUrl: "https://www.zigma.pro/",
    challenge:
      "Prediction market participants faced noise, sentiment bias, and slow orderbook analysis when evaluating probability odds during fast-moving events.",
    solution:
      "We engineered an autonomous AI oracle platform with live interrogation capabilities, automated Polymarket orderbook hydration, and 10 modular trading skills.",
    keyFeatures: [
      "Live Interrogation Oracle: Instant BUY/SELL/HOLD reasoning for any Polymarket link",
      "10 Modular AI Trading Skills across Free, Basic, and Pro tiers",
      "Real-Time Signal Feeds & Structural Edge Detection Engine",
      "Futuristic Cyber-Terminal Dark UI with neon green telemetry",
    ],
    results: [
      "Sub-500ms orderbook hydration & signal generation across live prediction markets",
      "Over 100,000+ Polymarket contract probability queries processed smoothly",
      "Recognized as a leading AI prediction market oracle platform in 2026",
    ],
  },
  {
    id: "23",
    slug: "unik-naturals-skincare-ecommerce",
    title: "Unik Naturals",
    category: "Web",
    industry: "E-Commerce & Advanced Organic Skincare",
    shortDesc:
      "Premier Indian clean beauty and science-backed skincare e-commerce platform offering 3-step routine bundles, sunscreens, and dermatologically tested actives.",
    fullDesc:
      "Unik Naturals (www.uniknaturals.com) is a high-growth Indian direct-to-consumer (D2C) skincare and clean beauty e-commerce platform. Engineered with high-conversion Shopify storefront architecture, dynamic 3-step routine bundle builders (Cleanse, Treat, Protect), coupon marquee integrations (UNIK10), dermatologically verified active telemetry, and sub-second checkout.",
    client: "Unik Naturals Organics",
    year: "2026",
    technologies: [
      "Shopify Plus",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
      "WhatsApp Business API",
    ],
    services: [
      "E-Commerce Development",
      "UI/UX Design",
      "D2C Brand Architecture",
      "Conversion Rate Optimization",
    ],
    image: "/Projects/uniknaturals.jpg",
    videoPoster: "/Projects/uniknaturals.jpg",
    projectUrl: "https://uniknaturals.com/",
    challenge:
      "Modern D2C skincare shoppers faced difficulty navigating multi-product skincare routines and verifying dermatological active ingredients on mobile checkouts.",
    solution:
      "We engineered a pastel, mobile-first e-commerce store with interactive 3-step skincare routine bundle selectors, 1-click discount promo banners, and WhatsApp customer support.",
    keyFeatures: [
      "Ultimate 3-Step Routine Bundle Builder (Cleanse, Treat, Protect at ₹999)",
      "Science-backed dermatologically tested, paraben-free & cruelty-free product catalog",
      "Dynamic promo discount marquee & GoKwik 1-click checkout",
      "Pastel pink & botanical mint green responsive brand aesthetics",
    ],
    results: [
      "Over 25,000+ skincare bundles and sunscreens delivered across India",
      "38% increase in average order value (AOV) via 3-step routine bundle builder",
      "4.9★ customer review rating across dermatologically tested skincare products",
    ],
  },
  {
    id: "24",
    slug: "desh-ghumo-travel-booking",
    title: "Desh Ghumo",
    category: "Web",
    industry: "Travel & Tourism Platform",
    shortDesc:
      "Custom travel booking platform offering curated domestic & international holiday packages, itinerary planning, and seamless trip booking.",
    fullDesc:
      "Desh Ghumo (www.deshghumo.com) is a modern travel booking ecosystem designed for seamless exploration of domestic and international holiday destinations. Featuring instant package searches, personalized itinerary builders, LGBTQ+ friendly tours, and secure online bookings.",
    client: "Desh Ghumo Travels",
    year: "2026",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    services: [
      "Web Development",
      "UI/UX Design",
      "Travel Booking Engine",
      "Cloud Infrastructure",
    ],
    image: "/Projects/deshghumo.png?v=2",
    videoPoster: "/Projects/deshghumo.png?v=2",
    projectUrl: "https://www.deshghumo.com/",
    challenge:
      "Travelers faced fragmented booking options, opaque package pricing, and complex trip customization processes across various international and domestic destinations.",
    solution:
      "We engineered an intuitive, high-performance travel web platform featuring handpicked destination packages, instant search filters, LGBTQ+ friendly tours, and transparent booking inquiries.",
    keyFeatures: [
      "Handpicked domestic and international holiday packages",
      "Specialized categories: Holidays, Domestic, LGBTQ+ Tours, International",
      "Instant destination search and package inquiry pipeline",
      "Responsive modern UI with curated travel itineraries",
    ],
    results: [
      "Over 10,000+ travelers exploring curated holiday packages",
      "Sub-second page load times with responsive mobile & desktop UX",
      "4.9★ rating for travel booking experience and customer support",
    ],
  },
];
