import { useMemo, useState } from "react"

const baseUrl = import.meta.env.BASE_URL

const profilePhoto = `${baseUrl}photo.jpg`
const resumeFile = `${baseUrl}Vineela_Nimmala_Resume.pdf`

const LINKEDIN_URL =
  "https://www.linkedin.com/in/vineela-nimmala-901471300"

const EMAIL = "nimmalavineela91@gmail.com"

const themes = {
  ivory: {
    name: "Ivory",
    page: "bg-[#f8f4ee] text-[#20252b]",
    header: "bg-[#f8f4ee]/90 border-[#e6ded2]",
    card: "bg-white border-[#e8dfd2]",
    section: "bg-[#fffaf4]",
    soft: "bg-[#eee4d7]",
    accent: "bg-[#78563a] text-white",
    accentText: "text-[#78563a]",
    muted: "text-[#676b70]",
    pill: "bg-[#eee4d7] text-[#684a32] border-[#dfcfbd]",
    line: "bg-[#bea88d]",
    outline:
      "border-[#bda68b] text-[#684a32] hover:bg-[#eee4d7]",
  },

  sage: {
    name: "Sage",
    page: "bg-[#f3f7f3] text-[#202820]",
    header: "bg-[#f3f7f3]/90 border-[#dbe6dc]",
    card: "bg-white border-[#dbe6dc]",
    section: "bg-[#f9fcf9]",
    soft: "bg-[#e4eee5]",
    accent: "bg-[#4f7054] text-white",
    accentText: "text-[#4f7054]",
    muted: "text-[#667068]",
    pill: "bg-[#e7f0e8] text-[#48634c] border-[#d1e0d3]",
    line: "bg-[#93af98]",
    outline:
      "border-[#98b09c] text-[#48634c] hover:bg-[#e7f0e8]",
  },

  midnight: {
    name: "Midnight",
    page: "bg-slate-950 text-white",
    header: "bg-slate-950/90 border-slate-800",
    card: "bg-slate-900 border-slate-800",
    section: "bg-slate-900/70",
    soft: "bg-slate-800",
    accent: "bg-cyan-300 text-slate-950",
    accentText: "text-cyan-300",
    muted: "text-slate-400",
    pill: "bg-slate-800 text-cyan-200 border-slate-700",
    line: "bg-cyan-500/50",
    outline:
      "border-slate-600 text-slate-200 hover:bg-slate-800",
  },
}

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
      "Use SQL, Tableau, Power BI, and data-validation methods to support KPI reporting and trusted business decisions.",
      "Collaborate with business, product, engineering, QA, data, and compliance teams throughout delivery and UAT.",
    ],
  },
  {
    company: "Cognizant",
    role: "Business Analyst & Data Analyst",
    duration: "Sep 2021 – Aug 2023",
    domain: "Healthcare, Claims & Data Analytics",
    summary:
      "Supported healthcare claims, revenue-cycle, data integration, analytics, governance, and reporting initiatives across business and technology teams.",
    highlights: [
      "Partnered with clinical operations, medical coding, revenue-cycle, payer, compliance, and data teams.",
      "Created BRDs, FRDs, source-to-target mappings, SOPs, business rules, test evidence, and UAT documentation.",
      "Analysed claims, payment, provider, member, and clinical data using SQL, Python, Power BI, and Tableau.",
      "Supported data quality, dimensional modelling, cloud data platforms, reporting, governance, and regulatory controls.",
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
      "Created process flows, data mappings, traceability documents, decision records, governance artifacts, and executive reports.",
      "Supported SQL analysis, fraud dashboards, risk reporting, testing, release readiness, and issue resolution.",
      "Used Tableau, Power BI, SQL, Python, AWS, Jira, and Confluence across analytical and governance activities.",
    ],
  },
]

