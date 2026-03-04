import {
  Leaf,
  Radio,
  ScanEye,
  Droplets,
  Sprout,
  Cloud,
  Cpu,
  ShieldCheck,
  BookOpen,
  Workflow,
  Wrench,
  Smartphone,
} from "lucide-react";

export const siteContent = {
  brand: {
    title:
      "LoRa-Enabled Smart Cucumber Polytunnel System for Disease Detection, Fertilization, and Water Stress Management in Sri Lanka",
    shortTitle: "Smart Polytunnel System",
    tagline: "Plant-level intelligence for healthier crops, smarter inputs, and better yields.",
    intro:
      "A research showcase integrating autonomous robotics, RFID-based plant identification, LoRa communication, and machine learning to enable targeted interventions in protected cucumber cultivation.",
  },

  nav: {
    ctas: {
      primary: { label: "Explore the System", href: "/architecture" },
      secondary: { label: "View Results", href: "/results" },
    },
    links: [
      { label: "Home", href: "/" },
      { label: "Project Overview", href: "/about" },
      { label: "Architecture", href: "/architecture" },
      { label: "Features & Modules", href: "/features" },
      { label: "Hardware", href: "/hardware" },
      { label: "Software", href: "/software" },
      { label: "Results", href: "/results" },
      { label: "References", href: "/references" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },

  home: {
    seo: {
      title: "Home",
      description:
        "Premium research showcase for a LoRa-enabled smart cucumber polytunnel system: disease detection, fertilization, and water stress management in Sri Lanka.",
    },
    hero: {
      eyebrow: "Research Project",
      headline: "Smart polytunnel automation built for Sri Lankan cucumber farming.",
      subtext:
        "A frontend showcase of an integrated system: RFID plant identification, multi-height leaf scanning, YOLOv8 disease detection, LoRa sensor networking, and targeted spraying/actuation.",
      ctas: [
        { label: "See System Architecture", href: "/architecture", intent: "primary" },
        { label: "Read Project Overview", href: "/about", intent: "secondary" },
      ],
      illustrationAlt: "Abstract illustration placeholder",
      illustrationSrc: "/src/assets/robot.png",
    },
    metrics: {
      items: [
        { label: "Polytunnel Rows Tested", value: "5" },
        { label: "Row Length", value: "8 m" },
        { label: "Plant Spacing", value: "70 cm" },
        { label: "Row Spacing", value: "150 cm" },
        { label: "YOLOv8 mAP", value: "0.92" },
        { label: "Estimated Chemical Reduction", value: "~80%" },
      ],
      note:
        "Metrics represent prototype evaluation in real polytunnel conditions with plant-level scanning and precision actions.",
    },
    problems: {
      heading: { title: "Problems this system targets", subtitle: "Precision actions instead of blanket decisions." },
      items: [
        {
          icon: Leaf,
          title: "Late disease detection",
          description:
            "Manual scouting is slow and subjective. The system focuses on earlier identification using image-based analysis.",
        },
        {
          icon: Droplets,
          title: "Chemical overuse",
          description:
            "Blanket spraying wastes inputs and increases exposure. Targeted actuation reduces unnecessary application.",
        },
        {
          icon: Radio,
          title: "Connectivity gaps",
          description:
            "Rural deployments face unstable internet. LoRa extends coverage for sensor telemetry and alerts.",
        },
        {
          icon: Workflow,
          title: "No plant-level traceability",
          description:
            "Traditional workflows rarely log plant-by-plant history. RFID enables per-plant health and action records.",
        },
      ],
    },
    featuresPreview: {
      heading: { title: "Feature highlights", subtitle: "Modular by design, integrated end-to-end." },
      items: [
        {
          icon: ScanEye,
          title: "Multi-height leaf scanning",
          description: "Vertical motion captures leaf images across canopy levels for improved coverage.",
        },
        {
          icon: Cpu,
          title: "YOLOv8-based detection",
          description: "ML detection supports disease classification and action triggers.",
        },
        {
          icon: ShieldCheck,
          title: "Precision spraying logic",
          description: "Automatic spraying is activated only when detection indicates risk.",
        },
        {
          icon: Cloud,
          title: "IoT data logging",
          description: "Events and plant profiles are recorded to support repeatable evaluations and history.",
        },
      ],
    },
    architectureTeaser: {
      heading: { title: "System architecture", subtitle: "A clean pipeline: sense → decide → act → log." },
      bullets: [
        "Line-following navigation and RFID plant identification",
        "Leaf scanning with vertical mechanism and image capture",
        "ML inference and decision output (spray/skip)",
        "Mobile app status + plant profiles + event logs",
      ],
      cta: { label: "View full architecture", href: "/architecture" },
      diagramAlt: "Architecture diagram placeholder",
      diagramSrc: "/src/assets/architecture-diagram.svg",
      modal: {
        title: "Architecture Diagram",
        description: "High-level system blocks and data flow.",
      },
    },
    resultsTeaser: {
      heading: { title: "Results snapshot", subtitle: "Prototype performance indicators and evaluation notes." },
      cards: [
        { title: "Navigation stopping accuracy", value: "100%", note: "Correct plant stops across tested plants." },
        { title: "RFID (single-pass) reliability", value: "~80%", note: "Within 3 cm range; see constraints." },
        { title: "Spray targeting (prototype)", value: "~80%", note: "Visual verification within ±3 cm estimate." },
      ],
      progress: [
        { label: "YOLOv8 precision", value: 96 },
        { label: "YOLOv8 recall", value: 98 },
        { label: "YOLOv8 mAP", value: 92 },
      ],
      cta: { label: "See evaluation details", href: "/results" },
    },
    timeline: {
      heading: { title: "Methodology overview", subtitle: "From field data to integrated prototype validation." },
      steps: [
        { title: "Requirement discovery", detail: "Polytunnel constraints, spacing, and farmer workflow mapping." },
        { title: "Prototype build", detail: "Robot navigation, RFID, vertical scanning, and pump actuation." },
        { title: "Dataset & training", detail: "Labelled cucumber leaf images for disease classes." },
        { title: "Integration", detail: "End-to-end pipeline with event logging and mobile monitoring." },
        { title: "Field validation", detail: "Real polytunnel traversal and plant-level test runs." },
      ],
    },
    ctaBanner: {
      title: "Explore a complete research system — not a dashboard.",
      subtitle: "Architecture, modules, hardware, software integration, results, and references in one place.",
      ctas: [
        { label: "Explore Modules", href: "/features", intent: "primary" },
        { label: "Contact", href: "/contact", intent: "secondary" },
      ],
    },
  },

  pages: {
    about: {
      seo: { title: "Project Overview", description: "Overview, scope, goals, and key innovations." },
      heading: { title: "Project overview", subtitle: "What the system is and why it matters." },
      sections: [
        {
          title: "Research goal",
          bullets: [
            "Enable plant-level monitoring and targeted actions in protected cucumber cultivation.",
            "Reduce chemical and resource waste through decision-driven spraying and actuation.",
            "Improve traceability using RFID plant identification and event logging.",
          ],
        },
        {
          title: "Context: Polytunnel geometry",
          bullets: ["Row spacing: 150 cm", "Plant spacing: 70 cm", "Test rows: 5", "Row length: 8 m"],
        },
        {
          title: "Key innovation",
          bullets: [
            "End-to-end integration: navigation → identification → scanning → ML decision → action → logs.",
            "Mobile app visibility for robot state and plant-level history.",
            "LoRa communication to support sensor networks under intermittent connectivity.",
          ],
        },
      ],
    },

    architecture: {
      seo: { title: "System Architecture", description: "System blocks, data flow, and integration points." },
      heading: { title: "System architecture", subtitle: "How modules connect across robot, ML, and IoT." },
      diagram: {
        alt: "Architecture diagram placeholder",
        src: "/src/assets/architecture-diagram.svg",
      },
      blocks: [
        { title: "Autonomous robot", description: "Line following, RFID stop points, vertical scanning, spraying." },
        { title: "ML inference", description: "YOLOv8n classification for disease categories and action triggers." },
        { title: "LoRa sensor network", description: "Environmental telemetry for water stress/fertigation context." },
        { title: "Mobile app", description: "Robot status, plant profiles, logs, and signal quality indicators." },
      ],
      modal: {
        title: "View Architecture Diagram",
        description: "Placeholder diagram file stored locally in assets.",
      },
    },

    features: {
      seo: { title: "Features & Modules", description: "Key features and modules across the system." },
      heading: { title: "Features & modules", subtitle: "A modular approach for scalable smart cultivation." },
      tabs: [
        { key: "modules", label: "Modules" },
        { key: "features", label: "Features" },
        { key: "comparisons", label: "Hardware vs Software" },
      ],
    },

    hardware: {
      seo: { title: "Hardware & Components", description: "Prototype components and integration overview." },
      heading: { title: "Hardware & components", subtitle: "Low-cost parts chosen for real-world prototyping." },
    },

    software: {
      seo: { title: "Software Integration", description: "Mobile/web UI, event logs, ML pipeline, and IoT integration." },
      heading: { title: "Software integration", subtitle: "From device control to plant profiles and logs." },
      appSections: [
        {
          title: "Robot monitoring",
          bullets: [
            "Robot name and current mode",
            "Moving status and scanning status",
            "Water pump status",
            "WiFi signal strength between robot and hotspot/router",
          ],
        },
        {
          title: "Current working data",
          bullets: ["Plant ID", "Scan status", "Disease detected (Yes/No)", "Scan start time", "Pump start time"],
        },
        {
          title: "Logs and traceability",
          bullets: ["All scan event logs", "Plant profiles per plant ID", "History: last scan and last spray"],
        },
      ],
    },

    results: {
      seo: { title: "Results & Evaluation", description: "Evaluation approach, results table, and assumptions." },
      heading: { title: "Results & evaluation", subtitle: "Prototype metrics with assumptions and constraints." },
      stats: {
        table: [
          { metric: "Navigation stopping accuracy", value: "100%", note: "Successful stops at correct plants (20 plants)." },
          { metric: "Line tracking deviation", value: "±1 cm", note: "Analog IR sensors with left/right logic." },
          { metric: "RFID detection reliability", value: "~80% (theoretical)", note: "Single-pass within 3 cm range." },
          { metric: "RFID practical plant identification", value: "100%", note: "Stop-and-retry strategy avoided missed plants." },
          { metric: "YOLOv8n mAP", value: "0.92", note: "Trained on >3000 images." },
          { metric: "YOLOv8 precision / recall", value: "0.96 / 0.98", note: "Prototype dataset and local inference." },
          { metric: "Spray targeting accuracy", value: "~80%", note: "Visual deposition estimate; prototype alignment." },
          { metric: "Estimated chemical reduction", value: "~80%", note: "Compared with blanket spraying assumption." },
          { metric: "Battery runtime", value: "~1 hour", note: "4×18650 series with buck converters." },
        ],
      },
      rfidAssumptions: {
        title: "RFID reliability assumptions & constraints",
        subtitle: "Explains the statement: ~80% theoretical reliability within 3 cm range.",
        bullets: [
          "Tag orientation sensitivity and antenna alignment",
          "Antenna placement height and ground clearance",
          "Movement speed during single-pass read attempts",
          "Electromagnetic interference near motor drivers",
          "Soil/moisture and environmental factors around tag",
          "Stop-and-retry behavior increases practical detection to 100% in tests",
        ],
      },
    },

    references: {
      seo: { title: "Publications / References", description: "IEEE-style placeholder references and citations." },
      heading: { title: "Publications & references", subtitle: "Key literature anchors (placeholders; update for submission)." },
    },

    faq: {
      seo: { title: "FAQ", description: "Common questions about the system and evaluation." },
      heading: { title: "FAQ", subtitle: "Clear answers, prototype constraints, and next steps." },
    },

    contact: {
      seo: { title: "Contact", description: "Get in touch about the research project." },
      heading: { title: "Contact", subtitle: "Questions, collaboration, or feedback." },
      form: {
        placeholders: {
          name: "Your name",
          email: "you@example.com",
          message: "Write your message...",
        },
        submitLabel: "Send message",
        successToast: "Thanks! Your message was submitted (simulated).",
        errorToast: "Please check the form fields and try again.",
      },
      details: {
        items: [
          { label: "Email", value: "research@example.com" },
          { label: "Location", value: "Sri Lanka" },
          { label: "Topic", value: "Smart Polytunnel Automation (LoRa + ML + Robotics)" },
        ],
      },
    },

    notFound: {
      seo: { title: "Not Found", description: "Page not found." },
      heading: { title: "Page not found", subtitle: "The link may be broken or the page may have moved." },
      cta: { label: "Back to home", href: "/" },
    },
  },

  features: [
    {
      icon: Workflow,
      title: "End-to-end pipeline",
      description: "Sense → decide → act → log for repeatable plant-level automation.",
      tag: "System",
    },
    {
      icon: Smartphone,
      title: "Mobile visibility",
      description: "Robot status, scan events, WiFi strength, and plant profiles in one place.",
      tag: "UX",
    },
    {
      icon: Radio,
      title: "LoRa-enabled networking",
      description: "LPWAN coverage for telemetry and alerts in low-connectivity environments.",
      tag: "IoT",
    },
    {
      icon: ScanEye,
      title: "Leaf imaging & detection",
      description: "YOLOv8n inference supports disease detection and action triggers.",
      tag: "ML",
    },
    {
      icon: Droplets,
      title: "Targeted actuation",
      description: "Spray/pump control activates only when needed for input efficiency.",
      tag: "Automation",
    },
  ],

  modules: [
    {
      key: "rfid",
      icon: ShieldCheck,
      title: "RFID plant identification",
      description: "Stops at each plant using unique RFID tags to enable traceability.",
      bullets: ["RC522 (13.56 MHz)", "3 cm read range (prototype)", "Per-plant IDs and histories"],
    },
    {
      key: "ml",
      icon: Cpu,
      title: "ML disease detection",
      description: "YOLOv8n model detects leaf diseases and triggers actions.",
      bullets: ["Classes: healthy, downy mildew, powdery mildew", "mAP: 0.92", "Precision: 0.96, Recall: 0.98"],
    },
    {
      key: "lora",
      icon: Radio,
      title: "LoRa communication",
      description: "LPWAN networking for sensor telemetry and farm alerts under intermittent internet.",
      bullets: ["Low power, long range", "Sensor-to-gateway architecture", "Supports resilience goals"],
    },
    {
      key: "irrigation",
      icon: Droplets,
      title: "Irrigation / pump control",
      description: "Actuation control for water delivery and targeted spraying.",
      bullets: ["Prototype: 5V pump", "Timed pulses for control", "Safety interlocks recommended"],
    },
    {
      key: "fertigation",
      icon: Sprout,
      title: "Fertilization planning",
      description: "Stage-aware nutrient planning using telemetry and growth context.",
      bullets: ["Sensor-driven decisions", "Schedule-based recommendations", "Extensible for closed-loop control"],
    },
    {
      key: "waterStress",
      icon: Leaf,
      title: "Water stress management",
      description: "Detect risk conditions and trigger alerts/actions based on microclimate and soil status.",
      bullets: ["Moisture and environment context", "Threshold + trend logic", "Supports prevention workflows"],
    },
  ],

  hardware: {
    groups: [
      {
        title: "Power & enclosure",
        items: [
          { name: "4 × 18650 Li-ion (3.7V)", detail: "Series configuration for ~12V rail (prototype)" },
          { name: "2 × Buck converters", detail: "12V→5V and logic regulation" },
          { name: "Plastic enclosure", detail: "300×250×120 mm housing for electronics" },
        ],
      },
      {
        title: "Drive & navigation",
        items: [
          { name: "4 × Gear motors", detail: "Four-wheel drive prototype" },
          { name: "2 × BTS7960 drivers", detail: "High-current motor control" },
          { name: "L298N driver", detail: "Additional motor control support" },
          { name: "2 × Analog IR sensors", detail: "Line detection for navigation" },
          { name: "4 wheels", detail: "8 cm diameter wheels for mobility" },
        ],
      },
      {
        title: "Identification & scanning",
        items: [
          { name: "ESP32 DevKit V1", detail: "Main controller / connectivity (prototype)" },
          { name: "RC522 RFID module", detail: "13.56 MHz plant-level identification" },
          { name: "RFID cards/tags", detail: "Unique plant IDs placed per plant" },
          { name: "NEMA 17 stepper", detail: "Vertical scanning mechanism drive" },
          { name: "A4988 driver", detail: "1/16 microstepping" },
          { name: "0.5 m threaded rod", detail: "Vertical motion (lead screw style)" },
          { name: "0.75 m guide rod", detail: "Non-threaded support shaft" },
        ],
      },
      {
        title: "Actuation & sensing",
        items: [
          { name: "5V DC water pump", detail: "Prototype spraying/irrigation actuation" },
          { name: "LoRa module", detail: "LPWAN sensor/telemetry communication" },
          { name: "Environmental sensors", detail: "Temperature/humidity, soil moisture, EC/pH (as applicable)" },
        ],
      },
    ],
  },

  softwareStack: {
    items: [
      { name: "React + Vite website", detail: "Informational multi-page research site (this project)" },
      { name: "Mobile application", detail: "Robot status, plant profiles, event logs, signal strength" },
      { name: "Firebase (integration)", detail: "Storage/logging pipeline concept and sync layer" },
      { name: "Python ML pipeline", detail: "YOLOv8 training/inference + preprocessing" },
      { name: "Arduino/ESP32 firmware", detail: "Navigation, RFID, motor control, and actuation logic" },
    ],
  },

  evaluation: {
    headline: "Evaluation summary",
    subtext:
      "Prototype evaluation focused on navigation correctness, plant-level identification, ML detection quality, and action logging.",
    highlights: [
      { label: "RFID detection reliability", value: "~80% theoretical reliability within 3 cm range" },
      { label: "Navigation stop accuracy", value: "100% across tested plants" },
      { label: "Model performance", value: "mAP 0.92, Precision 0.96, Recall 0.98" },
      { label: "Chemical reduction", value: "~80% estimated vs blanket spraying" },
    ],
  },

  references: [
    { id: "[1]", text: "P. Sammons et al., “Autonomous pesticide spraying robot for greenhouse,” ACRA, 2005." },
    {
      id: "[2]",
      text: "N. Nguyen et al., “Development of a line-following autonomous spraying vehicle for greenhouses,” Computers and Electronics in Agriculture, 2023.",
    },
    {
      id: "[3]",
      text: "J. Contreras-Castillo et al., “An IoT-based platform and deep learning for greenhouse monitoring,” Applied Sciences, 2023.",
    },
    {
      id: "[4]",
      text: "M. Longhi et al., “RFID-based localization for greenhouse monitoring,” IEEE APWC, 2018.",
    },
    {
      id: "[5]",
      text: "J. Sánchez-Molina et al., “Robotics in greenhouses: A scoping review,” Computers and Electronics in Agriculture, 2024.",
    },
  ],

  faq: [
    {
      q: "Is this site a dashboard?",
      a: "No. It is a frontend-only marketing/information site designed to explain the research system and its outcomes.",
    },
    {
      q: "What does “~80% theoretical RFID reliability within 3 cm range” mean?",
      a: "It describes single-pass read success when the tag is within the RC522’s effective read distance. Stop-and-retry behavior improved practical detection in tests.",
    },
    {
      q: "Where does the content live?",
      a: "All site content is sourced from a single file: src/content/siteContent.js (single source of truth).",
    },
    {
      q: "Is there any backend or API?",
      a: "No. All data is local. Forms are simulated and provide toast feedback only.",
    },
  ],

  footer: {
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Project Overview", href: "/about" },
          { label: "Architecture", href: "/architecture" },
          { label: "Features & Modules", href: "/features" },
          { label: "Results", href: "/results" },
        ],
      },
      {
        title: "Details",
        links: [
          { label: "Hardware", href: "/hardware" },
          { label: "Software Integration", href: "/software" },
          { label: "References", href: "/references" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Contact page", href: "/contact" },
          { label: "Location: Sri Lanka", href: "/contact" },
          { label: "Email: research@example.com", href: "/contact" },
        ],
      },
    ],
    newsletter: {
      title: "Newsletter",
      subtitle: "Get updates on the research (simulated).",
      placeholder: "Email address",
      button: "Subscribe",
      toastSuccess: "Subscribed (simulated).",
      toastError: "Enter a valid email to subscribe.",
    },
    socials: [
      { label: "GitHub", href: "#", icon: BookOpen },
      { label: "Docs", href: "#", icon: BookOpen },
    ],
    legal: "© 2026 Smart Polytunnel Research. Frontend-only showcase.",
  },
};