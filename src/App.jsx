import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const photoUrl = `${baseUrl}photo.jpg`;
const resumeUrl = `${baseUrl}Vineela_Nimmala_Resume.pdf`;

const profile = {
  name: "Vineela Nimmala",
  title: "Business Analyst | Data Analyst",
  location: "Hayward, California",
  phone: "940-703-8240",
  email: "nimmalavineela91@gmail.com",
  linkedin: "https://www.linkedin.com/in/vineela-n-901471300",
  github: "https://github.com/nimmalavineela91-hub",
};

const stats = [
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
    label: "Fraud Agent Productivity Increase",
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
      "Understand the business problem, stakeholder goals, current processes, data sources, risks, and expected outcomes.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Translate business needs into BRDs, FRDs, RTMs, user stories, acceptance criteria, business rules, and project scope.",
  },
  {
    number: "03",
    title: "Map",
    description:
      "Create process maps, source-to-target mappings, workflows, and clear traceability between business requirements and data.",
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Profile data, validate quality, write SQL, define KPIs, perform analytical modeling, and identify trends or business issues.",
  },
  {
    number: "05",
    title: "Visualize",
    description:
      "Design Tableau and Power BI dashboards that turn complex data into clear operational and executive-level insights.",
  },
  {
    number: "06",
    title: "Validate & Deliver",
    description:
      "Coordinate testing, UAT, defect resolution, stakeholder sign-off, deployment readiness, and adoption.",
  },
];

const experience = [
  {
    company: "Molina Healthcare",
    role: "Business Analyst & Data Analyst",
    duration: "Jan 2025 – Present",
    domain: "Healthcare • Data Analytics • Business Analysis",
    summary:
      "Supporting enterprise requirements, data discovery, data quality, analytical modeling, reporting, cloud data workflows, and executive decision support.",
    bullets: [
      "Facilitate cross-functional stakeholder workshops and create BRD, FRD, SRD, and RTM documentation with clear acceptance criteria.",
      "Lead enterprise-wide data discovery and profiling across CRM, billing, support, and finance systems.",
      "Design relational 3NF and dimensional star/snowflake models in Snowflake and BigQuery.",
      "Develop and optimize SQL, PySpark, and Spark SQL transformations for cleansing and enrichment.",
      "Partner with Data Engineers on Apache Airflow, AWS Glue, and dbt pipelines.",
      "Design executive Power BI and Tableau Cloud dashboards tracking CAC, CLV, churn, NPS, and revenue.",
      "Implement Row-Level Security and data access matrices across BI platforms.",
      "Build analytical prototypes using Python, R, and Stata for risk and scoring analysis.",
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
      "Tableau",
      "Power BI",
      "Python",
      "R",
      "JIRA",
      "Confluence",
    ],
  },
  {
    company: "Cognizant",
    role: "Business Analyst & Data Analyst",
    duration: "Sep 2022 – Aug 2023",
    domain: "Healthcare Claims • Data Integration • Analytics",
    summary:
      "Worked on healthcare claims data, requirements documentation, data mapping, dimensional modeling, governance, SQL analysis, cloud pipelines, and UAT.",
    bullets: [
      "Authored BRDs, FRDs, Source-to-Target Mappings, SOPs, and test evidence with end-to-end traceability.",
      "Mapped EDI 837/835, HL7, flat-file, Oracle, and mainframe data into curated analytical schemas.",
      "Developed PySpark pipelines on Databricks and Amazon EMR, reducing batch windows by more than 50%.",
      "Designed star schemas for claims, providers, procedures, and payments in Snowflake and Amazon Redshift.",
      "Established PHI governance using RLS, masked views, and role-based access controls.",
      "Created complex SQL, T-SQL, and CTE-based queries for normalization and payer rules.",
      "Coordinated clinician and business-user UAT through Azure DevOps.",
    ],
    tools: [
      "SQL",
      "T-SQL",
      "PySpark",
      "Databricks",
      "Amazon EMR",
      "Snowflake",
      "Redshift",
      "ADF",
      "AWS Glue",
      "Tableau",
      "Power BI",
      "Azure DevOps",
    ],
  },
  {
    company: "Wipro",
    role: "Business Analyst",
    duration: "Jul 2021 – Aug 2022",
    domain: "Risk • Fraud • Compliance",
    summary:
      "Supported business requirements, fraud-risk analysis, governance, cloud-data architecture, reporting, audit readiness, and operational monitoring.",
    bullets: [
      "Collaborated with Risk, Fraud, and Compliance stakeholders to document BRDs and FRDs.",
      "Conducted impact assessments for fraud and risk model thresholds.",
      "Built audit-ready lineage documentation aligned with NIST and PCI-DSS standards.",
      "Designed AWS S3 and Hadoop data-lake structures with raw and curated zones.",
      "Developed fraud heatmaps, chargeback trend analysis, and operational dashboards using Tableau and Power BI.",
      "Improved fraud-agent productivity by 15% through better analytical reporting.",
      "Implemented AWS CloudWatch and SQL monitoring, reducing MTTR by 32%.",
    ],
    tools: [
      "SQL",
      "Python",
      "R",
      "Spark",
      "Amazon EMR",
      "AWS S3",
      "AWS Glue",
      "Redshift",
      "CloudWatch",
      "Tableau",
      "Power BI",
      "JIRA",
    ],
  },
];

