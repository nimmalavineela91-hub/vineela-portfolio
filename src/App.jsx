import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const photoUrl = `${baseUrl}photo.jpg`;
const resumeUrl = `${baseUrl}Vineela_Nimmala_Resume.pdf`;

const profile = {
  name: "Vineela Nimmala",
  title: "Business Analyst | Data Analyst | Project & Process Improvement",
  location: "Hayward, California",
  phone: "940-703-8240",
  email: "nimmalavineela91@gmail.com",
  linkedin: "https://www.linkedin.com/in/vineela-n-901471300",
  github: "https://github.com/nimmalavineela91-hub",
};

const metrics = [
  {
    value: "5+",
    label: "Years of Experience",
  },
  {
    value: "50%+",
    label: "Batch Processing Improvement",
  },
  {
    value: "15%",
    label: "Productivity Improvement",
  },
  {
    value: "32%",
    label: "MTTR Reduction",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business objective, stakeholders, users, current challenges, risks, dependencies, and expected outcomes.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Translate stakeholder needs into BRDs, FRDs, user stories, acceptance criteria, business rules, and traceability artifacts.",
  },
  {
    number: "03",
    title: "Map",
    description:
      "Create As-Is and To-Be process flows, perform GAP analysis, document workflows, and identify process-improvement opportunities.",
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Profile data, validate business rules, create source-to-target mappings, define KPIs, and identify trends or data-quality issues.",
  },
  {
    number: "05",
    title: "Visualize",
    description:
      "Design Power BI and Tableau dashboards that communicate performance, operational trends, risks, and executive-level insights.",
  },
  {
    number: "06",
    title: "Validate & Deliver",
    description:
      "Coordinate testing, UAT, defect triage, sign-off, deployment readiness, stakeholder communication, and measurable outcomes.",
  },
];

const experiences = [
  {
    company: "Molina Healthcare",
    role: "Business Analyst & Data Analyst",
    duration: "Jan 2025 – Present",
    domain: "Healthcare Analytics & Process Improvement",
    overview:
      "Supporting requirements analysis, process improvement, enterprise data discovery, KPI reporting, dashboard development, data quality, UAT, and cross-functional Agile delivery.",
    highlights: [
      "Facilitate stakeholder workshops and develop BRD, FRD, SRD, and RTM documentation with clear acceptance criteria.",
      "Create As-Is and To-Be process flows, perform GAP analysis, and validate future-state designs with business leaders.",
      "Translate business and functional requirements into technical user stories in Jira.",
      "Manage communication across business, product, engineering, QA, and data teams.",
      "Lead enterprise data profiling across CRM, billing, support, and finance systems.",
      "Design data-quality controls for completeness, uniqueness, referential integrity, validity, and anomaly detection.",
      "Develop source-to-target mappings and data contracts for relational and cloud platforms.",
      "Build Power BI and Tableau dashboards for CAC, CLV, churn, NPS, revenue, and operational-efficiency KPIs.",
      "Coordinate data validation, analytical testing, UAT, defect resolution, and deployment readiness.",
    ],
    tools: [
      "SQL Server",
      "PostgreSQL",
      "Snowflake",
      "BigQuery",
      "Spark",
      "Airflow",
      "AWS Glue",
      "dbt",
      "Power BI",
      "Tableau",
      "Jira",
      "Confluence",
    ],
  },
  {
    company: "Cognizant",
    role: "Business Analyst & Data Analyst",
    duration: "Sep 2022 – Aug 2023",
    domain: "Healthcare Claims & Data Analytics",
    overview:
      "Worked with clinical operations, medical coding, revenue-cycle, data-engineering, and business teams on healthcare requirements, mappings, analytical schemas, reporting, and UAT.",
    highlights: [
      "Captured requirements and documented healthcare workflows and operational KPIs.",
      "Authored BRDs, FRDs, source-to-target mappings, SOPs, and test evidence.",
      "Coordinated clinician and business-user UAT using Azure DevOps.",
      "Mapped EDI, HL7, flat-file, Oracle, and mainframe data into analytical schemas.",
      "Standardized claims and encounter data using SQL, SSIS, and Azure Data Factory.",
      "Supported Change Data Capture and SCD Type 2 strategies for provider, member, and payer data.",
      "Developed PySpark pipelines on Databricks and Amazon EMR, reducing batch-processing windows by more than 50%.",
      "Designed star schemas in Snowflake and Amazon Redshift.",
      "Performed exploratory data analysis using Python and Pandas.",
    ],
    tools: [
      "SQL",
      "Python",
      "Pandas",
      "PySpark",
      "Snowflake",
      "Redshift",
      "Databricks",
      "Azure Data Factory",
      "Tableau",
      "Power BI",
      "Azure DevOps",
    ],
  },
  {
    company: "Wipro",
    role: "Business Analyst",
    duration: "Jul 2021 – Aug 2022",
    domain: "Risk, Fraud & Compliance",
    overview:
      "Supported financial risk, fraud, compliance, governance, audit-readiness, cloud-data, reporting, incident management, and project-coordination initiatives.",
    highlights: [
      "Collaborated with Risk, Fraud, and Compliance stakeholders to develop BRDs and FRDs.",
      "Facilitated governance forums and steering committees.",
      "Managed project plans, risks, issues, dependencies, and executive status reporting.",
      "Translated fraud rules and thresholds into data-mapping and lineage specifications.",
      "Maintained traceability across source systems, transformations, analytical models, and dashboards.",
      "Developed audit-ready governance artifacts aligned with NIST and PCI-DSS controls.",
      "Designed AWS S3 and Hadoop data-lake structures.",
      "Built fraud heatmaps, chargeback analysis, and KPI dashboards using Tableau and Power BI.",
      "Implemented AWS CloudWatch and SQL monitoring, reducing MTTR by 32%.",
    ],
    tools: [
      "SQL",
      "Python",
      "Spark",
      "AWS S3",
      "AWS Glue",
      "Redshift",
      "CloudWatch",
      "Tableau",
      "Power BI",
      "Jira",
    ],
  },
];

