export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  solutions: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "01",
    name: "Healthcare",
    shortDesc: "HIPAA-compliant software, telemedicine platforms, patient portals, and clinical AI assistants.",
    iconName: "MdLocalHospital",
    solutions: ["Telemedicine Apps", "EHR/EMR Integrations", "Clinical AI Notes", "Medical Device Portals"],
  },
  {
    id: "02",
    name: "FinTech",
    shortDesc: "Secure banking dashboards, payment gateway integrations, ledger reconciliation, and risk analytics.",
    iconName: "MdAccountBalance",
    solutions: ["Digital Banking UI", "Payment Processing APIs", "Automated Ledger Reconciliation", "Fraud Analytics"],
  },
  {
    id: "03",
    name: "Real Estate",
    shortDesc: "Interactive property portals, WebGL 3D virtual walkthroughs, and tenant management SaaS.",
    iconName: "MdApartment",
    solutions: ["3D Virtual Property Tours", "Tenant Portals", "Property Management Systems", "MLS Integrations"],
  },
  {
    id: "04",
    name: "Education",
    shortDesc: "Scalable Learning Management Systems (LMS), virtual classrooms, and interactive student analytics.",
    iconName: "MdSchool",
    solutions: ["Custom LMS Platforms", "Virtual Classrooms", "Course Delivery Systems", "Student Progress Analytics"],
  },
  {
    id: "05",
    name: "E-Commerce",
    shortDesc: "High-conversion headless storefronts, multi-channel inventory sync, and custom checkout flows.",
    iconName: "MdShoppingCart",
    solutions: ["Headless Next.js Stores", "Multi-Marketplace Inventory Sync", "Custom Checkout Pipelines", "Customer Loyalty Systems"],
  },
  {
    id: "06",
    name: "SaaS",
    shortDesc: "Multi-tenant cloud platforms, subscription billing engines, and automated user onboarding.",
    iconName: "MdCloud",
    solutions: ["Multi-Tenant Architecture", "Stripe Billing Engines", "User Onboarding Flows", "Admin Management Control"],
  },
  {
    id: "07",
    name: "Logistics",
    shortDesc: "Real-time fleet telemetry, GPS dispatch dashboards, and automated route optimization.",
    iconName: "MdLocalShipping",
    solutions: ["Fleet GPS Telemetry", "Route Optimization Algorithms", "Digital Proof of Delivery", "Warehouse Dispatching"],
  },
  {
    id: "08",
    name: "Travel & Hospitality",
    shortDesc: "Booking engines, guest management portals, and automated reservation management.",
    iconName: "MdFlightTakeoff",
    solutions: ["Custom Booking Engines", "Guest Concierge Apps", "Property Reservation Sync", "Loyalty Rewards"],
  },
  {
    id: "09",
    name: "Manufacturing",
    shortDesc: "IoT equipment telemetry, inventory management, and automated quality control pipelines.",
    iconName: "MdPrecisionManufacturing",
    solutions: ["IoT Sensor Telemetry", "Supply Chain Dashboards", "Equipment Maintenance Alerts", "Quality Control Audits"],
  },
  {
    id: "10",
    name: "Professional Services",
    shortDesc: "Client portals, document workflow automation, and custom CRM systems.",
    iconName: "MdWork",
    solutions: ["Client Collaboration Portals", "Automated Document Workflows", "Custom CRM Dashboards", "Billing & Invoicing"],
  },
];
