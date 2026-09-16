export type ProjectFilter = 'All' | 'Development' | 'Data' | 'UX/UI'

export type ProjectVisual = 'sccci' | 'tutoring' | 'motors' | 'education'

export type ProjectImage = {
  src: string    // relative path to asset, or '' for placeholder
  title: string  // short image title shown above
  caption: string // contextual sentence shown below
  alt: string    // screen-reader alt text
}

export type Project = {
  id: string
  number: string
  title: string
  category: string
  filters: Exclude<ProjectFilter, 'All'>[]
  shortDescription: string
  overview: string
  whatIBuilt: string
  technicalImplementation: string
  features: string[]
  technologies: string[]
  contribution: string
  takeaways: string[]
  visual: ProjectVisual
  images: ProjectImage[]
  github?: string
  liveDemo?: string
}

export const projects: Project[] = [
  {
    id: 'sccci-support-ticket-dashboard',
    number: '01',
    title: 'SCCCI Support Ticket Dashboard',
    category: 'Full-Stack & Offline-First',
    filters: ['Development'],
    shortDescription:
      'Full-stack, offline-first web application supporting event and delegate operations with offline synchronisation logic and facial-recognition identification.',
    overview:
      'Developed a resilient, offline-capable delegation management dashboard for SCCCI event coordinators, featuring a real-time support ticketing system, system health monitoring, and multi-modal delegate check-ins.',
    whatIBuilt:
      "An operational command center for on-ground event staff featuring a structured, multi-stage support ticketing workflow (Active, Resolution Queue, Recycle Bin), system diagnostics with automatic connection fallbacks, and a flexible check-in interface supporting QR codes, manual entry, and facial recognition.",
    technicalImplementation:
      'Engineered a resilient frontend architecture using IndexedDB for offline scan persistence and batch synchronization. Built a real-time ticketing interface with advanced filtering, sorting, and state management to handle ticket lifecycles from creation to resolution. Implemented a dual-mode connection strategy (live updates with automatic fallback to polling) and integrated browser-based facial recognition APIs as a fallback to standard QR scanning.',
    features: [
      'Real-time support ticket management with advanced filtering, sorting, and a multi-stage workflow (Active, Resolution Queue, Recycle Bin)',
      'Multi-modal delegate check-in (QR, Manual ID, Facial Recognition)',
      'Real-time system diagnostics with automatic connection fallback',
      'Offline-first scan recording with batch synchronization',
      'Checkpoint-based attendance tracking',
    ],
    technologies: [
      'JavaScript',
      'IndexedDB',
      'REST APIs',
      'React',
    ],
    contribution:
      'Engineered the offline-first scanning architecture using IndexedDB, built the real-time ticketing workflow with advanced filtering and state management, implemented the system diagnostics and connection fallback logic, and integrated the facial recognition check-in workflow into the attendance system.',
    takeaways: [
      'Resilient operations require graceful degradation: falling back from live updates to polling ensures the dashboard and ticket queues remain usable during network instability.',
      'Operational tools need high scannability: ticket queues, diagnostics, and check-in flows must be immediately readable and filterable for fast decision-making.',
      'Offline-first scanning requires strict state management to prevent duplicate records during batch synchronization.',
      'Biometric features like facial recognition must be treated as flexible fallbacks within a broader operational workflow (alongside QR and manual entry).',
    ],
    visual: 'sccci',
    images: [
      {
        src: '/assets/sccci_activetickets.png',
        title: 'Active tickets',
        caption: 'Coordinator dashboard for viewing, filtering, and resolving open delegation requests in real-time.',
        alt: 'SCCCI active tickets dashboard',
      },
      {
        src: '/assets/sccci_resolutionqueue.png',
        title: 'Resolution queue',
        caption: 'Prioritized queue for coordinators to review and process pending tickets before marking them as resolved.',
        alt: 'SCCCI resolution queue',
      },
      {
        src: '/assets/sccci_systemdiagnostics.png',
        title: 'System diagnostics',
        caption: 'Real-time system health monitor displaying connection status, live sync metrics, and backup connection alerts.',
        alt: 'SCCCI system diagnostics monitor',
      },
      {
        src: '/assets/sccci_facialrecogscanning.png',
        title: 'Facial recognition scanning',
        caption: "Biometric check-in feature allowing staff to verify a delegate's identity by scanning their face as an alternative to QR codes.",
        alt: 'SCCCI facial recognition scanning',
      },
    ],
  },
  {
    id: 'peer-tutoring-platform',
    number: '02',
    title: 'Peer Tutoring Platform',
    category: 'UX/UI & Frontend',
    filters: ['UX/UI'],
    shortDescription:
      'Designed the UI/UX and frontend experience for a peer tutoring platform focused on tutor discovery, availability management, and booking workflows.',
    overview:
      'Designed the UI/UX for a peer tutoring platform that helps students discover tutors, manage availability and navigate the process of requesting and booking tutoring sessions.',
    whatIBuilt:
      'Designed the student-facing experience from the ground up, shaping the interface and user flows across subject discovery, tutor availability, peer matching and booking. The focus was on making each step clear and easy to navigate.',
    technicalImplementation:
      'Developed as a team using React, AWS API Gateway, AWS Lambda and Amazon DynamoDB. While my teammates handled the backend, serverless architecture and database implementation, I focused on the frontend experience and translating the product requirements into a cohesive interface.',
    features: [
      'Student-focused React interface',
      'Subject and tutor discovery',
      'Tutor availability management',
      'Peer matching and tutoring requests',
      'Clear booking and request states',
      'Responsive UI/UX',
    ],
    technologies: [
      'Figma',
      'React',
    ],
    contribution:
      'Designed the interface and user flows in Figma, then brought the designs into the student-facing frontend. Worked closely with teammates to ensure the experience aligned with the underlying system and remained intuitive across different tutoring workflows.',
    takeaways: [
      'Designing intuitive flows for multi-step booking processes',
      'Turning functional requirements into clear, user-friendly interfaces',
      'Bridging design decisions with frontend implementation',
      'Collaborating closely across design and development',
    ],
    visual: 'tutoring',
    images: [
      {
        src: '',
        title: 'Prototype — Overview',
        caption:
          '[PLACEHOLDER — Prototype screenshots will be added when provided]',
        alt: 'Peer tutoring prototype screenshot placeholder',
      },
    ],
  },
  {
    id: 'chin-hon-motors',
    number: '03',
    title: 'Chin Hon Motors Website & Pricing Console',
    category: 'Web Application & Internal Operations',
    filters: ['Development'],
    shortDescription:
      'Practical Flask web application and internal pricing console streamlining automotive operational workflows and model comparisons.',
    overview:
      'Built an intelligent pricing intelligence platform for Chin Hon Motors, featuring automated rule-based price recommendations, competitor monitoring, and inventory-aware pricing strategies.',
    whatIBuilt:
      'A comprehensive pricing console (WDP Motors Intelligence Hub) with three core modules: Pricing Rules Management (create and toggle automated pricing rules), Generate Recommended Price (real-time price suggestions based on rules), and Recommendation History (audit trail with filtering). The system includes smart alerts for low stock, competitor undercutting, and data aging.',
    technicalImplementation:
      'Structured using Python and Flask with a lightweight SQLite relational database. Defined database schema through SQL migration scripts (schema.sql) for tables and relationships, and implemented data seeding scripts (seed.sql) to populate initial vehicle pricing, model specifications, and operational test data. Built backend routes for dynamic price generation based on configurable rules and designed role-based access separating public-facing views from internal pricing tools.',
    features: [
      'Automated pricing rules engine with conditions (demand level, stock quantity, competitor pricing)',
      'Smart alerts system (low stock notifications, competitor undercutting warnings, data aging flags)',
      'Rule-based price recommendation generator with supplier cost margin and category floor/ceiling controls',
      'Recommendation history with date-range filtering and audit trail',
      'Real-time metrics dashboard (total products, low stock count, average competitor price, average margin)',
      'Bulk rule application and individual rule toggles',
      'Role-based access control for staff vs. public views',
    ],
    technologies: ['Python', 'Flask', 'SQLite (Raw SQL)', 'SQL Schema Design & Database Seeding', 'HTML/CSS/JavaScript', 'REST APIs'],
    contribution:
      'Developed the Python Flask backend routes for the pricing rules engine and recommendation system, designed the relational database schema (schema.sql) and seed data (seed.sql) for vehicle pricing, and built the internal comparison console interface with smart alerts and historical tracking.',
    takeaways: [
      'Automated pricing rules eliminate manual calculation errors while allowing staff to maintain strategic control through configurable conditions.',
      'Smart alerts transform reactive pricing into proactive management by flagging competitor moves and inventory issues before they impact margins.',
      'Separating public product presentation from internal staff pricing views creates clean operational boundaries and prevents information leakage.',
      'Recommendation history with filtering is critical for accountability and understanding the impact of pricing rules over time.',
    ],
    visual: 'motors',
    images: [
      {
        src: '/assets/chinhon_landingpg.png',
        title: 'Landing page',
        caption: "Landing page for the Motors Intelligence Hub featuring Chin Hon Motor's animated logo and login prompt to access the internal pricing console.",
        alt: "Chin Hon Motors landing page",
      },
      {
        src: '/assets/chinhon_pricingrulesmanagement.png',
        title: 'Pricing rules management',
        caption: 'Automated pricing rules management interface showing configurable conditions and adjustments for demand levels, stock quantities, and competitor pricing strategies.',
        alt: 'Chin Hon pricing rules management interface',
      },
      {
        src: '/assets/chinhon_pricegeneration.png',
        title: 'Price generation',
        caption: 'Price generation dashboard with real-time metrics, smart alerts for low stock and competitor undercutting, and rule impact analysis for recommended pricing.',
        alt: 'Chin Hon price generation dashboard',
      },
      {
        src: '/assets/chinhon_pricinghistory.png',
        title: 'Pricing history',
        caption: 'Historical view of past pricing recommendations with filterable records, decision tracking, and activity logs for audit and review purposes.',
        alt: 'Chin Hon pricing history view',
      },
    ],
  },
  {
    id: 'education-cost-quality',
    number: '04',
    title: 'Education Cost vs Quality Dashboard',
    category: 'Data Visualisation & Analytics',
    filters: ['Data'],
    shortDescription:
      'Interactive Power BI analytics dashboard examining the relationship between educational expenditure and student academic outcomes.',
    overview:
      'Built a multi-page Power BI analytics dashboard analyzing education efficiency and outcomes across multiple countries, examining the relationship between government spending, schooling quantity, and actual learning quality.',
    whatIBuilt:
      'An interactive analytical dashboard with five distinct views: Education Overview (geographic spending map), Education Outcomes (comparative test scores), Education Trends (time-series analysis 2015-2021), Education Spending Analysis (correlation scatter plots), and Education Efficiency Summary (performance relative to expenditure).',
    technicalImplementation:
      'Applied Power Query for comprehensive data cleaning, deduplication, and transformation across multiple international education datasets. Authored DAX calculated metrics including Education Efficiency ratios (test scores relative to GDP spending percentage), Learning Adjusted Years, and harmonized test score trends. Implemented cross-filtering between visualizations and dynamic year-based slicers.',
    features: [
      'Multi-page dashboard with geographic, temporal, and comparative views',
      'Education efficiency rankings (outcomes vs. spending analysis)',
      'Time-series trend analysis showing spending vs. test score trajectories',
      'Scatter matrix correlating government spending with learning outcomes',
      'Interactive world map visualization of education expenditure by region',
      'Comparative bar charts for cross-country performance benchmarking',
      'Summary tables with key metrics: Test Scores, Expected Years, Learning Adjusted Years',
    ],
    technologies: ['Power BI', 'Power Query (M Language)', 'DAX', 'Data Modeling'],
    contribution:
      'Handled end-to-end data preparation in Power Query across multiple international datasets, authored custom DAX measures for efficiency calculations and trend analysis, and designed a multi-page visual narrative demonstrating that higher spending alone does not guarantee better learning outcomes.',
    takeaways: [
      'Rigorous data cleaning and normalization in Power Query is fundamental before building cross-country comparative analyses.',
      'Visual hierarchy across multiple dashboard pages helps stakeholders explore data at different levels of granularity (overview → trends → detailed analysis).',
      'Efficiency metrics (outcomes relative to investment) often tell a more actionable story than raw spending or performance numbers alone.',
      'Scatter plots with honest scaling reveal that policy effectiveness and system design can matter more than expenditure levels.',
    ],
    visual: 'education',
    images: [
      {
        src: '/assets/education_overview.png',
        title: 'Overview',
        caption: 'Global education spending overview with geographic map visualization showing government education expenditure as percentage of GDP across countries, plus comparative bar chart analysis.',
        alt: 'Education spending overview map and bar charts',
      },
      {
        src: '/assets/education_spending_analysis.png',
        title: 'Spending vs outcomes',
        caption: 'Interactive scatter plots analyzing the relationship between government education spending and learning outcomes across countries, comparing test scores with schooling quantity and quality metrics.',
        alt: 'Education spending vs outcomes scatter plots',
      },
      {
        src: '/assets/education_efficiency_summary.png',
        title: 'Efficiency summary',
        caption: 'Education efficiency rankings and performance summary showing countries achieving stronger learning outcomes relative to spending levels, highlighting the impact of policy effectiveness over expenditure alone.',
        alt: 'Education efficiency rankings and summary',
      },
    ],
  },
]

export const projectFilters: ProjectFilter[] = ['All', 'Development', 'Data', 'UX/UI']
