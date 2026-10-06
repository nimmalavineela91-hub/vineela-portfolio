import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const photoUrl = `${baseUrl}photo.jpg`;

const profile = {
  name: "Vineela Nimmala",
  title: "Senior Business Analyst",
  subtitle:
    "Healthcare • Banking & Financial Services • Telecom • Technology",
  email: "vineelan19@gmail.com",
  phone: "(510) 585-4198",
  linkedin:
    "https://www.linkedin.com/in/vineela-nimmala-901471300",
};

const metrics = [
  {
    value: "10+",
    label: "Years of Business Analysis Experience",
  },
  {
    value: "5",
    label: "Major Client Engagements",
  },
  {
    value: "4",
    label: "Industry Domains",
  },
  {
    value: "E2E",
    label: "SDLC Delivery Experience",
  },
];

const aboutCards = [
  {
    number: "01",
    title: "Requirements Analysis",
    text:
      "Requirements elicitation, stakeholder interviews, JAD sessions, BRDs, SRS/FRS, use cases, user stories, acceptance criteria and RTM.",
  },
  {
    number: "02",
    title: "Data & Validation",
    text:
      "SQL, Python, data extraction, data profiling, data mining, ETL validation, SQL test scripts and data-quality analysis.",
  },
  {
    number: "03",
    title: "Process & Modeling",
    text:
      "GAP analysis, SWOT, Fit & Impact analysis, UML diagrams, process flows, wireframes, mockups and data models.",
  },
  {
    number: "04",
    title: "Testing & Delivery",
    text:
      "UAT, defect management, Agile collaboration, backlog support, change management and cross-functional release delivery.",
  },
];

const domains = [
  {
    number: "01",
    title: "Banking & Financial Services",
    text:
      "Investment and portfolio management, fund accounting, mortgage banking, mobile banking, FIX, SWIFT, ACH and ISO 20022.",
  },
  {
    number: "02",
    title: "Healthcare",
    text:
      "Medicare, Medicaid, CMS, HIPAA, MMIS, MITA, HEDIS, claims processing, enrollment, EDI and patient communication.",
  },
  {
    number: "03",
    title: "Telecom",
    text:
      "5G Home Internet, self-install and professional-install workflows, SQL validation, process modeling and executive reporting.",
  },
  {
    number: "04",
    title: "Technology & SaaS",
    text:
      "SaaS analytics, ETL validation, statistical analysis, business reporting, Power BI dashboards and enterprise process improvement.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text:
      "Engage stakeholders and SMEs through interviews, JAD sessions and workshops to understand business goals, pain points and requirements.",
  },
  {
    number: "02",
    title: "Analyze",
    text:
      "Perform GAP, SWOT, Fit & Impact and risk analysis to understand current-state limitations, dependencies and future-state opportunities.",
  },
  {
    number: "03",
    title: "Document",
    text:
      "Translate business needs into BRDs, SRS/FRS documents, use cases, user stories, acceptance criteria and Requirements Traceability Matrices.",
  },
  {
    number: "04",
    title: "Model",
    text:
      "Create UML diagrams, process flows, wireframes, mockups, data models and current-state/future-state visualizations.",
  },
  {
    number: "05",
    title: "Validate",
    text:
      "Use SQL, Python and testing techniques to validate data, support ETL testing, execute test scenarios and coordinate UAT.",
  },
  {
    number: "06",
    title: "Deliver",
    text:
      "Partner with Product Owners, developers, QA teams and stakeholders to manage releases, defects, change and business adoption.",
  },
];