const education = [
  {
    degree: "Master of Science in Information Systems and Technology",
    institution: "University of North Texas",
    location: "Denton, Texas",
    duration: "Graduated May 2025",
    description:
      "Graduate studies focused on information systems, enterprise technology, analytics, business processes, data-driven decision-making, and technology-enabled transformation.",
  },
  {
    degree: "Bachelor of Pharmacy",
    institution: "India",
    location: "Healthcare Academic Foundation",
    duration: "Bachelor’s Degree",
    description:
      "Built a strong academic foundation in healthcare, pharmaceutical concepts, research, documentation, analytical thinking, and regulated-domain practices.",
  },
]

const skills = {
  "Business Analysis": [
    "Requirements Elicitation",
    "BRD & FRD",
    "User Stories",
    "Acceptance Criteria",
    "RTM",
    "Stakeholder Management",
    "Gap Analysis",
    "Root Cause Analysis",
    "Business Rules",
    "Change Management",
  ],

  "Process & Delivery": [
    "AS-IS / TO-BE Mapping",
    "BPMN",
    "Agile / Scrum",
    "Jira",
    "Confluence",
    "UAT",
    "Defect Triage",
    "Release Readiness",
    "RACI",
    "Risk & Issue Management",
  ],

  "Data & Analytics": [
    "SQL",
    "Python",
    "Excel",
    "Data Profiling",
    "Data Validation",
    "Data Quality",
    "Data Mapping",
    "KPI Definition",
    "Reconciliation",
    "Statistical Analysis",
  ],

  "BI & Platforms": [
    "Tableau",
    "Power BI",
    "PostgreSQL",
    "SQL Server",
    "Snowflake",
    "BigQuery",
    "AWS",
    "Azure",
    "GCP",
    "Databricks",
  ],

  "AI Business Analysis": [
    "AI Readiness",
    "AI Requirements",
    "AI Governance",
    "Responsible AI",
    "Human-in-the-Loop",
    "AI Risk Analysis",
    "Use-Case Assessment",
    "Automation Analysis",
    "AI KPI Definition",
    "AI ROI",
  ],
}

const projects = [
  {
    number: "01",
    title: "AI-Assisted Healthcare Claims Denial Analytics",
    category: "SQL • Tableau • Healthcare • AI",
    description:
      "An end-to-end analytics project examining claim status, denial rates, preventable denials, SLA breaches, rework, provider performance, and procedure-level risk.",
    outcomes: [
      "Designed a PostgreSQL claims database with providers, members, denial reasons, claims, and status-history tables.",
      "Used joins, grouping, conditional aggregation, calculated KPIs, and analytical SQL to identify denial drivers.",
      "Built Tableau KPI views for total claims, denied claims, denial rate, SLA breaches, and operational performance.",
      "Defined an AI-assisted pre-submission validation concept with human review and governance controls.",
    ],
    status: "In Progress",
  },
  {
    number: "02",
    title: "Healthcare Claims Analytics & Data Quality Dashboard",
    category: "Business Analysis • Data Quality • BI",
    description:
      "A professional case study connecting stakeholder needs, claims-process analysis, data quality, KPI definitions, dashboard requirements, validation, and UAT.",
    outcomes: [
      "Defined business objectives, scope, stakeholders, requirements, business rules, and reporting expectations.",
      "Created AS-IS and TO-BE delivery flows and data-quality dimensions.",
      "Documented KPI definitions, dashboard functionality, security needs, and traceability.",
      "Created UAT scenarios and release-acceptance expectations.",
    ],
    status: "Completed",
  },
  {
    number: "03",
    title: "Enterprise AI Readiness Assessment",
    category: "AI Business Analysis • Governance",
    description:
      "A structured framework for evaluating whether an organization is ready to implement AI responsibly and successfully.",
    outcomes: [
      "Evaluates business, process, data, people, technology, risk, and governance readiness.",
      "Defines human-review requirements, risk controls, success metrics, and ownership.",
      "Connects AI opportunities with measurable business outcomes and adoption planning.",
      "Supports responsible prioritization of high-value AI use cases.",
    ],
    status: "Portfolio Case Study",
  },
  {
    number: "04",
    title: "Digital Customer Onboarding & Risk Analytics",
    category: "Banking • Risk • Process Analysis",
    description:
      "A cross-domain case study focused on customer onboarding, identity validation, KYC processes, risk indicators, exceptions, and operational reporting.",
    outcomes: [
      "Mapped customer onboarding and exception-handling workflows.",
      "Defined functional requirements, business rules, risk indicators, and escalation paths.",
      "Outlined SQL and Power BI reporting requirements for onboarding performance.",
      "Identified automation and human-review opportunities.",
    ],
    status: "Synthetic Case Study",
  },
]