const skillGroups = [
  {
    title: "Business Analysis",
    description:
      "Requirements, business processes, stakeholder collaboration, documentation, and delivery alignment.",
    skills: [
      "Requirements Gathering",
      "BRD",
      "FRD",
      "SRS",
      "RTM",
      "User Stories",
      "Acceptance Criteria",
      "Process Mapping",
      "As-Is / To-Be",
      "GAP Analysis",
      "RACI",
      "RAID Logs",
      "SOPs",
    ],
  },
  {
    title: "Project & Process",
    description:
      "Project coordination, workflow improvement, risks, issues, timelines, and executive communication.",
    skills: [
      "Project Management",
      "Status Reporting",
      "Risk Analysis",
      "Root Cause Analysis",
      "Impact Analysis",
      "Timeline Coordination",
      "Resource Coordination",
      "Configuration Management",
      "Change Management",
      "Stakeholder Management",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "Data extraction, profiling, validation, quality, mapping, reconciliation, and analytical preparation.",
    skills: [
      "Advanced SQL",
      "SQL Server",
      "PostgreSQL",
      "Oracle",
      "Python",
      "R",
      "Stata",
      "Pandas",
      "NumPy",
      "PySpark",
      "Data Profiling",
      "Data Quality",
      "Reconciliation",
    ],
  },
  {
    title: "BI & Visualization",
    description:
      "KPI development, executive dashboards, analytical storytelling, and reporting solutions.",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "RLS",
      "Tableau",
      "Calculated Fields",
      "LOD Expressions",
      "Parameters",
      "Cognos Analytics",
      "SAP BusinessObjects",
    ],
  },
  {
    title: "Microsoft & Productivity",
    description:
      "Advanced Excel and productivity tools supporting analysis, documentation, and reporting.",
    skills: [
      "Advanced Excel",
      "PivotTables",
      "VLOOKUP",
      "XLOOKUP",
      "VBA",
      "Macros",
      "Advanced Formulas",
      "Microsoft Word",
      "PowerPoint",
      "MS Access",
      "Visio",
      "Lucidchart",
    ],
  },
  {
    title: "Cloud & Data Platforms",
    description:
      "Enterprise cloud-data platforms, pipelines, warehouses, and analytical ecosystems.",
    skills: [
      "AWS S3",
      "AWS Glue",
      "Redshift",
      "Azure Data Lake",
      "Azure Data Factory",
      "Synapse",
      "Databricks",
      "Snowflake",
      "BigQuery",
      "Hadoop",
      "Spark",
    ],
  },
  {
    title: "Testing & Delivery",
    description:
      "End-to-end validation, business acceptance, defect management, and Agile delivery.",
    skills: [
      "Test Plans",
      "Test Cases",
      "Test Scripts",
      "UAT",
      "Regression Testing",
      "Integration Testing",
      "Smoke Testing",
      "Functional Testing",
      "Database Testing",
      "Defect Triage",
      "Azure DevOps",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Methodologies",
    description:
      "Structured delivery approaches used across business, data, reporting, and process initiatives.",
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "SAFe",
      "Waterfall",
      "SDLC",
      "BPMN 2.0",
      "UML",
      "Requirements Traceability",
    ],
  },
];

