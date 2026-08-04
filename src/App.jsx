import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const photoUrl = `${baseUrl}photo.jpg`;
const resumeUrl = `${baseUrl}Vineela_Nimmala_Resume.pdf`;

const profile = {
  name: "Vineela Nimmala",
  title: "Business Analyst | Data Analyst | Project & Process Improvement",
  location: "Hayward, California",
  email: "nimmalavineela91@gmail.com",
  phone: "940-703-8240",
  linkedin: "https://www.linkedin.com/in/vineela-n-901471300",
  github: "https://github.com/nimmalavineela91-hub",
};

const statistics = [
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

const processFlow = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand business objectives, stakeholders, users, problems, constraints, risks, and expected outcomes.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Convert business needs into BRDs, FRDs, user stories, acceptance criteria, process flows, and traceability artifacts.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Perform data profiling, GAP analysis, source-to-target mapping, KPI definition, reconciliation, and root-cause analysis.",
  },
  {
    number: "04",
    title: "Visualize",
    description:
      "Create Power BI and Tableau dashboards that communicate operational trends, performance, risks, and business insights.",
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Coordinate test planning, data validation, UAT, defect triage, retesting, and formal business sign-off.",
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "Present executive insights, support implementation, improve processes, and measure business value.",
  },
];

const experiences = [
  {
    company: "Molina Healthcare",
    role: "Business Analyst & Data Analyst",
    duration: "Jan 2025 – Present",
    domain: "Healthcare Analytics & Process Improvement",
    highlights: [
      "Facilitate cross-functional stakeholder workshops and produce BRD, FRD, SRD, and RTM documentation.",
      "Create As-Is and To-Be process flows, conduct GAP analysis, and validate future-state designs.",
      "Translate business and functional requirements into Jira user stories with acceptance criteria.",
      "Lead enterprise data discovery and profiling across CRM, billing, support, and finance systems.",
      "Design data-quality controls covering completeness, uniqueness, validity, integrity, and anomaly detection.",
      "Develop source-to-target mappings and data contracts for relational and cloud data platforms.",
      "Build Power BI and Tableau dashboards tracking CAC, CLV, churn, NPS, revenue, and operational efficiency.",
      "Coordinate data validation, analytical testing, UAT, defect resolution, and deployment readiness.",
    ],
    tools: [
      "SQL Server",
      "PostgreSQL",
      "Snowflake",
      "BigQuery",
      "Spark",
      "Airflow",
      "Tableau",
      "Power BI",
      "Jira",
      "Confluence",
    ],
  },
  {
    company: "Cognizant",
    role: "Business Analyst & Data Analyst",
    duration: "Sep 2022 – Aug 2023",
    domain: "Healthcare Claims & Data Analytics",
    highlights: [
      "Partnered with clinical operations, medical coding, and revenue-cycle stakeholders.",
      "Authored BRDs, FRDs, source-to-target mappings, SOPs, and test evidence.",
      "Mapped EDI, HL7, flat-file, Oracle, and mainframe data into analytical schemas.",
      "Coordinated clinician and business-user validation during UAT using Azure DevOps.",
      "Standardized claims and encounter data using SQL, SSIS, and Azure Data Factory.",
      "Supported Change Data Capture and SCD Type 2 strategies for provider, member, and payer data.",
      "Developed PySpark pipelines on Databricks and Amazon EMR, reducing batch processing by more than 50%.",
      "Designed star schemas in Snowflake and Amazon Redshift for operational reporting.",
    ],
    tools: [
      "SQL",
      "Python",
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
    domain: "Financial Risk, Fraud & Compliance",
    highlights: [
      "Collaborated with Risk, Fraud, and Compliance stakeholders to document BRDs and FRDs.",
      "Facilitated governance forums and managed project risks, issues, dependencies, and executive status reporting.",
      "Translated fraud rules and thresholds into detailed data-mapping and lineage specifications.",
      "Maintained traceability across source systems, transformations, analytical models, and dashboards.",
      "Created audit-ready governance artifacts aligned with NIST and PCI-DSS controls.",
      "Designed AWS S3 and Hadoop data-lake structures for standardized ingestion.",
      "Built fraud heatmaps, chargeback trends, and KPI dashboards using Tableau and Power BI.",
      "Implemented AWS CloudWatch and SQL alerting, reducing MTTR by 32%.",
    ],
    tools: [
      "SQL",
      "Python",
      "Spark",
      "AWS S3",
      "Glue",
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
    skills: [
      "Requirements Gathering",
      "BRD",
      "FRD",
      "SRS",
      "RTM",
      "User Stories",
      "Acceptance Criteria",
      "Process Mapping",
      "GAP Analysis",
      "RACI",
      "RAID Logs",
      "Stakeholder Management",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Advanced SQL",
      "Python",
      "R",
      "PySpark",
      "Data Profiling",
      "Data Quality",
      "Data Validation",
      "Reconciliation",
      "Source-to-Target Mapping",
      "KPI Development",
    ],
  },
  {
    title: "Business Intelligence",
    skills: [
      "Power BI",
      "Tableau",
      "DAX",
      "Power Query",
      "Data Modeling",
      "RLS",
      "Calculated Fields",
      "LOD Expressions",
      "Dashboard Development",
      "Executive Reporting",
    ],
  },
  {
    title: "Cloud & Platforms",
    skills: [
      "AWS S3",
      "AWS Glue",
      "Redshift",
      "Azure Data Factory",
      "Synapse",
      "Databricks",
      "Snowflake",
      "BigQuery",
      "PostgreSQL",
      "SQL Server",
    ],
  },
  {
    title: "Testing & Delivery",
    skills: [
      "UAT",
      "Test Planning",
      "Test Cases",
      "Regression Testing",
      "Functional Testing",
      "Database Testing",
      "Defect Triage",
      "Jira",
      "Azure DevOps",
      "Confluence",
    ],
  },
  {
    title: "AI & Productivity",
    skills: [
      "Claude",
      "AI Frameworks",
      "Prompt Engineering",
      "AI-Assisted Requirements",
      "AI Documentation",
      "Human Review",
      "Responsible AI",
    ],
  },
];

const certifications = [
  {
    title: "Claude 101",
    provider: "Anthropic",
    category: "Generative AI",
  },
  {
    title: "AI Fluency: Frameworks and Foundations",
    provider: "Anthropic",
    category: "AI Fluency",
  },
  {
    title: "Cisco Data Analytics Essentials",
    provider: "Cisco Networking Academy",
    category: "Data Analytics",
  },
  {
    title: "Google AI Essentials",
    provider: "Google",
    category: "Applied AI",
  },
];

function App() {
  return (
    <div className="portfolio">
      <div className="star-layer star-layer-one" />
      <div className="star-layer star-layer-two" />

      <div className="floating-space-object rocket rocket-left">
        🚀
      </div>

      <div className="floating-space-object rocket rocket-right">
        🚀
      </div>

      <div className="floating-space-object astronaut astronaut-left">
        🧑‍🚀
      </div>

      <div className="floating-space-object astronaut astronaut-right">
        🧑‍🚀
      </div>

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-logo">VN</span>

          <span>
            <strong>Vineela Nimmala</strong>
            <small>Business & Data Analyst</small>
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
          className="nav-resume"
        >
          Resume
        </a>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              Open to Business Analyst and Data Analyst opportunities
            </div>

            <p className="eyebrow">
              BUSINESS ANALYSIS • DATA ANALYTICS • PROCESS IMPROVEMENT
            </p>

            <h1>
              Turning complex business needs into
              <span> clear processes and actionable insights.</span>
            </h1>

            <p className="hero-description">
              Business Analyst and Data Analyst with 5+ years of experience
              across healthcare, financial services, risk, fraud, compliance,
              data management, KPI reporting, process improvement, quality
              assurance, and analytics delivery.
            </p>

            <div className="hero-actions">
              <a href="#experience" className="primary-button">
                Explore My Journey
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="secondary-button"
              >
                Download PDF
              </a>
            </div>

            <div className="contact-pills">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-image-wrapper">
                <img
                  src={photoUrl}
                  alt="Vineela Nimmala"
                  className="profile-image"
                />
              </div>

              <div className="profile-information">
                <p className="profile-label">Professional Profile</p>
                <h2>{profile.name}</h2>
                <p>{profile.title}</p>

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
            </div>
          </div>
        </section>

        <section className="statistics section-shell">
          {statistics.map((statistic) => (
            <article className="statistic-card" key={statistic.label}>
              <strong>{statistic.value}</strong>
              <span>{statistic.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="content-section section-shell">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Business understanding supported by trusted data.</h2>
            <span>
              I connect stakeholders, requirements, business processes, data,
              analytical reporting, testing, and delivery into one structured
              approach.
            </span>
          </div>

          <div className="about-grid">
            <article className="glass-card">
              <div className="card-icon">01</div>
              <h3>Business Analysis</h3>
              <p>
                Requirements elicitation, BRD and FRD documentation, user
                stories, acceptance criteria, process mapping, stakeholder
                coordination, GAP analysis, and requirements traceability.
              </p>
            </article>

            <article className="glass-card">
              <div className="card-icon">02</div>
              <h3>Data Analytics</h3>
              <p>
                SQL analysis, data profiling, source-to-target mapping, data
                validation, KPI definition, dashboard development, data
                quality, reconciliation, and analytical storytelling.
              </p>
            </article>

            <article className="glass-card">
              <div className="card-icon">03</div>
              <h3>Delivery & Improvement</h3>
              <p>
                Agile coordination, project status reporting, testing, UAT,
                defect triage, executive communication, process improvement,
                and deployment readiness.
              </p>
            </article>
          </div>
        </section>

        <section id="process" className="content-section section-shell">
          <div className="section-heading">
            <p>MY FLOW PROCESS</p>
            <h2>From business problem to measurable value.</h2>
            <span>
              A clear six-stage process showing how I approach business analysis
              and analytical delivery.
            </span>
          </div>

          <div className="process-flow">
            {processFlow.map((step, index) => (
              <article className="process-step" key={step.number}>
                <div className="process-number">{step.number}</div>

                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {index < processFlow.length - 1 ? (
                  <div className="process-arrow">→</div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section section-shell">
          <div className="section-heading">
            <p>PROFESSIONAL EXPERIENCE</p>
            <h2>Career journey across healthcare and financial services.</h2>
            <span>
              Experience presented as a connected timeline for quick recruiter
              review.
            </span>
          </div>

          <div className="career-timeline">
            {experiences.map((experience, index) => (
              <article
                className="career-item"
                key={`${experience.company}-${experience.duration}`}
              >
                <div className="timeline-marker">
                  <span>{index + 1}</span>
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

                  <div className="experience-body">
                    <ul>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technology-list">
                    {experience.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section section-shell">
          <div className="section-heading">
            <p>CORE CAPABILITIES</p>
            <h2>Business, data, reporting, cloud, testing, and AI skills.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

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
          className="content-section section-shell"
        >
          <div className="section-heading">
            <p>CERTIFICATIONS</p>
            <h2>Continuous learning in AI and data analytics.</h2>
          </div>

          <div className="certification-grid">
            {certifications.map((certification, index) => (
              <article
                className="certification-card"
                key={certification.title}
              >
                <div className="certification-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p>{certification.category}</p>
                <h3>{certification.title}</h3>
                <span>{certification.provider}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-shell">
          <div className="education-card">
            <div>
              <p className="education-label">EDUCATION</p>

              <h2>
                Master of Science in Information Systems and Technology
              </h2>

              <h3>University of North Texas, Denton, Texas</h3>

              <span>Graduated 2025</span>
            </div>

            <div className="education-decoration">🎓</div>
          </div>
        </section>

        <section id="contact" className="content-section section-shell">
          <div className="contact-section">
            <div>
              <p className="contact-label">LET&apos;S CONNECT</p>

              <h2>
                Ready to support business analysis, data analytics, and process
                improvement initiatives.
              </h2>

              <p>
                Open to Business Analyst, Data Analyst, Business Systems
                Analyst, BI Analyst, Healthcare Analyst, and reporting-focused
                opportunities.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href={`mailto:${profile.email}`}
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Open Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Vineela Nimmala • Business Analysis • Data
        Analytics • Project & Process Improvement
      </footer>
    </div>
  );
}

export default App;