const skillGroups = [
  {
    title: "Business Analysis",
    skills: [
      "Requirements Elicitation",
      "BRD",
      "FRD",
      "RTM",
      "User Stories",
      "Acceptance Criteria",
      "Process Mapping",
      "BPMN",
      "Stakeholder Management",
      "GAP Analysis",
      "Agile / Scrum",
      "SDLC",
    ],
  },
  {
    title: "Data & SQL",
    skills: [
      "Advanced SQL",
      "CTEs",
      "Window Functions",
      "Data Profiling",
      "Data Quality",
      "Data Mapping",
      "Relational Modeling",
      "Dimensional Modeling",
      "ETL",
      "Reconciliation",
    ],
  },
  {
    title: "Analytics & BI",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "R",
      "Tableau",
      "Power BI",
      "DAX",
      "Statistical Analysis",
      "A/B Testing",
      "Data Storytelling",
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      "AWS S3",
      "AWS Glue",
      "Redshift",
      "Azure Data Factory",
      "Azure Synapse",
      "GCP BigQuery",
      "Snowflake",
      "SQL Server",
      "PostgreSQL",
    ],
  },
  {
    title: "Delivery & Collaboration",
    skills: [
      "JIRA",
      "Confluence",
      "Azure DevOps",
      "Git",
      "MS Visio",
      "UAT",
      "Defect Triage",
      "Testing",
      "Risk Management",
      "Project Delivery",
    ],
  },
];