const experiences = [
  {
    client: "Capital One",
    role: "Business Analyst",
    duration: "May 2023 – Present",
    location: "San Francisco, CA",
    project:
      "Investment Portfolio Management & Mobile Banking Platform",
    domain:
      "Financial Services • Investment • Mobile Banking",

    summary:
      "Supporting Agile delivery across investment portfolio management and mobile banking initiatives, connecting business, investment and technology teams.",

    bullets: [
      "Drive requirements and delivery within Agile Scrum teams and support sprint planning across cross-functional teams.",
      "Participate in JAD sessions to analyze and document business requirements.",
      "Partner with Investment and IT teams on operational improvements across investment sourcing, due diligence, portfolio management, execution and performance monitoring.",
      "Support mortgage banking business logic and investment portfolio performance reporting.",
      "Apply fund accounting principles across investment, portfolio and securities accounting.",
      "Develop FIX protocol specifications, interfaces, service flows and FIX/SWIFT message documentation.",
      "Create business use cases, activity diagrams, sequence diagrams and mobile UI flows.",
      "Maintain Requirements Traceability Matrix and issue tracking.",
      "Prepare Risk Assessment Matrix and mitigation plans for mobile banking services.",
    ],

    tools: [
      "Agile / Scrum",
      "JAD",
      "FIX Protocol",
      "SWIFT",
      "UML",
      "RTM",
      "Risk Assessment",
      "Fund Accounting",
      "Mobile Banking",
    ],
  },

  {
    client: "AT&T",
    role: "Business Analyst",
    duration: "Mar 2021 – Apr 2023",
    location: "Middletown, NJ",
    project:
      "5G Home Self-Install & Professional Install Platform",
    domain:
      "Telecom • 5G • Process Improvement",

    summary:
      "Supported Agile business analysis for 5G Home Internet self-install and professional-install processes, including data analysis, process modeling and executive reporting.",

    bullets: [
      "Worked in Agile/Scrum teams to support iterative releases.",
      "Conducted DCO sessions with stakeholders for 5G Home Self Install and Professional Install requirements.",
      "Queried MS SQL Server using SELECT and JOIN queries and executed SQL test scripts.",
      "Facilitated functional design sessions to define project scope and align objectives.",
      "Performed GAP analysis and Fit & Impact analysis for current-state and future-state solutions.",
      "Modeled business processes using iGrafx and designed data models using PowerDesigner.",
      "Built interactive Tableau dashboards and reports for stakeholder insights.",
      "Tracked defects in JIRA, tasks in MS Project and documentation in SharePoint.",
      "Presented project analysis, updates and recommendations to stakeholders and leadership.",
      "Participated in procurement-related collaboration activities.",
    ],

    tools: [
      "Agile / Scrum",
      "MS SQL Server",
      "SQL",
      "Tableau",
      "JIRA",
      "MS Project",
      "SharePoint",
      "iGrafx",
      "PowerDesigner",
    ],
  },

  {
    client: "OhioHealth",
    role: "Business Analyst",
    duration: "Jan 2019 – Feb 2021",
    location: "Columbus, OH",
    project:
      "Healthcare Enterprise Architecture & Patient Communication Platform",
    domain:
      "Healthcare • CMS • HIPAA",

    summary:
      "Supported healthcare enterprise architecture and patient communication initiatives through requirements analysis, Agile delivery, SQL validation, UAT and compliance-focused documentation.",

    bullets: [
      "Gathered business, system and functional requirements through interviews with business users, stakeholders and SMEs.",
      "Performed gap assessment of legacy-system design against new business requirements.",
      "Supported HHS and CMS enterprise architecture initiatives.",
      "Validated DB2 mainframe test data using SQL queries.",
      "Organized Scrum ceremonies and helped Product Owners manage product and sprint backlogs.",
      "Created user stories and acceptance criteria for appointment reminders, SMS notifications and web changes.",
      "Performed UAT and demonstrated new functionality to business users.",
      "Produced burndown, velocity and defect reports in JIRA.",
      "Created current-state and future-state process flows and use-case diagrams in Visio.",
      "Maintained RTM traceability between requirements, user stories and test cases.",
      "Supported HIPAA privacy and security compliance.",
    ],

    tools: [
      "Agile / Scrum",
      "JIRA",
      "SQL",
      "IBM DB2",
      "Mainframe",
      "MS Visio",
      "User Stories",
      "RTM",
      "UAT",
      "CMS",
      "HIPAA",
    ],
  },

  {
    client: "AmeriHealth",
    role: "Business Systems Analyst",
    duration: "Oct 2015 – Dec 2018",
    location: "Cranbury, NJ",
    project:
      "Medicaid & Medicare Claims and Member Enrollment Platform",
    domain:
      "Healthcare • Medicare • Medicaid",

    summary:
      "Supported Medicaid and Medicare claims and enrollment initiatives involving requirements analysis, SQL/Python data profiling, UAT and regulatory reporting.",

    bullets: [
      "Participated in Agile Scrum ceremonies including sprint planning, estimation, demos and retrospectives.",
      "Modeled business processes for phone, web, email, physician and pharmacy contact channels.",
      "Worked with Underwriting and Claims SMEs to gather requirements and create functional specifications.",
      "Performed data extraction, data mining and profiling using SQL, Python and SSMS.",
      "Conducted UAT for Medicaid and Medicare member eligibility, provider enrollment and member enrollment.",
      "Collaborated with UX teams on wireframes and portal prototypes.",
      "Performed CMS T-MSIS impact analysis for state Medicaid programs.",
      "Reviewed MITA/HITECH crosswalk analysis and contributed to MITA 3.0.",
      "Validated data for HEDIS reporting and QAPI improvement programs.",
      "Created UML diagrams and analyzed EDI claims and remittance workflows.",
    ],

    tools: [
      "Agile / Scrum",
      "SQL",
      "Python",
      "SSMS",
      "UML",
      "Wireframes",
      "HIPAA",
      "EDI",
      "HEDIS",
      "QAPI",
      "MITA 3.0",
      "MMIS",
      "T-MSIS",
      "UAT",
    ],
  },

  {
    client: "Google",
    role: "Business Analyst",
    duration: "Sep 2014 – Sep 2015",
    location: "Delhi, India",
    project:
      "SaaS Data Analytics & Business Reporting Platform",
    domain:
      "Technology • SaaS • Analytics",

    summary:
      "Supported SaaS analytics and business-reporting initiatives through requirements documentation, SQL/Python validation, Power BI reporting and Waterfall project delivery.",

    bullets: [
      "Led sequential project lifecycles using Waterfall methodology.",
      "Elicited and documented requirements and translated them into functional and technical specifications.",
      "Created BRDs and user manuals.",
      "Validated SaaS data using SOAP UI, SQL Developer and Python.",
      "Supported ETL validation for data consistency across systems.",
      "Performed statistical analysis, regression and hypothesis testing using Minitab.",
      "Built interactive Power BI dashboards for business-performance insights.",
      "Created process maps, diagrams and flowcharts using Lucidchart.",
      "Managed project documentation and version control in SharePoint.",
      "Conducted GAP analysis and led UAT with stakeholders and end users.",
    ],

    tools: [
      "Waterfall",
      "SOAP UI",
      "SQL Developer",
      "Python",
      "Minitab",
      "Power BI",
      "Lucidchart",
      "SharePoint",
      "ETL",
      "UAT",
    ],
  },
];

