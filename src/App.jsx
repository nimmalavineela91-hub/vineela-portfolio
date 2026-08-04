import "./App.css";

const RESUME_URL = `${import.meta.env.BASE_URL}Vineela_Nimmala_Resume.pdf`;

const profile = {
  name: "Vineela Nimmala",
  title: "Business Analyst | Data Analyst | AI-Driven Insights",
  location: "Hayward, California, United States",
  email: "nimmalavineela91@gmail.com",
  phone: "(940) 703-8240",
  linkedin: "https://www.linkedin.com/in/vineela-n-901471300/",
  github: "https://github.com/nimmalavineela91-hub",
  portfolio: "https://nimmalavineela91-hub.github.io/vineela-portfolio/",
  summary:
    "Business Analyst and Data Analyst with 5+ years of experience translating business requirements into scalable, data-driven solutions across healthcare, financial services, risk, fraud, and compliance domains. Skilled in requirements elicitation, BRD/FRD documentation, user stories, process mapping, gap analysis, UAT coordination, SQL, Python, Tableau, Power BI, cloud analytics, and AI-enabled delivery."
};

const impactStats = [
  { value: "5+ Years", label: "Business & Data Experience" },
  { value: "50%+", label: "Batch Performance Improvement" },
  { value: "15%", label: "Operational Productivity Increase" },
  { value: "32%", label: "MTTR Reduction" }
];

const journey = [
  {
    year: "Jul 2021 – Aug 2022",
    role: "Business Analyst",
    company: "Wipro",
    points: [
      "Worked with Risk, Fraud, and Compliance teams to capture business requirements.",
      "Created governance-ready process documentation and audit lineage.",
      "Built Tableau and Power BI dashboards to improve fraud and chargeback visibility."
    ]
  },
  {
    year: "Sep 2022 – Aug 2023",
    role: "Business Analyst & Data Analyst",
    company: "Cognizant",
    points: [
      "Partnered with clinical and revenue-cycle teams for requirements and UAT traceability.",
      "Mapped EDI 837/835, HL7, and legacy datasets into analytical schemas.",
      "Built PySpark pipelines and healthcare analytics solutions with strong PHI governance."
    ]
  },
  {
    year: "Aug 2023 – Jan 2025",
    role: "Master of Science",
    company: "University of North Texas",
    points: [
      "Completed M.S. in Information Systems and Technology.",
      "Strengthened analytics, information systems, and business technology foundations.",
      "Expanded practical skills across data, reporting, and AI-enabled analysis."
    ]
  },
  {
    year: "Jan 2025 – Present",
    role: "Business Analyst & Data Analyst",
    company: "Molina Healthcare",
    points: [
      "Led requirements workshops, BRD/FRD/RTM documentation, and AS-IS / TO-BE analysis.",
      "Built SQL, PySpark, Airflow, AWS Glue, dbt, Snowflake, and BigQuery-based solutions.",
      "Delivered executive dashboards with Power BI and Tableau using RLS and narrative insights."
    ]
  }
];

const skills = [
  {
    title: "Business Analysis",
    items: [
      "BRD / FRD / SRS / RTM",
      "User Stories",
      "Process Mapping",
      "GAP Analysis",
      "UAT",
      "Agile / Scrum / SAFe"
    ]
  },
  {
    title: "Data & Analytics",
    items: [
      "SQL",
      "PL-SQL",
      "Python",
      "R",
      "PySpark",
      "Data Profiling"
    ]
  },
  {
    title: "Visualization & Reporting",
    items: [
      "Tableau",
      "Power BI",
      "Cognos",
      "Excel (Advanced)",
      "Dashboard Design",
      "Narrative Insights"
    ]
  },
  {
    title: "Platforms & Tools",
    items: [
      "Snowflake",
      "Redshift",
      "BigQuery",
      "Airflow",
      "dbt",
      "Postman"
    ]
  },
  {
    title: "Cloud",
    items: [
      "AWS (S3, Glue, Redshift)",
      "Azure (ADF, Synapse, Databricks)",
      "GCP (BigQuery)"
    ]
  },
  {
    title: "Collaboration",
    items: [
      "JIRA",
      "Confluence",
      "Azure DevOps",
      "Git",
      "Visio",
      "Lucidchart"
    ]
  }
];

const certifications = [
  "Claude 101 – Anthropic",
  "AI Fluency: Frameworks and Foundations – Anthropic",
  "Google AI Essentials – Google",
  "Cisco Data Analytics Essentials – Cisco Networking Academy"
];