const workFlow = [
  {
    step: "01",
    title: "Business Problem",
    description:
      "Understand the challenge, expected outcome, affected users, constraints, and business value.",
  },
  {
    step: "02",
    title: "Stakeholder Discovery",
    description:
      "Identify decision-makers, process owners, users, subject-matter experts, technical teams, and compliance partners.",
  },
  {
    step: "03",
    title: "Requirements & Process Analysis",
    description:
      "Create requirements, AS-IS and TO-BE flows, business rules, user stories, acceptance criteria, and traceability.",
  },
  {
    step: "04",
    title: "Data & KPI Definition",
    description:
      "Map source data, define data-quality rules, establish KPI logic, and document reporting expectations.",
  },
  {
    step: "05",
    title: "Solution & Dashboard Design",
    description:
      "Translate requirements into dashboards, workflows, system features, analytical outputs, and user experiences.",
  },
  {
    step: "06",
    title: "Validation & UAT",
    description:
      "Validate data and functionality, manage defects, support users, confirm acceptance criteria, and obtain sign-off.",
  },
  {
    step: "07",
    title: "Insights & Business Value",
    description:
      "Communicate findings, recommend improvements, measure outcomes, and support adoption and continuous improvement.",
  },
]

const domainCards = [
  {
    title: "Healthcare & Health Insurance",
    type: "Primary Professional Domain",
    description:
      "Claims, member services, providers, revenue-cycle operations, data quality, reporting, compliance, and process improvement.",
  },
  {
    title: "Banking, Risk & Fraud",
    type: "Professional Experience",
    description:
      "Fraud monitoring, risk analysis, compliance requirements, controls, transaction reporting, governance, and operational analytics.",
  },
  {
    title: "Data & Business Intelligence",
    type: "Core Capability",
    description:
      "SQL analysis, Tableau, Power BI, data validation, KPI development, executive reporting, and data storytelling.",
  },
  {
    title: "AI & Process Transformation",
    type: "Growth Specialization",
    description:
      "AI readiness, use-case analysis, governance, human oversight, process automation, risk, adoption, and business value.",
  },
]

function SectionHeading({ eyebrow, title, description, theme }) {
  return (
    <div className="mb-12 max-w-4xl">
      <p
        className={`text-sm font-bold uppercase tracking-[0.25em] ${theme.accentText}`}
      >
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className={`mt-5 text-base leading-8 md:text-lg ${theme.muted}`}>
          {description}
        </p>
      )}
    </div>
  )
}