const skillGroups = [
  {
    title: "Business Analysis",
    skills: [
      "Requirements Elicitation",
      "BRD",
      "SRS / FRS",
      "Use Cases",
      "User Stories",
      "Acceptance Criteria",
      "RTM",
      "GAP Analysis",
      "SWOT Analysis",
      "Fit & Impact Analysis",
      "Risk Assessment",
      "JAD",
    ],
  },

  {
    title: "Methodologies",
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "Waterfall",
      "SDLC",
      "RUP",
      "RAD",
      "Six Sigma",
    ],
  },

  {
    title: "Data & Testing",
    skills: [
      "SQL",
      "MS SQL Server",
      "Oracle",
      "IBM DB2",
      "MySQL",
      "SQL Developer",
      "SSMS",
      "ETL Validation",
      "Data Profiling",
      "Data Mining",
      "UAT",
      "Test Plans",
      "Defect Tracking",
    ],
  },

  {
    title: "Analytics & Reporting",
    skills: [
      "Tableau",
      "Power BI",
      "MS Excel",
      "Python",
      "Minitab",
      "Statistical Analysis",
      "Business Reporting",
      "Data Validation",
    ],
  },

  {
    title: "Modeling & Design",
    skills: [
      "UML",
      "Use Case Diagrams",
      "Activity Diagrams",
      "Sequence Diagrams",
      "Class Diagrams",
      "MS Visio",
      "Lucidchart",
      "iGrafx",
      "ARIS",
      "Erwin",
      "PowerDesigner",
      "Wireframes",
      "Mockups",
    ],
  },

  {
    title: "Project & Collaboration",
    skills: [
      "JIRA",
      "MS Project",
      "MS SharePoint",
      "Rational RequisitePro",
      "ClearCase",
      "MS Word",
      "MS Excel",
      "PowerPoint",
      "Outlook",
    ],
  },
];