const featuredWork = [
  {
    title: "Requirements & Process Transformation",
    description:
      "Translated business problems into structured requirements, AS-IS / TO-BE workflows, and actionable user stories that supported better cross-functional delivery."
  },
  {
    title: "Healthcare Data & Governance",
    description:
      "Worked on data mapping, profiling, PHI-sensitive workflows, and quality controls across healthcare datasets while supporting audit-readiness and compliance."
  },
  {
    title: "Executive Analytics Dashboards",
    description:
      "Designed KPI-driven dashboards in Tableau and Power BI for business visibility across performance, quality, customer metrics, and operational decision-making."
  }
];

const themes = [
  "Ivory aesthetic with elegant professional layout",
  "Flowchart-style career journey",
  "Resume download section",
  "Certifications and skills highlights",
  "Business + Data + AI professional branding"
];

function App() {
  return (
    <div className="app-shell">
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>

      <header className="topbar">
        <div className="brand">Vineela Nimmala</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero card">
          <div className="hero-left">
            <p className="eyebrow">PORTFOLIO</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>{profile.email}</span>
              <span>{profile.phone}</span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={RESUME_URL} target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="btn btn-secondary" href={RESUME_URL} download>
                Download Resume
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="mini-card">
              <h3>Professional Focus</h3>
              <ul>
                <li>Business Analysis</li>
                <li>Data Analytics</li>
                <li>AI-Assisted Documentation</li>
                <li>Healthcare & Compliance Analytics</li>
              </ul>
            </div>

            <div className="mini-card">
              <h3>Portfolio Theme</h3>
              <ul>
                {themes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {impactStats.map((stat) => (
            <div className="stat-card card" key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="about" className="section card">
          <div className="section-head">
            <p className="eyebrow">ABOUT</p>
            <h2>Profile Snapshot</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I bring together <strong>business analysis</strong>, <strong>data analytics</strong>,
                and <strong>AI-enabled productivity</strong> to solve business problems with clarity
                and measurable outcomes.
              </p>
              <p>
                My work spans requirements gathering, stakeholder communication, analytical thinking,
                reporting, process improvement, dashboard design, and structured delivery across
                healthcare and enterprise environments.
              </p>
            </div>

            <div className="highlight-box">
              <h3>Core Strengths</h3>
              <ul>
                <li>Requirements Elicitation & Documentation</li>
                <li>Data Mapping & Business Interpretation</li>
                <li>Dashboard Storytelling & KPI Reporting</li>
                <li>Cross-Functional Collaboration</li>
                <li>AI-Assisted Analysis Workflows</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="journey" className="section card">
          <div className="section-head">
            <p className="eyebrow">FLOWCHART</p>
            <h2>Career Journey</h2>
            <p className="section-note">
              Clean flowchart-style professional path showing role evolution and academic milestone.
            </p>
          </div>

          <div className="journey-flow">
            {journey.map((item, index) => (
              <div className="journey-step" key={`${item.company}-${item.year}`}>
                <div className="step-index">{index + 1}</div>
                <div className="step-card">
                  <div className="step-top">
                    <span className="step-year">{item.year}</span>
                    <span className="step-company">{item.company}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section card">
          <div className="section-head">
            <p className="eyebrow">EXPERTISE</p>
            <h2>Skills & Tools</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section card">
          <div className="section-head">
            <p className="eyebrow">FEATURED WORK</p>
            <h2>What This Portfolio Highlights</h2>
          </div>

          <div className="projects-grid">
            {featuredWork.map((item) => (
              <div className="project-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="section card">
          <div className="section-head">
            <p className="eyebrow">CERTIFICATIONS</p>
            <h2>Professional Learning</h2>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div className="cert-card" key={cert}>
                <div className="cert-badge">{index + 1}</div>
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="section card resume-card">
          <div>
            <p className="eyebrow">RESUME</p>
            <h2>Resume Access</h2>
            <p>
              You can view or download my latest resume directly from this portfolio.
            </p>
          </div>

          <div className="resume-actions">
            <a className="btn btn-primary" href={RESUME_URL} target="_blank" rel="noreferrer">
              Open Resume
            </a>
            <a className="btn btn-secondary" href={RESUME_URL} download>
              Download PDF
            </a>
          </div>
        </section>

        <section id="contact" className="section card">
          <div className="section-head">
            <p className="eyebrow">CONTACT</p>
            <h2>Let’s Connect</h2>
          </div>

          <div className="contact-grid">
            <a className="contact-card" href={`mailto:${profile.email}`}>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>

            <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>View Profile</strong>
            </a>

            <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>nimmalavineela91-hub</strong>
            </a>

            <a className="contact-card" href={profile.portfolio} target="_blank" rel="noreferrer">
              <span>Portfolio URL</span>
              <strong>Open Live Site</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Vineela Nimmala • Business Analysis • Data Analytics • AI-Driven Insights
        </p>
      </footer>
    </div>
  );
}

export default App;