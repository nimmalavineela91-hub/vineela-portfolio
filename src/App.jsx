import { useState } from "react"

const baseUrl = import.meta.env.BASE_URL

const profilePhoto = `${baseUrl}photo.jpg`
const resumeFile = `${baseUrl}Vineela_Nimmala_Resume.pdf`

const EMAIL = "nimmalavineela91@gmail.com"

const LINKEDIN_URL =
  "https://www.linkedin.com/in/vineela-nimmala-901471300"

const PORTFOLIO_URL =
  "https://nimmalavineela91-hub.github.io/vineela-portfolio/"

const experiences = [
  {
    company: "Molina Healthcare",
    role: "Business Analyst & Data Analyst",
    duration: "Jan 2025 – Present",
    domain: "Healthcare & Health Insurance",
    summary:
      "Supporting healthcare-focused business analysis, data analytics, process improvement, reporting, data-quality validation, stakeholder collaboration, Agile delivery, and UAT.",
    highlights: [
      "Facilitate stakeholder workshops and translate business needs into BRDs, FRDs, user stories, acceptance criteria, and traceability artifacts.",
      "Create AS-IS and TO-BE process flows, perform gap analysis, and identify operational improvement opportunities.",
      "Use SQL, Tableau, Power BI, Snowflake, BigQuery, and data-validation methods to support KPI reporting and trusted business decisions.",
      "Collaborate with product, engineering, QA, data, compliance, and operations teams throughout delivery and UAT.",
    ],
    technologies: [
      "SQL",
      "Power BI",
      "Tableau",
      "Snowflake",
      "BigQuery",
      "Jira",
      "Confluence",
      "Claude",
    ],
  },
  {
    company: "Cognizant",
    role: "Business Analyst & Data Analyst",
    duration: "Sep 2021 – Aug 2023",
    domain: "Healthcare, Claims & Data Analytics",
    summary:
      "Supported healthcare claims, revenue-cycle, data integration, reporting, governance, analytics, and testing initiatives across business and technology teams.",
    highlights: [
      "Partnered with clinical operations, medical coding, payer, revenue-cycle, compliance, and data teams.",
      "Created BRDs, FRDs, source-to-target mappings, SOPs, business rules, test evidence, and UAT documentation.",
      "Analysed claims, payment, provider, member, and clinical data using SQL, Python, Power BI, and Tableau.",
      "Supported dimensional modelling, cloud data platforms, data quality, governance, HIPAA controls, and analytical reporting.",
    ],
    technologies: [
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Databricks",
      "Snowflake",
      "Redshift",
      "Azure DevOps",
    ],
  },
  {
    company: "Wipro",
    role: "Business Analyst",
    duration: "Jul 2020 – Aug 2021",
    domain: "Banking, Risk, Fraud & Compliance",
    summary:
      "Worked with risk, fraud, compliance, operations, and technology stakeholders on requirements, analytics, governance, reporting, and control-focused initiatives.",
    highlights: [
      "Gathered and documented business and functional requirements for fraud, risk, compliance, and operational workflows.",
      "Created process flows, data mappings, traceability documents, governance artifacts, and executive reports.",
      "Supported SQL analysis, fraud dashboards, testing, release readiness, and issue resolution.",
      "Used Tableau, Power BI, SQL, Python, AWS, Jira, and Confluence across analytical and governance activities.",
    ],
    technologies: [
      "SQL",
      "Tableau",
      "Power BI",
      "Python",
      "AWS",
      "Jira",
      "Confluence",
      "Risk Analytics",
    ],
  },
]

const education = [
  {
    number: "01",
    degree: "Master of Science in Information Systems and Technology",
    institution: "University of North Texas",
    location: "Denton, Texas",
    duration: "Graduated May 2025",
    description:
      "Graduate studies focused on information systems, enterprise technology, business processes, analytics, data-driven decision-making, and technology-enabled transformation.",
  },
  {
    number: "02",
    degree: "Bachelor of Pharmacy",
    institution: "India",
    location: "Healthcare Academic Foundation",
    duration: "Bachelor’s Degree",
    description:
      "Built a strong foundation in healthcare, pharmaceutical concepts, regulated-domain practices, research, documentation, and analytical thinking.",
  },
]