function App() {
  const [themeName, setThemeName] = useState("ivory")
  const theme = useMemo(() => themes[themeName], [themeName])

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${theme.page}`}
    >
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${theme.header}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Vineela Nimmala
          </a>

          <div className="hidden items-center gap-5 text-sm font-medium lg:flex">
            <a href="#about" className="transition hover:opacity-60">
              About
            </a>

            <a href="#experience" className="transition hover:opacity-60">
              Experience
            </a>

            <a href="#education" className="transition hover:opacity-60">
              Education
            </a>

            <a href="#approach" className="transition hover:opacity-60">
              Approach
            </a>

            <a href="#projects" className="transition hover:opacity-60">
              Projects
            </a>

            <a href="#contact" className="transition hover:opacity-60">
              Contact
            </a>
          </div>

          <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${theme.accent}`}
          >
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="relative px-5 py-16 md:px-8 md:py-24">
          <div
            className={`absolute -left-20 top-12 h-72 w-72 rounded-full opacity-40 blur-3xl ${theme.soft}`}
          />

          <div
            className={`absolute -right-20 bottom-12 h-72 w-72 rounded-full opacity-40 blur-3xl ${theme.soft}`}
          />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-8 flex flex-wrap gap-3">
                {Object.entries(themes).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setThemeName(key)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      themeName === key ? theme.accent : theme.outline
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <p
                className={`text-sm font-bold uppercase tracking-[0.25em] ${theme.accentText}`}
              >
                Business Analysis • Data Analytics • AI Transformation
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-[1.1] md:text-6xl">
                Hi, I’m Vineela Nimmala.
                <span className={`mt-3 block ${theme.accentText}`}>
                  I connect business needs, trusted data, and practical
                  technology solutions.
                </span>
              </h1>

              <p
                className={`mt-7 max-w-3xl text-lg leading-8 md:text-xl ${theme.muted}`}
              >
                Business Analyst and Data Analyst with 5+ years of experience
                across healthcare, banking, risk, fraud, data analytics, process
                improvement, reporting, governance, Agile delivery, and UAT.
              </p>

              <p className={`mt-5 max-w-3xl leading-8 ${theme.muted}`}>
                I translate complex operational problems into structured
                requirements, process improvements, trusted analytics,
                executive dashboards, and responsible AI-enabled solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className={`rounded-full px-6 py-3 font-semibold transition hover:-translate-y-1 ${theme.accent}`}
                >
                  Explore My Work
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-6 py-3 font-semibold transition ${theme.outline}`}
                >
                  LinkedIn
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className={`rounded-full border px-6 py-3 font-semibold transition ${theme.outline}`}
                >
                  Email Me
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div
                className={`overflow-hidden rounded-[2rem] border p-4 shadow-xl ${theme.card}`}
              >
                <img
                  src={profilePhoto}
                  alt="Vineela Nimmala"
                  className="h-[430px] w-full rounded-[1.5rem] object-cover object-top"
                />

                <div className="px-3 pb-3 pt-6">
                  <h2 className="text-2xl font-bold">Vineela Nimmala</h2>

                  <p className={`mt-2 font-semibold ${theme.accentText}`}>
                    Business Analyst | Data Analyst | AI Business Analyst
                  </p>

                  <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                    SQL • Tableau • Power BI • Healthcare • Process Improvement
                    • UAT • Data Quality • AI Readiness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`px-5 py-10 md:px-8 ${theme.section}`}>
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["5+ Years", "Business & Data Analysis"],
              ["3 Domains", "Healthcare, Banking & Analytics"],
              ["MS Degree", "Information Systems & Technology"],
              ["AI Focus", "Readiness, Governance & Automation"],
            ].map(([value, label]) => (
              <article
                key={value}
                className={`rounded-3xl border p-6 text-center ${theme.card}`}
              >
                <p className={`text-2xl font-bold ${theme.accentText}`}>
                  {value}
                </p>

                <p className={`mt-2 text-sm ${theme.muted}`}>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About Me"
              title="Business understanding supported by analytics, systems thinking, and responsible AI."
              description="My strength is not limited to creating documentation or dashboards. I connect stakeholder needs, business processes, data definitions, technical delivery, validation, and adoption into one structured approach."
              theme={theme}
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Business Analysis",
                  text: "Requirements elicitation, stakeholder workshops, process mapping, user stories, acceptance criteria, traceability, change management, and UAT.",
                },
                {
                  title: "Data Analytics",
                  text: "SQL, Python, Tableau, Power BI, data profiling, data validation, KPI development, reconciliation, trend analysis, and data storytelling.",
                },
                {
                  title: "AI Transformation",
                  text: "AI readiness, responsible AI requirements, use-case evaluation, governance, human oversight, process automation, risk, and ROI.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className={`rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-lg ${theme.card}`}
                >
                  <div
                    className={`mb-5 h-1.5 w-14 rounded-full ${theme.accent}`}
                  />

                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className={`px-5 py-20 md:px-8 ${theme.section}`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Professional Journey"
              title="Experience across healthcare, analytics, banking, risk, and compliance."
              description="The timeline below presents my experience in reverse chronological order using the employment dates from my resume."
              theme={theme}
            />

            <div className="relative">
              <div
                className={`absolute bottom-0 left-[23px] top-0 hidden w-1 rounded-full md:block ${theme.line}`}
              />

              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <article
                    key={experience.company}
                    className="relative md:pl-20"
                  >
                    <div
                      className={`absolute left-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full text-sm font-bold md:flex ${theme.accent}`}
                    >
                      {index + 1}
                    </div>

                    <div
                      className={`rounded-[2rem] border p-7 md:p-9 ${theme.card}`}
                    >
                      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                        <div>
                          <p
                            className={`text-sm font-bold uppercase tracking-[0.18em] ${theme.accentText}`}
                          >
                            {experience.domain}
                          </p>

                          <h3 className="mt-3 text-2xl font-bold">
                            {experience.company}
                          </h3>

                          <p className={`mt-2 font-semibold ${theme.accentText}`}>
                            {experience.role}
                          </p>
                        </div>

                        <span
                          className={`w-fit rounded-full border px-4 py-2 text-sm font-semibold ${theme.pill}`}
                        >
                          {experience.duration}
                        </span>
                      </div>

                      <p className={`mt-6 leading-8 ${theme.muted}`}>
                        {experience.summary}
                      </p>

                      <div className="mt-7 grid gap-4 md:grid-cols-2">
                        {experience.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className={`rounded-2xl p-4 ${theme.soft}`}
                          >
                            <p className="text-sm leading-7">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation in information systems and healthcare."
              description="My education combines enterprise information systems with a healthcare and pharmaceutical foundation."
              theme={theme}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {education.map((item, index) => (
                <article
                  key={item.degree}
                  className={`rounded-[2rem] border p-8 ${theme.card}`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold ${theme.accent}`}
                    >
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>

                      <p className={`mt-2 font-semibold ${theme.accentText}`}>
                        {item.institution}
                      </p>

                      <p className={`mt-1 text-sm ${theme.muted}`}>
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span
                      className={`rounded-full border px-4 py-2 text-sm font-semibold ${theme.pill}`}
                    >
                      {item.duration}
                    </span>
                  </div>

                  <p className={`mt-6 leading-8 ${theme.muted}`}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="domains" className={`px-5 py-20 md:px-8 ${theme.section}`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Domain Coverage"
              title="Professional depth with cross-domain analytical capability."
              description="Healthcare is my strongest domain, supported by professional experience in banking, fraud, risk, compliance, data analytics, and enterprise transformation."
              theme={theme}
            />

            <div className="grid gap-6 md:grid-cols-2">
              {domainCards.map((domain) => (
                <article
                  key={domain.title}
                  className={`rounded-3xl border p-7 ${theme.card}`}
                >
                  <span
                    className={`rounded-full border px-3 py-2 text-xs font-bold ${theme.pill}`}
                  >
                    {domain.type}
                  </span>

                  <h3 className="mt-6 text-xl font-bold">{domain.title}</h3>

                  <p className={`mt-4 leading-8 ${theme.muted}`}>
                    {domain.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="My Delivery Flow"
              title="From business problem to measurable business value."
              description="This flowchart presents how I connect business analysis, data analysis, solution design, validation, and adoption."
              theme={theme}
            />

            <div className="relative">
              <div
                className={`absolute bottom-8 left-7 top-8 w-1 rounded-full md:left-1/2 md:-translate-x-1/2 ${theme.line}`}
              />

              <div className="space-y-8">
                {workFlow.map((item, index) => {
                  const isLeft = index % 2 === 0

                  return (
                    <div
                      key={item.step}
                      className="relative grid gap-5 pl-20 md:grid-cols-2 md:pl-0"
                    >
                      <div
                        className={`absolute left-0 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-full font-bold md:left-1/2 md:-translate-x-1/2 ${theme.accent}`}
                      >
                        {item.step}
                      </div>

                      <div
                        className={`${
                          isLeft
                            ? "md:col-start-1 md:pr-14"
                            : "md:col-start-2 md:pl-14"
                        }`}
                      >
                        <article
                          className={`rounded-3xl border p-7 ${theme.card}`}
                        >
                          <h3 className="text-xl font-bold">{item.title}</h3>

                          <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                            {item.description}
                          </p>
                        </article>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className={`px-5 py-20 md:px-8 ${theme.section}`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills that connect business, data, delivery, and AI."
              description="The skills are grouped so recruiters and hiring managers can quickly understand my profile."
              theme={theme}
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(skills).map(([category, items]) => (
                <article
                  key={category}
                  className={`rounded-3xl border p-7 ${theme.card}`}
                >
                  <h3 className="text-xl font-bold">{category}</h3>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border px-3 py-2 text-xs font-semibold ${theme.pill}`}
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

        <section id="projects" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Selected Portfolio Work"
              title="Projects demonstrating business analysis, analytics, and AI thinking."
              description="These case studies show how I approach requirements, data, dashboards, governance, validation, and business value."
              theme={theme}
            />

            <div className="grid gap-7 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`flex flex-col rounded-[2rem] border p-8 transition hover:-translate-y-1 hover:shadow-xl ${theme.card}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-bold ${theme.accent}`}
                    >
                      {project.number}
                    </div>

                    <span
                      className={`rounded-full border px-3 py-2 text-xs font-bold ${theme.pill}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p
                    className={`mt-7 text-xs font-bold uppercase tracking-[0.16em] ${theme.accentText}`}
                  >
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

                  <p className={`mt-5 leading-8 ${theme.muted}`}>
                    {project.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <span className={`font-bold ${theme.accentText}`}>
                          ✓
                        </span>

                        <p className={`text-sm leading-7 ${theme.muted}`}>
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

        <section id="contact" className={`px-5 py-20 md:px-8 ${theme.section}`}>
          <div className="mx-auto max-w-5xl">
            <div
              className={`rounded-[2.5rem] border p-9 text-center md:p-14 ${theme.card}`}
            >
              <p
                className={`text-sm font-bold uppercase tracking-[0.25em] ${theme.accentText}`}
              >
                Career Opportunities
              </p>

              <h2 className="mt-5 text-3xl font-bold md:text-5xl">
                Let’s connect and build meaningful business solutions.
              </h2>

              <p
                className={`mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg ${theme.muted}`}
              >
                Open to Business Analyst, Data Analyst, Business Systems
                Analyst, Healthcare Analyst, BI Analyst, and AI Business Analyst
                opportunities.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className={`rounded-full px-6 py-3 font-semibold transition hover:-translate-y-1 ${theme.accent}`}
                >
                  Email Me
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-6 py-3 font-semibold transition ${theme.outline}`}
                >
                  LinkedIn Profile
                </a>

                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-6 py-3 font-semibold transition ${theme.outline}`}
                >
                  Download Resume
                </a>
              </div>

              <div className={`mt-9 text-sm leading-7 ${theme.muted}`}>
                <p>{EMAIL}</p>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:underline"
                >
                  linkedin.com/in/vineela-nimmala-901471300
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 text-center text-sm opacity-60 md:px-8">
        © 2026 Vineela Nimmala • Business Analysis • Data Analytics • AI
        Transformation
      </footer>
    </div>
  )
}

export default App