function SectionHeader({
  label,
  title,
  description,
}) {
  return (
    <div className="section-heading">
      <p className="section-label">
        {label}
      </p>

      <h2>
        {title}
      </h2>

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

      <header className="navbar">

        <a
          href="#home"
          className="brand"
        >
          <span className="brand-mark">
            VN
          </span>

          <span className="brand-copy">
            <strong>
              Vineela Nimmala
            </strong>

            <small>
              Senior Business Analyst
            </small>
          </span>
        </a>

        <nav>
          <a href="#about">
            About
          </a>

          <a href="#domains">
            Domains
          </a>

          <a href="#process">
            Process
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="linkedin-nav"
        >
          LinkedIn
        </a>

      </header>

      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero container"
        >

          <div className="hero-content">

            <div className="status-pill">
              <span></span>
              Senior Business Analyst
            </div>

            <p className="hero-kicker">
              BUSINESS ANALYSIS • DATA ANALYSIS • ENTERPRISE DELIVERY
            </p>

            <h1>
              Connecting
              <em>
                {" "}
                business, data{" "}
              </em>
              and technology.
            </h1>

            <p className="hero-description">
              Senior Business Analyst
              with 10+ years of
              experience across
              healthcare, banking and
              financial services,
              telecom, and technology.
              Experienced in translating
              complex stakeholder needs
              into clear business,
              functional, technical and
              data requirements.
            </p>

            <div className="hero-buttons">

              <a
                href="#experience"
                className="button primary"
              >
                Explore Experience
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="button secondary"
              >
                Contact Me
              </a>

            </div>

            <div className="hero-contact">

              <a
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>

              <a
                href={`tel:${profile.phone}`}
              >
                {profile.phone}
              </a>

            </div>

          </div>

          <div className="hero-profile">

            <div className="ring ring-one"></div>

            <div className="ring ring-two"></div>

            <article className="profile-card">

              <div className="photo-wrapper">

                <img
                  src={photoUrl}
                  alt="Vineela Nimmala"
                  className="profile-photo"
                />

              </div>

              <div className="profile-info">

                <p>
                  Professional Profile
                </p>

                <h2>
                  {profile.name}
                </h2>

                <h3>
                  {profile.title}
                </h3>

                <span>
                  {profile.subtitle}
                </span>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin-button"
                >
                  LinkedIn Profile
                </a>

              </div>

            </article>

          </div>

        </section>

        {/* METRICS */}

        <section className="metrics container">

          {metrics.map((metric) => (

            <article
              key={metric.label}
              className="metric-card"
            >

              <strong>
                {metric.value}
              </strong>

              <span>
                {metric.label}
              </span>

            </article>

          ))}

        </section>

        {/* ABOUT */}

        <section
          id="about"
          className="section container"
        >

          <SectionHeader
            label="ABOUT ME"
            title="Senior business analysis built around clarity, traceability and delivery."
            description="My work spans the complete SDLC — from stakeholder discovery and requirements analysis through modeling, testing, UAT, compliance and production delivery."
          />

          <div className="about-grid">

            {aboutCards.map((card) => (

              <article
                className="about-card"
                key={card.number}
              >

                <span>
                  {card.number}
                </span>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.text}
                </p>

              </article>

            ))}

          </div>

        </section>

        {/* DOMAINS */}

        <section
          id="domains"
          className="section container"
        >

          <SectionHeader
            label="DOMAIN EXPERIENCE"
            title="Cross-industry experience in regulated and enterprise environments."
          />

          <div className="domain-grid">

            {domains.map((domain) => (

              <article
                className="domain-card"
                key={domain.title}
              >

                <span>
                  {domain.number}
                </span>

                <h3>
                  {domain.title}
                </h3>

                <p>
                  {domain.text}
                </p>

              </article>

            ))}

          </div>

        </section>

        {/* PROCESS */}

        <section
          id="process"
          className="section container"
        >

          <SectionHeader
            label="MY BA PROCESS"
            title="From stakeholder need to validated business solution."
            description="A structured process for keeping business objectives, requirements, technology and testing aligned."
          />

          <div className="process-grid">

            {processSteps.map(
              (step, index) => (

                <article
                  className="process-card"
                  key={step.number}
                >

                  <div className="process-heading">

                    <span className="process-number">
                      {step.number}
                    </span>

                    {index <
                      processSteps.length -
                        1 && (

                      <span className="arrow">
                        →
                      </span>

                    )}

                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </article>

              )
            )}

          </div>

        </section>

        {/* EXPERIENCE */}

        <section
          id="experience"
          className="section container"
        >

          <SectionHeader
            label="PROFESSIONAL EXPERIENCE"
            title="A decade of business analysis across major enterprise programs."
            description="Experience across financial services, telecom, healthcare and technology."
          />

          <div className="timeline">

            {experiences.map(
              (job, index) => (

                <article
                  className="timeline-row"
                  key={`${job.client}-${job.duration}`}
                >

                  <div className="timeline-number">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="experience-card">

                    <div className="experience-header">

                      <div>

                        <p className="experience-domain">
                          {job.domain}
                        </p>

                        <h3>
                          {job.client}
                        </h3>

                        <h4>
                          {job.role}
                        </h4>

                        <p className="project-title">
                          {job.project}
                        </p>

                      </div>

                      <div className="job-meta">

                        <span>
                          {job.duration}
                        </span>

                        <small>
                          {job.location}
                        </small>

                      </div>

                    </div>

                    <p className="job-summary">
                      {job.summary}
                    </p>

                    <ul>

                      {job.bullets.map(
                        (bullet) => (

                          <li key={bullet}>
                            {bullet}
                          </li>

                        )
                      )}

                    </ul>

                    <div className="tags">

                      {job.tools.map(
                        (tool) => (

                          <span key={tool}>
                            {tool}
                          </span>

                        )
                      )}

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

        {/* SKILLS */}

        <section
          id="skills"
          className="section container"
        >

          <SectionHeader
            label="TECHNICAL & BUSINESS SKILLS"
            title="Tools and capabilities supporting end-to-end business analysis."
          />

          <div className="skills-grid">

            {skillGroups.map(
              (group) => (

                <article
                  className="skill-card"
                  key={group.title}
                >

                  <h3>
                    {group.title}
                  </h3>

                  <div className="tags">

                    {group.skills.map(
                      (skill) => (

                        <span key={skill}>
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </article>

              )
            )}

          </div>

        </section>

        {/* EDUCATION */}

        <section className="section container">

          <article className="education-card">

            <div>

              <p>
                EDUCATION
              </p>

              <h2>
                Bachelor&apos;s Degree
              </h2>

              <h3>
                Hindu College
              </h3>

              <span>
                Guntur, Andhra Pradesh,
                India
              </span>

            </div>

            <div className="education-symbol">
              EDU
            </div>

          </article>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="section container"
        >

          <article className="contact-card">

            <div>

              <p className="contact-label">
                LET&apos;S CONNECT
              </p>

              <h2>
                Bringing business,
                data and technology
                together for better
                outcomes.
              </h2>

              <p className="contact-text">
                Senior Business Analyst
                experienced across
                enterprise requirements,
                process analysis,
                data validation,
                testing, UAT and
                stakeholder management.
              </p>

            </div>

            <div className="contact-actions">

              <a
                href={`mailto:${profile.email}`}
                className="button primary"
              >
                Email Me
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                LinkedIn
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="button secondary"
              >
                Call Me
              </a>

            </div>

          </article>

        </section>

      </main>

      <footer>
        © {new Date().getFullYear()} Vineela Nimmala • Senior Business Analyst
      </footer>

    </div>
  );
}

export default App;