const certifications = [
  {
    number: "01",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Generative AI",
    description:
      "Foundational understanding of Claude, prompting, responsible AI usage, model capabilities, and practical business applications.",
  },
  {
    number: "02",
    title: "AI Fluency: Frameworks & Foundations",
    issuer: "Anthropic",
    category: "AI Fluency",
    description:
      "Frameworks for providing context, delegating work to AI, evaluating outputs, collaborating effectively, and applying AI responsibly.",
  },
  {
    number: "03",
    title: "Google AI Essentials",
    issuer: "Google",
    category: "Applied AI",
    description:
      "Practical use of generative AI for productivity, prompt development, responsible use, analysis, and workplace problem-solving.",
  },
  {
    number: "04",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "Data Analytics",
    description:
      "Core concepts in data preparation, transformation, analysis, interpretation, visualization, and data-driven decision-making.",
  },
]

const projects = [
  {
    number: "01",
    title: "AI-Assisted Healthcare Claims Denial Analytics",
    category: "SQL • Tableau • Healthcare • AI",
    status: "In Progress",
    description:
      "An end-to-end analytics project examining claims volume, denial rates, preventable denials, SLA breaches, rework, provider performance, procedure risk, and financial impact.",
    outcomes: [
      "Designed a PostgreSQL relational database for providers, members, claims, denial reasons, and claim-status history.",
      "Used joins, conditional aggregation, calculated KPIs, filters, and analytical SQL to identify denial drivers.",
      "Created Tableau KPI views for total claims, denied claims, denial rate, SLA performance, and rework.",
      "Defined an AI-assisted pre-submission validation concept with human review and governance controls.",
    ],
  },
  {
    number: "02",
    title: "Healthcare Claims Analytics & Data Quality",
    category: "Business Analysis • Data Quality • BI",
    status: "Completed",
    description:
      "A professional case study connecting stakeholder needs, claims-process analysis, data quality, KPI definitions, dashboard requirements, traceability, and UAT.",
    outcomes: [
      "Defined business objectives, scope, stakeholders, functional requirements, and business rules.",
      "Created AS-IS and TO-BE process flows and documented data-quality dimensions.",
      "Defined dashboard KPIs, reporting requirements, security needs, and validation expectations.",
      "Created UAT scenarios, acceptance criteria, and release-readiness requirements.",
    ],
  },
  {
    number: "03",
    title: "Enterprise AI Readiness Assessment",
    category: "AI Business Analysis • Governance",
    status: "Case Study",
    description:
      "A structured framework for evaluating whether an organization is prepared to implement AI responsibly and successfully.",
    outcomes: [
      "Evaluated business, process, data, people, technology, risk, and governance readiness.",
      "Defined human-review requirements, risk controls, ownership, and success metrics.",
      "Connected AI opportunities with measurable business outcomes and adoption planning.",
      "Supported responsible prioritization of high-value AI use cases.",
    ],
  },
  {
    number: "04",
    title: "Digital Customer Onboarding & Risk Analytics",
    category: "Banking • Risk • Process Analysis",
    status: "Portfolio Project",
    description:
      "A cross-domain case study focused on KYC, customer onboarding, identity verification, risk indicators, exceptions, workflow analysis, and reporting.",
    outcomes: [
      "Mapped customer onboarding and exception-handling workflows.",
      "Defined functional requirements, business rules, controls, and escalation paths.",
      "Outlined SQL and Power BI reporting requirements for onboarding performance.",
      "Identified automation and human-review opportunities.",
    ],
  },
]

