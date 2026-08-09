import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const photoUrl = `${baseUrl}photo.jpg`;
const resumeUrl = `${baseUrl}Vineela_Nimmala_Resume.pdf`;

const profile = {
  name: "Vineela Nimmala",
  title: "Business Analyst | Data Analyst",
  tagline: "Business Analysis • Data Analytics • Process Improvement",
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
      "Understand business objectives, stakeholders, pain points, current processes, risks, data sources, and expected outcomes.",
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
      "Create process maps and source-to-target mappings that connect business requirements with data and technical delivery.",
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Profile data, validate quality, write SQL, define KPIs, build analytical models, and identify trends or business issues.",
  },
  {
    number: "05",
    title: "Visualize",
    description:
      "Build Tableau and Power BI dashboards that transform complex data into clear operational and executive insights.",
  },
  {
    number: "06",
    title: "Validate & Deliver",
    description:
      "Coordinate testing, UAT, defect resolution, stakeholder sign-off, deployment readiness, and solution adoption.",
  },
];

const experiences = [
  {
    company: "Molina Healthcare",
    role: "Business Analyst & Data Analyst",
    duration: "Jan 2025 – Present",
    domain: "Healthcare • Enterprise Analytics",
    summary:
      "Supporting enterprise requirements, data discovery, data quality, analytical modeling, reporting, cloud data workflows, and executive decision support.",
    bullets: [
      "Facilitate cross-functional stakeholder workshops and produce BRD, FRD, SRD, and RTM artifacts with clear acceptance criteria and traceability.",
      "Lead enterprise-wide data discovery and profiling across CRM, billing, support, and finance systems.",
      "Design scalable relational 3NF and dimensional star/snowflake models in Snowflake and BigQuery.",
      "Develop and optimize SQL, PySpark, and Spark SQL transformations for data cleansing and enrichment.",
      "Partner with Data Engineers to orchestrate Apache Airflow, AWS Glue, and dbt pipelines.",
      "Design executive dashboards using Power BI and Tableau Cloud for CAC, CLV, churn, NPS, and revenue.",
      "Implement Row-Level Security and data access matrices across BI platforms.",
      "Build analytical prototypes using Python, R, and Stata for financial-risk analysis.",
    ],
    tools: [
      "SQL Server",
      "PostgreSQL",
      "Snowflake",
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
    domain: "Healthcare Claims • Data Analytics",
    summary:
      "Worked across healthcare requirements, data mappings, dimensional models, cloud pipelines, SQL analysis, governance, reporting, and UAT.",
    bullets: [
      "Authored BRDs, FRDs, Source-to-Target Mappings, SOPs, and test evidence with full traceability.",
      "Mapped EDI 837/835, HL7, flat files, Oracle, and mainframe data into curated analytical schemas.",
      "Developed PySpark pipelines on Databricks and Amazon EMR, reducing batch processing windows by more than 50%.",
      "Designed star schemas for claims, providers, procedures, and payments in Snowflake and Amazon Redshift.",
      "Established PHI governance using Row-Level Security, masked views, and role-based access controls.",
      "Created complex SQL, T-SQL, and CTE-based queries for code normalization and payer rules.",
      "Coordinated clinician and business-user UAT using Azure DevOps.",
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
      "Supported fraud-risk requirements, regulatory controls, data lineage, cloud-data architecture, dashboards, and operational monitoring.",
    bullets: [
      "Collaborated with Risk, Fraud, and Compliance stakeholders to create BRDs and FRDs.",
      "Conducted impact assessments for fraud and risk-model thresholds.",
      "Built audit-ready lineage documentation aligned with NIST and PCI-DSS standards.",
      "Designed AWS S3 and Hadoop data-lake architectures using raw and curated zones.",
      "Developed fraud heatmaps, chargeback trend analysis, and operational dashboards using Tableau and Power BI.",
      "Improved fraud-agent productivity by 15%.",
      "Implemented AWS CloudWatch and custom SQL monitoring, reducing MTTR by 32%.",
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
      "Dimensional Modeling",
      "Relational Modeling",
      "Data Profiling",
      "Data Quality",
      "Data Mapping",
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
      "Data Visualization",
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
    title: "Tools & Delivery",
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

function SectionHeader({ label, title, description }) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>

      <h2>{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">VN</span>

          <span className="brand-copy">
            <strong>Vineela Nimmala</strong>
            <small>Business Analyst • Data Analyst</small>
          </span>
        </a>

        <nav>
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
          className="resume-button"
        >
          Resume
        </a>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="availability">
              <span></span>
              Open to Business Analyst & Data Analyst opportunities
            </div>

            <p className="hero-label">{profile.tagline}</p>

            <h1>
              Turning complex business needs into
              <em> actionable data solutions.</em>
            </h1>

            <p className="hero-description">
              Business Analyst and Data Analyst with 5+ years of
              experience translating complex business needs into actionable
              solutions — from requirements gathering and data mapping through
              testing, deployment, analytics, reporting, and adoption.
            </p>

            <div className="hero-actions">
              <a href="#process" className="btn btn-primary">
                Explore My Process
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="btn btn-secondary"
              >
                Download Resume
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
            <div className="decor-ring decor-ring-large"></div>
            <div className="decor-ring decor-ring-small"></div>

            <article className="profile-card">
              <div className="profile-image-area">
                <img
                  src={photoUrl}
                  alt="Vineela Nimmala"
                  className="profile-image"
                />
              </div>

              <div className="profile-content">
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

        <section className="metrics container">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="section container">
          <SectionHeader
            label="ABOUT ME"
            title="Business understanding supported by data, structure, and collaboration."
            description="My experience connects business requirements, stakeholder needs, data quality, analytics, reporting, testing, and project delivery."
          />

          <div className="three-column-grid">
            <article className="feature-card">
              <span className="feature-number">01</span>

              <h3>Business Analysis</h3>

              <p>
                Requirements elicitation, BRD/FRD/RTM creation,
                user stories, acceptance criteria, stakeholder management,
                GAP analysis, process mapping, and Agile delivery.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-number">02</span>

              <h3>Data Analytics</h3>

              <p>
                Advanced SQL, Python, R, data profiling, data quality,
                dimensional modeling, ETL, KPI development, and analytical
                validation.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-number">03</span>

              <h3>Business Intelligence</h3>

              <p>
                Tableau and Power BI dashboards, executive reporting,
                data visualization, KPI monitoring, and business-focused
                data storytelling.
              </p>
            </article>
          </div>
        </section>

        <section id="process" className="section container">
          <SectionHeader
            label="MY FLOW PROCESS"
            title="From business problem to measurable outcome."
            description="A clear six-step view of how I approach business and data initiatives."
          />

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.number}>
                <div className="process-top">
                  <span className="process-number">{step.number}</span>

                  {index < processSteps.length - 1 && (
                    <span className="process-arrow">→</span>
                  )}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHeader
            label="PROFESSIONAL EXPERIENCE"
            title="Career journey across healthcare, analytics, risk, fraud, and compliance."
            description="A recruiter-friendly timeline based directly on my professional experience."
          />

          <div className="timeline">
            {experiences.map((job, index) => (
              <article
                className="timeline-item"
                key={`${job.company}-${job.duration}`}
              >
                <div className="timeline-marker">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <p className="domain">{job.domain}</p>

                      <h3>{job.company}</h3>

                      <h4>{job.role}</h4>
                    </div>

                    <span className="duration">
                      {job.duration}
                    </span>
                  </div>

                  <p className="experience-summary">
                    {job.summary}
                  </p>

                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {job.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionHeader
            label="CORE SKILLS"
            title="Business, data, analytics, cloud, and delivery capabilities."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section container">
          <SectionHeader
            label="CERTIFICATIONS"
            title="Continuous learning across AI and data analytics."
            description="Professional certifications supporting AI fluency, analytical thinking, and data-driven problem solving."
          />

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.title}>
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

        <section className="section container">
          <article className="education-card">
            <div>
              <p className="education-label">EDUCATION</p>

              <h2>
                Master of Science in Information Systems and Technology
              </h2>

              <h3>University of North Texas</h3>

              <span>Denton, Texas • 2025</span>
            </div>

            <div className="education-circle">MS</div>
          </article>
        </section>

        <section id="contact" className="section container">
          <article className="contact-card">
            <div>
              <p className="contact-label">LET&apos;S CONNECT</p>

              <h2>
                Ready to turn business challenges into clear,
                data-driven solutions.
              </h2>

              <p className="contact-description">
                Open to Business Analyst, Data Analyst, Business Systems
                Analyst, BI Analyst, Healthcare Analyst, and
                analytics-focused opportunities.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-primary"
              >
                Email Me
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
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