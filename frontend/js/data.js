const WHY_DATA = [
  { icon: "bi-award-fill", title: "Premium Quality", desc: "High-grade automation components sourced from globally certified manufacturers." },
  { icon: "bi-cpu-fill", title: "Reliable Automation", desc: "Precision-engineered systems built for long-term, trouble-free performance." },
  { icon: "bi-tools", title: "Expert Installation", desc: "Certified technicians with 15+ years of hands-on installation experience." },
  { icon: "bi-sliders", title: "Custom Solutions", desc: "Every project is designed to match your exact space and requirements." },
  { icon: "bi-headset", title: "After-Sales Support", desc: "Dedicated support team available for maintenance and emergency service." },
  { icon: "bi-shield-check", title: "Safety & Security", desc: "Advanced sensors and fail-safe mechanisms for maximum user safety." }
];

const PRODUCTS = [
  {
    cat: "doors",
    name: "Automatic Sliding Doors",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "Smooth, sensor-activated sliding doors ideal for high-traffic commercial entrances.",
    features: ["Motion sensor activation", "Adjustable speed control", "Safety obstruction detection", "Energy-efficient operation"],
    apps: "Malls, Hospitals, Offices, Hotels"
  },
  {
    cat: "doors",
    name: "Automatic Swing Doors",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    desc: "Elegant swing door automation for entrances requiring a classic look with modern convenience.",
    features: ["Bi-directional operation", "Adjustable opening angle", "Hold-open function", "Emergency break-out"],
    apps: "Offices, Banks, Showrooms"
  },
  {
    cat: "doors",
    name: "Automatic Glass Doors",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    desc: "Premium frameless and framed automatic glass door systems for a sophisticated appearance.",
    features: ["Frameless design option", "Tempered safety glass", "Soft-close mechanism", "Custom sizing"],
    apps: "Showrooms, Hotels, Corporate Offices"
  },
  {
    cat: "doors",
    name: "Sensor Doors",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    desc: "Touchless sensor-activated doors for hygienic, hands-free access control.",
    features: ["Infrared & microwave sensors", "Touchless operation", "Adjustable sensitivity", "Low maintenance"],
    apps: "Hospitals, Clinics, Food Industry"
  },
  {
    cat: "doors",
    name: "Telescopic Sliding Doors",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "Space-saving telescopic doors that open wider with a smaller wall recess requirement.",
    features: ["Multi-panel operation", "Wide opening clearance", "Compact wall recess", "High traffic rated"],
    apps: "Airports, Large Malls, Warehouses"
  },
  {
    cat: "doors",
    name: "Automatic Revolving Doors",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    desc: "Premium revolving door systems that combine elegance with energy efficiency.",
    features: ["3 or 4 wing options", "Speed regulation", "Collapsible in emergency", "Energy saving"],
    apps: "5-Star Hotels, Corporate HQs, Airports"
  },
  {
    cat: "windows",
    name: "Automatic Sliding Windows",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Motorized sliding windows for effortless ventilation control at the touch of a button.",
    features: ["Remote control operation", "Rain sensor auto-close", "Timer scheduling", "Child safety lock"],
    apps: "Residences, Apartments, Offices"
  },
  {
    cat: "windows",
    name: "Motorized Windows",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Retrofit motorization kits for existing windows — upgrade without full replacement.",
    features: ["Easy retrofit installation", "App & remote control", "Wind speed sensor", "Quiet motor"],
    apps: "Homes, Offices, High-rise Buildings"
  },
  {
    cat: "windows",
    name: "Smart Window Systems",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "IoT-enabled smart windows integrated with home and building automation systems.",
    features: ["Voice control compatible", "Smart home integration", "Energy management", "Automated scheduling"],
    apps: "Smart Homes, Green Buildings"
  },
  {
    cat: "shutters",
    name: "Motorized Rolling Shutters",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    desc: "Heavy-duty motorized rolling shutters for commercial and industrial security.",
    features: ["High-torque motor", "Remote & switch control", "Manual override", "Anti-theft locking"],
    apps: "Shops, Warehouses, Factories"
  },
  {
    cat: "shutters",
    name: "Automatic Industrial Shutters",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    desc: "Large-format industrial shutters designed for heavy-duty warehouse and factory use.",
    features: ["High-speed operation", "Heavy load capacity", "Safety bottom edge", "Insulated options"],
    apps: "Warehouses, Loading Docks, Factories"
  },
  {
    cat: "access",
    name: "Smart Access Control",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Integrated access control systems with card, biometric, and mobile-based entry.",
    features: ["Biometric & card access", "Mobile app control", "Audit trail logging", "Multi-door management"],
    apps: "Offices, Banks, Gated Communities"
  },
  {
    cat: "access",
    name: "Motion & Safety Sensors",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Advanced motion and safety sensors for reliable, touchless door activation.",
    features: ["Microwave & IR options", "Wide detection angle", "Weather resistant", "Easy calibration"],
    apps: "All automatic door installations"
  }
];

const SERVICES = [
  { icon: "bi-hammer", title: "New Installation", desc: "Complete supply and installation of automatic doors, windows, and shutters." },
  { icon: "bi-lightning-charge-fill", title: "Automation & Motorization", desc: "Automate your existing manual doors and windows with our retrofit solutions." },
  { icon: "bi-arrow-repeat", title: "Door/Window Retrofitting", desc: "Upgrade older systems with modern automation without full replacement." },
  { icon: "bi-wrench-adjustable", title: "Repair & Maintenance", desc: "Fast, reliable repair services to minimize downtime for your business." },
  { icon: "bi-gear-fill", title: "Motor Replacement", desc: "OEM and compatible motor replacements for all major brands." },
  { icon: "bi-broadcast", title: "Sensor Installation", desc: "Installation and calibration of motion, safety, and access sensors." },
  { icon: "bi-arrow-up-circle-fill", title: "System Upgrades", desc: "Upgrade your existing automation system to the latest technology." },
  { icon: "bi-calendar-check-fill", title: "Annual Maintenance", desc: "Scheduled AMC plans to keep your systems running at peak performance." }
];

const APPLICATIONS = [
  { label: "Residential Buildings", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80" },
  { label: "Apartments", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80" },
  { label: "Offices", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" },
  { label: "Shopping Malls", img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&q=80" },
  { label: "Hotels", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
  { label: "Hospitals", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80" },
  { label: "Banks", img: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&q=80" },
  { label: "Showrooms", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80" },
  { label: "Warehouses", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
  { label: "Restaurants", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80" },
  { label: "Industrial Buildings", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
  { label: "Institutions", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80" }
];

const GALLERY = [
  { filter: "doors", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", label: "Automatic Sliding Door – Mall" },
  { filter: "doors", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", label: "Glass Entrance – Corporate Office" },
  { filter: "windows", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", label: "Motorized Windows – Apartment" },
  { filter: "shutters", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", label: "Rolling Shutter – Warehouse" },
  { filter: "commercial", img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&q=80", label: "Commercial Project – Shopping Mall" },
  { filter: "commercial", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", label: "Hotel Entrance Automation" },
  { filter: "residential", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", label: "Residential Automation – Villa" },
  { filter: "residential", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80", label: "Apartment Complex – Bengaluru" },
  { filter: "doors", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80", label: "Sensor Door – Hospital" }
];