const skillGroups = [
  {
    title: "Business Analysis",
    skills: [
      "Requirements Elicitation",
      "BRD",
      "FRD",
      "User Stories",
      "Acceptance Criteria",
      "RTM",
      "Stakeholder Management",
      "Gap Analysis",
      "Root Cause Analysis",
      "Business Rules",
    ],
  },
  {
    title: "Process & Delivery",
    skills: [
      "AS-IS / TO-BE",
      "BPMN",
      "Agile",
      "Scrum",
      "SAFe",
      "Jira",
      "Confluence",
      "UAT",
      "Defect Triage",
      "Release Readiness",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "SQL",
      "Python",
      "R",
      "Excel",
      "Data Profiling",
      "Data Validation",
      "Data Quality",
      "Data Mapping",
      "KPI Definition",
      "Reconciliation",
    ],
  },
  {
    title: "Business Intelligence",
    skills: [
      "Tableau",
      "Power BI",
      "DAX",
      "Power Query",
      "Dashboard Design",
      "Data Storytelling",
      "Executive Reporting",
      "Row-Level Security",
    ],
  },
  {
    title: "Platforms & Cloud",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "Snowflake",
      "BigQuery",
      "Databricks",
      "AWS",
      "Azure",
      "GCP",
      "Azure Data Factory",
      "Airflow",
    ],
  },
  {
    title: "AI Business Analysis",
    skills: [
      "Claude",
      "ChatGPT",
      "Prompt Engineering",
      "AI Readiness",
      "AI Requirements",
      "Responsible AI",
      "AI Governance",
      "Human-in-the-Loop",
      "AI Risk Analysis",
      "AI ROI",
    ],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business problem, stakeholders, users, constraints, risks, and expected outcomes.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Translate stakeholder needs into requirements, business rules, process flows, user stories, and acceptance criteria.",
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Profile data, validate business logic, identify trends, define KPIs, and perform root-cause analysis.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Create future-state workflows, dashboard requirements, solution concepts, and traceability artifacts.",
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Support data reconciliation, functional testing, UAT, defect resolution, and stakeholder sign-off.",
  },
  {
    number: "06",
    title: "Deliver Value",
    description:
      "Communicate insights, recommend improvements, support adoption, and measure business outcomes.",
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#79593f]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#28231f] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#6f675f] md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })

    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f1e8] text-[#28231f] selection:bg-[#8b674a] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#ddd0c0] bg-[#f7f1e8]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#79593f] text-sm font-bold text-white">
              VN
            </span>

            <span className="hidden text-sm font-semibold sm:block">
              Vineela Nimmala
            </span>
          </button>

          <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {[
              ["about", "About"],
              ["experience", "Experience"],
              ["education", "Education"],
              ["certifications", "Certifications"],
              ["projects", "Projects"],
              ["skills", "Skills"],
              ["contact", "Contact"],
            ].map(([sectionId, label]) => (
              <button
                key={sectionId}
                type="button"
                onClick={() => scrollToSection(sectionId)}
                className="transition hover:text-[#8b674a]"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#79593f] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#60452f] sm:inline-flex"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8c9b7] bg-white lg:hidden"
              aria-label="Open navigation menu"
            >
              <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#ddd0c0] bg-[#fffaf4] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["about", "About"],
                ["experience", "Experience"],
                ["education", "Education"],
                ["certifications", "Certifications"],
                ["projects", "Projects"],
                ["skills", "Skills"],
                ["contact", "Contact"],
              ].map(([sectionId, label]) => (
                <button
                  key={sectionId}
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  className="text-left text-sm font-medium"
                >
                  {label}
                </button>
              ))}

              <a
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-fit rounded-full bg-[#79593f] px-5 py-2.5 text-sm font-semibold text-white"
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 overflow-hidden px-5 py-20 md:px-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#e8d8c4] opacity-70 blur-[110px]" />

          <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#d8c0a4] opacity-50 blur-[130px]" />

          <div className="relative">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ccb79f] bg-white/70 px-4 py-2 text-sm text-[#79593f]">
              <span className="h-2 w-2 rounded-full bg-[#79593f]" />
              Open to new opportunities
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.27em] text-[#79593f]">
              Business Analysis • Data Analytics • AI Transformation
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-7xl">
              Hi, I’m
              <span className="mt-2 block text-[#79593f]">
                Vineela Nimmala.
              </span>
            </h1>

            <h2 className="mt-7 text-xl font-medium text-[#524940] md:text-2xl">
              Business Analyst • Data Analyst • AI Business Analyst
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#6f675f]">
              I connect business needs, trusted data, process improvement, and
              practical technology solutions to help organizations make better
              decisions and deliver measurable business value.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="rounded-full bg-[#79593f] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#60452f]"
              >
                Explore My Work
              </button>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#bca78f] bg-white/60 px-7 py-3.5 font-semibold transition hover:bg-white"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-[#bca78f] bg-white/60 px-7 py-3.5 font-semibold transition hover:bg-white"
              >
                Email Me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Business Analysis",
                "Healthcare",
                "SQL",
                "Tableau",
                "Power BI",
                "AI Readiness",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dacbbb] bg-[#fffaf4] px-4 py-2 text-xs font-semibold text-[#675a4e]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#dbc4aa] opacity-60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#ded0c0] bg-[#fffaf4] p-4 shadow-[0_30px_80px_rgba(85,64,45,0.16)]">
              <img
                src={profilePhoto}
                alt="Vineela Nimmala"
                className="h-[430px] w-full rounded-[1.5rem] object-cover object-top"
              />

              <div className="px-3 pb-3 pt-6">
                <h2 className="text-2xl font-semibold">Vineela Nimmala</h2>

                <p className="mt-2 font-semibold text-[#79593f]">
                  Business Analyst | Data Analyst
                </p>

                <p className="mt-4 text-sm leading-7 text-[#746b63]">
                  Healthcare • SQL • Tableau • Power BI • Data Quality • UAT •
                  Process Improvement • AI Readiness
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f1e6d9] p-4">
                    <p className="text-2xl font-bold text-[#79593f]">5+</p>
                    <p className="mt-1 text-xs text-[#746b63]">
                      Years of Experience
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f1e6d9] p-4">
                    <p className="text-2xl font-bold text-[#79593f]">4</p>
                    <p className="mt-1 text-xs text-[#746b63]">
                      AI & Data Certifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e1d5c7] bg-[#fffaf4] px-5 py-10 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["5+ Years", "Business & Data Analysis"],
              ["3 Domains", "Healthcare, Banking & Analytics"],
              ["MS Degree", "Information Systems & Technology"],
              ["4 Certifications", "AI & Data Analytics"],
            ].map(([value, label]) => (
              <article
                key={value}
                className="rounded-3xl border border-[#e1d5c7] bg-white p-6 text-center"
              >
                <p className="text-2xl font-bold text-[#79593f]">{value}</p>
                <p className="mt-2 text-sm text-[#746b63]">{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About Me"
              title="Business understanding supported by analytics, systems thinking, and responsible AI."
              description="My work connects stakeholder needs, business processes, data definitions, technical delivery, validation, and adoption into one structured analytical approach."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Business Analysis",
                  description:
                    "Requirements elicitation, stakeholder workshops, process mapping, user stories, acceptance criteria, traceability, change management, and UAT.",
                },
                {
                  title: "Data Analytics",
                  description:
                    "SQL, Python, Tableau, Power BI, data profiling, validation, KPI development, reconciliation, analysis, and data storytelling.",
                },
                {
                  title: "AI Transformation",
                  description:
                    "AI readiness, responsible AI requirements, use-case evaluation, governance, human oversight, process automation, risk, and ROI.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-[#e0d2c2] bg-[#fffaf4] p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 h-1.5 w-14 rounded-full bg-[#79593f]" />

                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#746b63]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="border-y border-[#e1d5c7] bg-[#fffaf4] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Professional Journey"
              title="Experience across healthcare, analytics, banking, risk, and compliance."
              description="My experience combines business analysis, data analysis, process improvement, reporting, governance, testing, and stakeholder collaboration."
            />

            <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
              <div className="space-y-3">
                {experiences.map((experience, index) => (
                  <button
                    key={experience.company}
                    type="button"
                    onClick={() => setActiveExperience(index)}
                    className={`w-full rounded-2xl border p-5 text-left transition ${
                      activeExperience === index
                        ? "border-[#9e7959] bg-[#eadccc]"
                        : "border-[#dfd1c1] bg-white hover:bg-[#f7eee4]"
                    }`}
                  >
                    <p className="font-semibold">{experience.company}</p>

                    <p className="mt-1 text-sm text-[#746b63]">
                      {experience.duration}
                    </p>
                  </button>
                ))}
              </div>

              <article className="rounded-[2rem] border border-[#e0d2c2] bg-white p-7 shadow-sm md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#79593f]">
                  {experiences[activeExperience].domain}
                </p>

                <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row">
                  <div>
                    <h3 className="text-3xl font-semibold">
                      {experiences[activeExperience].company}
                    </h3>

                    <p className="mt-2 text-lg text-[#79593f]">
                      {experiences[activeExperience].role}
                    </p>
                  </div>

                  <span className="h-fit w-fit rounded-full border border-[#d7c5b1] bg-[#f5eadf] px-4 py-2 text-sm font-semibold">
                    {experiences[activeExperience].duration}
                  </span>
                </div>

                <p className="mt-7 leading-8 text-[#6f675f]">
                  {experiences[activeExperience].summary}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {experiences[activeExperience].highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl bg-[#f6eee5] p-5"
                    >
                      <p className="text-sm leading-7 text-[#675e56]">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {experiences[activeExperience].technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#dfd0bf] bg-[#fffaf4] px-3 py-2 text-xs font-semibold text-[#6d6258]"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="education" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation in information systems and healthcare."
              description="My education combines enterprise information systems, data-driven decision-making, and a healthcare-focused academic foundation."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {education.map((item) => (
                <article
                  key={item.degree}
                  className="rounded-[2rem] border border-[#e0d2c2] bg-[#fffaf4] p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#79593f] text-lg font-bold text-white">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">{item.degree}</h3>

                      <p className="mt-2 font-semibold text-[#79593f]">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-sm text-[#746b63]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="rounded-full border border-[#d7c5b1] bg-[#f1e6d9] px-4 py-2 text-sm font-semibold">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-6 leading-8 text-[#6f675f]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className="border-y border-[#e1d5c7] bg-[#fffaf4] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Certifications"
              title="Continuous learning across AI and data analytics."
              description="These certifications strengthen my ability to apply AI responsibly, improve analytical workflows, and translate emerging technology into practical business value."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((certification) => (
                <article
                  key={certification.title}
                  className="rounded-[2rem] border border-[#e0d2c2] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#79593f] font-bold text-white">
                      {certification.number}
                    </div>

                    <div>
                      <span className="rounded-full border border-[#d8c5b0] bg-[#f1e6d9] px-3 py-2 text-xs font-bold text-[#79593f]">
                        {certification.category}
                      </span>

                      <h3 className="mt-5 text-xl font-semibold">
                        {certification.title}
                      </h3>

                      <p className="mt-2 font-semibold text-[#79593f]">
                        {certification.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-[#746b63]">
                    {certification.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Selected Portfolio Work"
              title="Projects demonstrating business analysis, analytics, and AI thinking."
              description="These case studies show how I approach requirements, data, dashboards, validation, governance, and measurable business outcomes."
            />

            <div className="grid gap-7 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-[2rem] border border-[#e0d2c2] bg-[#fffaf4] p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-4xl font-bold text-[#ccb69d]">
                      {project.number}
                    </span>

                    <span className="rounded-full border border-[#d8c5b0] bg-[#f1e6d9] px-3 py-2 text-xs font-bold text-[#79593f]">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.17em] text-[#79593f]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#6f675f]">
                    {project.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <span className="font-bold text-[#79593f]">✓</span>

                        <p className="text-sm leading-7 text-[#675e56]">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e1d5c7] bg-[#fffaf4] px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="My Delivery Flow"
              title="From business problem to measurable business value."
              description="A clear view of how I connect discovery, requirements, data analysis, solution design, validation, and adoption."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[2rem] border border-[#e0d2c2] bg-white p-7"
                >
                  <span className="text-sm font-bold text-[#79593f]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#746b63]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills connecting business, data, delivery, and AI."
              description="The skills are grouped so recruiters and hiring managers can quickly understand my professional profile."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[2rem] border border-[#e0d2c2] bg-[#fffaf4] p-7"
                >
                  <h3 className="text-xl font-semibold">{group.title}</h3>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#ddcdbc] bg-white px-3 py-2 text-xs font-semibold text-[#695f55]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[#e1d5c7] bg-[#fffaf4] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ddcdbc] bg-[#eee0d0] p-9 text-center md:p-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#cbaa88] opacity-40 blur-[100px]" />

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.27em] text-[#79593f]">
                  Let’s Connect
                </p>

                <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                  Let’s turn business challenges into meaningful solutions.
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f675f]">
                  Open to Business Analyst, Data Analyst, Business Systems
                  Analyst, Healthcare Analyst, BI Analyst, and AI Business
                  Analyst opportunities.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="rounded-full bg-[#79593f] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#60452f]"
                  >
                    Email Me
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#bca78f] bg-white/60 px-7 py-3.5 font-semibold transition hover:bg-white"
                  >
                    LinkedIn
                  </a>

                  <a
                    href={resumeFile}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#bca78f] bg-white/60 px-7 py-3.5 font-semibold transition hover:bg-white"
                  >
                    Download Resume
                  </a>
                </div>

                <div className="mt-10 space-y-2 text-sm text-[#746b63]">
                  <p>{EMAIL}</p>
                  <p>linkedin.com/in/vineela-nimmala-901471300</p>
                  <p>{PORTFOLIO_URL}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfd2c3] bg-[#f7f1e8] px-5 py-8 text-center text-sm text-[#81766b]">
        © 2026 Vineela Nimmala • Business Analysis • Data Analytics • AI
        Transformation
      </footer>
    </div>
  )
}

export default App