const certifications = [
  {
    number: "01",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Generative AI",
    description:
      "Foundational understanding of Claude capabilities, practical prompting, responsible AI use, and business applications.",
  },
  {
    number: "02",
    title: "AI Fluency: Frameworks and Foundations",
    issuer: "Anthropic",
    category: "AI Fluency",
    description:
      "Frameworks for providing context, delegating work to AI, evaluating outputs, and collaborating responsibly with AI systems.",
  },
  {
    number: "03",
    title: "Cisco Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "Data Analytics",
    description:
      "Core knowledge in data preparation, transformation, analysis, visualization, and data-driven decision-making.",
  },
  {
    number: "04",
    title: "Google AI Essentials",
    issuer: "Google",
    category: "Applied AI",
    description:
      "Practical use of generative AI for productivity, analytical thinking, prompting, responsible use, and workplace problem-solving.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio-app">
      <header className="site-header">
        <a href="#home" className="brand">
          <span className="brand-mark">VN</span>

          <span className="brand-copy">
            <strong>Vineela Nimmala</strong>
            <small>Business Analyst & Data Analyst</small>
          </span>
        </a>

        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="header-resume"
        >
          View Resume
        </a>
      </header>

      <main>
        <section id="home" className="hero section-container">
          <div className="hero-copy">
            <div className="availability-badge">
              <span className="availability-dot" />
              Open to Business Analyst and Data Analyst opportunities
            </div>

            <p className="hero-eyebrow">
              BUSINESS ANALYSIS • DATA ANALYTICS • PROCESS IMPROVEMENT
            </p>

            <h1>
              Turning business challenges into
              <span> clear processes and measurable insights.</span>
            </h1>

            <p className="hero-description">
              Business Analyst and Data Analyst with 5+ years of experience in
              requirements analysis, KPI development, business-process
              improvement, data management, project coordination, reporting,
              visualization, data quality, UAT, and enterprise analytics.
            </p>

            <div className="hero-actions">
              <a href="#process" className="button button-primary">
                Explore My Process
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Open Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="button button-secondary"
              >
                Download PDF
              </a>
            </div>

            <div className="hero-contact">
              <span>{profile.location}</span>

              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>

              <a href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="hero-profile">
            <div className="profile-decoration profile-decoration-one" />
            <div className="profile-decoration profile-decoration-two" />

            <article className="profile-card">
              <div className="profile-image-area">
                <img
                  src={photoUrl}
                  alt="Vineela Nimmala"
                  className="profile-image"
                />
              </div>

              <div className="profile-details">
                <p>Professional Profile</p>
                <h2>{profile.name}</h2>
                <h3>{profile.title}</h3>

                <div className="profile-links">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="metrics section-container">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="content-section section-container">
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Business understanding supported by data, structure, and collaboration."
            description="My work connects stakeholders, requirements, processes, data, reporting, testing, and delivery into a clear end-to-end approach."
          />

          <div className="about-grid">
            <article className="information-card">
              <span className="information-number">01</span>
              <h3>Business Analysis</h3>
              <p>
                Requirements elicitation, business documentation, process
                mapping, user stories, acceptance criteria, GAP analysis,
                traceability, stakeholder communication, and project
                coordination.
              </p>
            </article>

            <article className="information-card">
              <span className="information-number">02</span>
              <h3>Data Analytics</h3>
              <p>
                SQL analysis, data profiling, source-to-target mapping, data
                quality, validation, reconciliation, KPI definition,
                analytical preparation, and executive reporting.
              </p>
            </article>

            <article className="information-card">
              <span className="information-number">03</span>
              <h3>Process Improvement</h3>
              <p>
                As-Is and To-Be analysis, workflow improvement, UAT, testing,
                defect triage, risk management, executive communication, and
                deployment-readiness support.
              </p>
            </article>
          </div>
        </section>

        <section id="process" className="content-section section-container">
          <SectionHeading
            eyebrow="FLOW PROCESS"
            title="From business need to measurable outcome."
            description="A six-stage flow showing how I approach business analysis, data analysis, reporting, testing, and delivery."
          />

          <div className="process-flow">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.number}>
                <div className="process-top">
                  <span className="process-number">{step.number}</span>

                  {index < processSteps.length - 1 ? (
                    <span className="process-connector">→</span>
                  ) : null}
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section section-container">
          <SectionHeading
            eyebrow="PROFESSIONAL EXPERIENCE"
            title="Career journey across healthcare, analytics, risk, fraud, and compliance."
            description="Experience is presented as a clear timeline for quick recruiter and hiring-manager review."
          />

          <div className="career-timeline">
            {experiences.map((experience, index) => (
              <article
                className="career-entry"
                key={`${experience.company}-${experience.duration}`}
              >
                <div className="career-marker">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <p className="experience-domain">
                        {experience.domain}
                      </p>

                      <h3>{experience.company}</h3>
                      <h4>{experience.role}</h4>
                    </div>

                    <span className="experience-duration">
                      {experience.duration}
                    </span>
                  </div>

                  <p className="experience-overview">
                    {experience.overview}
                  </p>

                  <ul className="experience-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="tool-list">
                    {experience.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section section-container">
          <SectionHeading
            eyebrow="CORE CAPABILITIES"
            title="Skills across business, data, reporting, cloud, testing, and delivery."
            description="Grouped for simple recruiter scanning and a clear understanding of my professional profile."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="content-section section-container"
        >
          <SectionHeading
            eyebrow="CERTIFICATIONS"
            title="Continuous learning across AI and data analytics."
            description="Professional certifications supporting responsible AI use, analytical thinking, and data-driven decision-making."
          />

          <div className="certification-grid">
            {certifications.map((certification) => (
              <article
                className="certification-card"
                key={certification.title}
              >
                <span className="certification-number">
                  {certification.number}
                </span>

                <p className="certification-category">
                  {certification.category}
                </p>

                <h3>{certification.title}</h3>
                <h4>{certification.issuer}</h4>

                <p className="certification-description">
                  {certification.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-container">
          <article className="education-card">
            <div>
              <p className="education-label">EDUCATION</p>

              <h2>
                Master of Science in Information Systems and Technology
              </h2>

              <h3>University of North Texas, Denton, Texas</h3>

              <span>Graduated 2025</span>
            </div>

            <div className="education-mark">MS</div>
          </article>
        </section>

        <section id="contact" className="content-section section-container">
          <article className="contact-card">
            <div>
              <p className="contact-label">LET&apos;S CONNECT</p>

              <h2>
                Ready to support business analysis, data analytics, reporting,
                and process-improvement initiatives.
              </h2>

              <p>
                Open to Business Analyst, Data Analyst, Business Systems
                Analyst, BI Analyst, Healthcare Analyst, reporting, and
                project-coordination opportunities.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href={`mailto:${profile.email}`}
                className="button button-primary"
              >
                Email Me
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                LinkedIn
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Open Resume
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Vineela Nimmala • Business Analysis • Data
        Analytics • Project & Process Improvement
      </footer>
    </div>
  );
}

export default App;