const certifications = [
  {
    number: "01",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Generative AI",
  },
  {
    number: "02",
    title: "AI Fluency: Frameworks and Foundations",
    issuer: "Anthropic",
    category: "AI Fluency",
  },
  {
    number: "03",
    title: "Cisco Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "Data Analytics",
  },
  {
    number: "04",
    title: "Google AI Essentials",
    issuer: "Google",
    category: "Applied AI",
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a href="#home" className="brand">
          <span className="brand-icon">VN</span>

          <span className="brand-text">
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
          className="header-button"
        >
          Resume
        </a>
      </header>

      <main>
        <section
          id="home"
          className="hero page-width"
        >
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              Open to Business Analyst & Data Analyst opportunities
            </div>

            <p className="hero-label">
              BUSINESS ANALYSIS • DATA ANALYTICS • DATA-DRIVEN DELIVERY
            </p>

            <h1>
              Turning complex business needs into
              <span>
                {" "}
                actionable data solutions.
              </span>
            </h1>

            <p className="hero-description">
              Business Analyst and Data Analyst with 5+ years of experience
              translating complex business requirements into analytical
              solutions — from requirements gathering and data mapping through
              testing, deployment, reporting, and adoption.
            </p>

            <div className="hero-buttons">
              <a
                href="#process"
                className="button primary-button"
              >
                Explore My Process
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="button secondary-button"
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="button secondary-button"
              >
                Download Resume
              </a>
            </div>

            <div className="contact-row">
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
            <div className="circle circle-large"></div>
            <div className="circle circle-small"></div>

            <article className="profile-card">
              <div className="photo-wrapper">
                <img
                  src={photoUrl}
                  alt="Vineela Nimmala"
                  className="profile-photo"
                />
              </div>

              <div className="profile-info">
                <p>Professional Profile</p>
                <h2>{profile.name}</h2>
                <h3>{profile.title}</h3>

                <div className="profile-actions">
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

        <section className="stats page-width">
          {stats.map((stat) => (
            <article
              className="stat-card"
              key={stat.label}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section
          id="about"
          className="section page-width"
        >
          <SectionHeader
            eyebrow="ABOUT"
            title="Business understanding supported by data and analytical thinking."
            description="My experience connects business requirements, stakeholder needs, data quality, analytics, reporting, testing, and project delivery."
          />

          <div className="about-grid">
            <article className="info-card">
              <span>01</span>

              <h3>Business Analysis</h3>

              <p>
                Requirements elicitation, BRD/FRD/RTM development, user
                stories, process mapping, stakeholder management, GAP analysis,
                and Agile delivery.
              </p>
            </article>

            <article className="info-card">
              <span>02</span>

              <h3>Data Analytics</h3>

              <p>
                Advanced SQL, Python, R, data profiling, data quality,
                dimensional modeling, ETL workflows, KPI analysis, and
                analytical validation.
              </p>
            </article>

            <article className="info-card">
              <span>03</span>

              <h3>BI & Decision Support</h3>

              <p>
                Tableau and Power BI dashboards, executive reporting,
                data visualization, KPI monitoring, and clear business
                storytelling.
              </p>
            </article>
          </div>
        </section>

        <section
          id="process"
          className="section page-width"
        >
          <SectionHeader
            eyebrow="MY FLOW PROCESS"
            title="From business requirement to measurable outcome."
            description="A structured end-to-end view of how I approach business and data initiatives."
          />

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article
                className="process-card"
                key={step.number}
              >
                <div className="process-header">
                  <span className="process-number">
                    {step.number}
                  </span>

                  {index !== processSteps.length - 1 && (
                    <span className="flow-arrow">
                      →
                    </span>
                  )}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="section page-width"
        >
          <SectionHeader
            eyebrow="PROFESSIONAL EXPERIENCE"
            title="Career journey across healthcare, analytics, risk, fraud, and compliance."
            description="A recruiter-friendly timeline based on my professional experience."
          />

          <div className="timeline">
            {experience.map((job, index) => (
              <article
                className="timeline-item"
                key={job.company}
              >
                <div className="timeline-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="job-card">
                  <div className="job-header">
                    <div>
                      <p className="job-domain">
                        {job.domain}
                      </p>

                      <h3>{job.company}</h3>
                      <h4>{job.role}</h4>
                    </div>

                    <span className="job-duration">
                      {job.duration}
                    </span>
                  </div>

                  <p className="job-summary">
                    {job.summary}
                  </p>

                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="tool-tags">
                    {job.tools.map((tool) => (
                      <span key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="section page-width"
        >
          <SectionHeader
            eyebrow="CORE SKILLS"
            title="Business, data, analytics, cloud, and delivery capabilities."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article
                className="skill-card"
                key={group.title}
              >
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="section page-width"
        >
          <SectionHeader
            eyebrow="CERTIFICATIONS"
            title="Continuous learning across AI and data analytics."
            description="Certifications supporting my analytical, AI, and business problem-solving skills."
          />

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article
                className="cert-card"
                key={cert.title}
              >
                <span className="cert-number">
                  {cert.number}
                </span>

                <p>{cert.category}</p>

                <h3>{cert.title}</h3>

                <h4>{cert.issuer}</h4>
              </article>
            ))}
          </div>
        </section>

        <section className="section page-width">
          <article className="education-card">
            <div>
              <p className="education-label">
                EDUCATION
              </p>

              <h2>
                Master of Science in Information Systems and Technology
              </h2>

              <h3>
                University of North Texas
              </h3>

              <span>
                Denton, Texas • 2025
              </span>
            </div>

            <div className="education-symbol">
              MS
            </div>
          </article>
        </section>

        <section
          id="contact"
          className="section page-width"
        >
          <article className="contact-card">
            <div>
              <p className="contact-label">
                LET&apos;S CONNECT
              </p>

              <h2>
                Ready to transform business needs into meaningful analytical solutions.
              </h2>

              <p>
                Open to Business Analyst, Data Analyst, Business Systems
                Analyst, BI Analyst, Healthcare Analyst, and analytics-focused
                opportunities.
              </p>
            </div>

            <div className="contact-buttons">
              <a
                href={`mailto:${profile.email}`}
                className="button primary-button"
              >
                Email Me
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button secondary-button"
              >
                LinkedIn
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="button secondary-button"
              >
                Open Resume
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Vineela Nimmala • Business Analyst • Data Analyst
      </footer>
    </div>
  );
}

export default App;