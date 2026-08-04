import { useEffect, useState } from "react"

const baseUrl = import.meta.env.BASE_URL

const profilePhoto = `${baseUrl}photo.jpg`
const resumeFile = `${baseUrl}Vineela_Nimmala_Resume.pdf`

const EMAIL = "nimmalavineela91@gmail.com"

const LINKEDIN_URL =
  "https://www.linkedin.com/in/vineela-nimmala-901471300"

const PORTFOLIO_URL =
  "https://nimmalavineela91-hub.github.io/vineela-portfolio/"

const heroRoles = [
  "Business Analyst",
  "Data Analyst",
  "Business Systems Analyst",
  "AI Business Analyst",
  "Healthcare Analytics Professional",
]

const experiences = [
  {
    company: "Molina Healthcare",
    role: "Business Analyst & Data Analyst",
    duration: "Jan 2025 – Present",
    domain: "Healthcare & Health Insurance",
    summary:
      "Supporting healthcare business analysis, analytics, reporting, data quality, process improvement, stakeholder collaboration, Agile delivery, and UAT.",
    responsibilities: [
      "Facilitate stakeholder discussions and translate business needs into requirements, user stories, acceptance criteria, and traceability artifacts.",
      "Create AS-IS and TO-BE process flows, perform gap analysis, and identify operational improvement opportunities.",
      "Use SQL, Tableau, Power BI, Snowflake, BigQuery, and data-validation methods to support KPI reporting.",
      "Apply Claude and AI frameworks to support requirements documentation, analysis, user-story development, and reporting workflows.",
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
      "Supported healthcare claims, revenue-cycle, data integration, analytics, governance, reporting, and testing initiatives.",
    responsibilities: [
      "Collaborated with clinical operations, medical coding, payer, revenue-cycle, compliance, and data teams.",
      "Created BRDs, FRDs, source-to-target mappings, SOPs, business rules, test evidence, and UAT documentation.",
      "Analysed claims, payment, provider, member, and clinical data using SQL, Python, Power BI, and Tableau.",
      "Supported data quality, dimensional modelling, cloud data platforms, HIPAA controls, and analytical reporting.",
    ],
    technologies: [
      "SQL",
      "Python",
      "Databricks",
      "Snowflake",
      "Power BI",
      "Tableau",
      "Azure DevOps",
      "Data Quality",
    ],
  },
  {
    company: "Wipro",
    role: "Business Analyst",
    duration: "Jul 2020 – Aug 2021",
    domain: "Banking, Risk, Fraud & Compliance",
    summary:
      "Worked with risk, fraud, compliance, operations, and technology stakeholders on requirements, reporting, controls, testing, and governance.",
    responsibilities: [
      "Gathered and documented business and functional requirements for fraud, risk, compliance, and operational workflows.",
      "Created process flows, data mappings, traceability documents, decision records, and governance artifacts.",
      "Supported SQL analysis, fraud dashboards, testing, release readiness, and operational issue resolution.",
      "Developed fraud and chargeback reporting requirements using Tableau and Power BI.",
    ],
    technologies: [
      "SQL",
      "Tableau",
      "Power BI",
      "Python",
      "AWS",
      "Jira",
      "Confluence",
      "Risk Analysis",
    ],
  },
]

const certifications = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Generative AI",
    description:
      "Claude fundamentals, prompting practices, model capabilities, responsible use, and practical business applications.",
  },
  {
    title: "AI Fluency: Frameworks & Foundations",
    issuer: "Anthropic",
    category: "AI Fluency",
    description:
      "Frameworks for delegating work to AI, providing context, evaluating outputs, collaborating effectively, and applying AI responsibly.",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    category: "Applied AI",
    description:
      "Practical use of generative AI for productivity, prompt development, responsible use, and workplace problem-solving.",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "Data Analytics",
    description:
      "Core concepts in data preparation, transformation, analysis, visualization, interpretation, and data-driven decision-making.",
  },
]

const projects = [
  {
    number: "01",
    title: "AI-Assisted Healthcare Claims Denial Analytics",
    label: "Featured Project",
    status: "In Progress",
    description:
      "An end-to-end PostgreSQL and Tableau project analysing healthcare claims, denial rates, preventable denials, SLA breaches, rework, provider performance, and financial impact.",
    outcomes: [
      "Designed a relational healthcare claims database using PostgreSQL.",
      "Calculated total claims, denial rate, rework rate, SLA breaches, and preventable-denial KPIs.",
      "Analysed denial patterns by provider, procedure category, claim type, and submission month.",
      "Defined an AI-assisted pre-submission validation workflow with human review and governance controls.",
    ],
    skills: ["PostgreSQL", "SQL", "Tableau", "Healthcare", "AI Analysis"],
  },
  {
    number: "02",
    title: "Healthcare Claims Analytics & Data Quality",
    label: "Business Analysis",
    status: "Completed",
    description:
      "A structured business-analysis portfolio project covering requirements, stakeholder needs, process mapping, KPI definitions, dashboard requirements, validation, and UAT.",
    outcomes: [
      "Defined business objectives, scope, stakeholders, and reporting requirements.",
      "Created AS-IS and TO-BE process flows.",
      "Documented data-quality rules and dashboard KPI definitions.",
      "Created UAT scenarios, acceptance criteria, and traceability artifacts.",
    ],
    skills: ["BRD", "FRD", "UAT", "Data Quality", "Process Mapping"],
  },
  {
    number: "03",
    title: "Enterprise AI Readiness Assessment",
    label: "AI Business Analysis",
    status: "Case Study",
    description:
      "A structured framework for evaluating whether an organization is ready to implement AI responsibly and successfully.",
    outcomes: [
      "Evaluated business, process, data, people, technology, and governance readiness.",
      "Defined responsible AI requirements and human-review checkpoints.",
      "Identified risk controls, ownership, adoption needs, and success metrics.",
      "Connected AI opportunities with measurable business outcomes.",
    ],
    skills: [
      "AI Readiness",
      "Governance",
      "Responsible AI",
      "Risk Analysis",
      "AI ROI",
    ],
  },
  {
    number: "04",
    title: "Digital Customer Onboarding & Risk Analytics",
    label: "Banking Case Study",
    status: "Portfolio Project",
    description:
      "A cross-domain case study focused on customer onboarding, identity validation, KYC, risk indicators, exception management, and operational reporting.",
    outcomes: [
      "Mapped customer onboarding and exception-handling workflows.",
      "Defined requirements, business rules, risk indicators, and escalation paths.",
      "Outlined SQL and Power BI reporting requirements.",
      "Identified automation and human-review opportunities.",
    ],
    skills: ["Banking", "KYC", "Risk", "SQL", "Power BI"],
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
      "Gap Analysis",
      "Stakeholder Management",
      "Business Rules",
      "Change Management",
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
      "Airflow",
      "Azure Data Factory",
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
      "AI Governance",
      "Responsible AI",
      "Human-in-the-Loop",
      "AI Risk",
      "AI ROI",
    ],
  },
  {
    title: "Delivery & Testing",
    skills: [
      "Agile",
      "Scrum",
      "SAFe",
      "Jira",
      "Confluence",
      "UAT",
      "Defect Triage",
      "Release Readiness",
      "BPMN",
      "Process Mapping",
    ],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business problem, stakeholders, users, constraints, risks, and expected outcomes.",
  },
  {
    number: "02",
    title: "Define",
    text: "Translate business needs into requirements, user stories, business rules, process flows, and acceptance criteria.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Profile data, validate business logic, identify trends, define KPIs, and perform root-cause analysis.",
  },
  {
    number: "04",
    title: "Design",
    text: "Create future-state workflows, reporting requirements, dashboard concepts, and traceability.",
  },
  {
    number: "05",
    title: "Validate",
    text: "Support data reconciliation, functional testing, UAT, defect management, and stakeholder sign-off.",
  },
  {
    number: "06",
    title: "Deliver Value",
    text: "Communicate insights, recommend improvements, support adoption, and measure business outcomes.",
  },
]

function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-12 max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6142]">
        {label}
      </p>

      <h2 className="mt-5 text-4xl font-bold leading-tight text-[#27231f] md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-[#6f675f]">
          {description}
        </p>
      )}
    </div>
  )
}

function App() {
  const [activeRole, setActiveRole] = useState(0)
  const [activeExperience, setActiveExperience] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRole((current) => (current + 1) % heroRoles.length)
    }, 2600)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })

    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f3eb] text-[#27231f] selection:bg-[#8a6142] selection:text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#dbc8b3]/35 blur-[120px]" />
        <div className="absolute -right-32 top-[40%] h-96 w-96 rounded-full bg-[#eadcc9]/45 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#ded1c1] bg-[#f8f3eb]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7a563b] text-sm font-bold text-white">
              VN
            </span>

            <span className="hidden font-bold sm:block">Vineela Nimmala</span>
          </button>

          <div className="hidden items-center gap-6 text-sm font-medium text-[#5f574f] xl:flex">
            {[
              ["about", "About"],
              ["experience", "Experience"],
              ["projects", "Projects"],
              ["certifications", "Certifications"],
              ["skills", "Skills"],
              ["approach", "Approach"],
              ["contact", "Contact"],
            ].map(([sectionId, label]) => (
              <button
                key={sectionId}
                type="button"
                onClick={() => scrollToSection(sectionId)}
                className="transition hover:text-[#7a563b]"
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
              className="hidden rounded-full bg-[#7a563b] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#65452f] sm:inline-flex"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d7c8b6] bg-white/70 xl:hidden"
              aria-label="Open navigation"
            >
              <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#ded1c1] bg-[#fffaf4] px-5 py-5 xl:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["about", "About"],
                ["experience", "Experience"],
                ["projects", "Projects"],
                ["certifications", "Certifications"],
                ["skills", "Skills"],
                ["approach", "Approach"],
                ["contact", "Contact"],
              ].map(([sectionId, label]) => (
                <button
                  key={sectionId}
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  className="text-left text-sm font-medium text-[#5f574f]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ccb79f] bg-white/65 px-4 py-2 text-sm font-semibold text-[#76543c]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7a563b]" />
              Open to Business Analysis and Data Analytics opportunities
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6142]">
              Business Analysis • Data Analytics • AI Transformation
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.03] text-[#28231f] md:text-7xl">
              Hi, I’m
              <span className="block text-[#805b3f]">Vineela Nimmala.</span>
            </h1>

            <div className="mt-7 min-h-[48px] text-xl font-semibold text-[#5f574f] md:text-2xl">
              I’m a{" "}
              <span className="text-[#805b3f]">{heroRoles[activeRole]}</span>
              <span className="ml-1 animate-pulse text-[#805b3f]">|</span>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#6f675f]">
              I connect business needs, trusted data, process improvement, and
              practical technology solutions to help organizations make better
              decisions and deliver measurable value.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="rounded-full bg-[#7a563b] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#7a563b]/20 transition hover:-translate-y-1 hover:bg-[#65452f]"
              >
                Explore My Work
              </button>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#bda58c] bg-white/60 px-7 py-3.5 font-semibold text-[#6d4c35] transition hover:bg-[#eee2d4]"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-[#bda58c] bg-white/60 px-7 py-3.5 font-semibold text-[#6d4c35] transition hover:bg-[#eee2d4]"
              >
                Email Me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "SQL",
                "Power BI",
                "Tableau",
                "Healthcare",
                "Business Analysis",
                "AI Readiness",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d7c7b5] bg-white/55 px-4 py-2 text-xs font-semibold text-[#655d55]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#d9c2a8]/45 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#dccdbc] bg-white/75 p-4 shadow-2xl shadow-[#7a563b]/10 backdrop-blur-xl">
              <img
                src={profilePhoto}
                alt="Vineela Nimmala"
                className="h-[430px] w-full rounded-[1.5rem] object-cover object-top"
              />

              <div className="px-3 pb-3 pt-6">
                <h2 className="text-2xl font-bold">Vineela Nimmala</h2>

                <p className="mt-2 font-semibold text-[#805b3f]">
                  Business Analyst • Data Analyst • AI Business Analyst
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-[#e0d3c5] bg-[#fffaf4] p-4">
                    <p className="text-2xl font-bold text-[#805b3f]">5+</p>
                    <p className="mt-1 text-xs text-[#746b63]">
                      Years of Experience
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#e0d3c5] bg-[#fffaf4] p-4">
                    <p className="text-2xl font-bold text-[#805b3f]">4</p>
                    <p className="mt-1 text-xs text-[#746b63]">
                      AI & Data Certifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <SectionHeader
            label="About Me"
            title="Business understanding supported by data, systems thinking, and responsible AI."
            description="I translate complex business challenges into structured requirements, improved processes, trusted analytics, executive reporting, and practical technology solutions."
          />

          <div className="grid gap-5 lg:grid-cols-4">
            <article className="rounded-[2rem] border border-[#ddcfbf] bg-white/75 p-8 shadow-sm lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6142]">
                Professional Profile
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Business Analyst & Data Analyst
              </h3>

              <p className="mt-5 leading-8 text-[#6f675f]">
                I bring 5+ years of experience across healthcare, banking,
                risk, fraud, analytics, reporting, governance, Agile delivery,
                and UAT. I connect stakeholder needs, business processes, data,
                and technology into clear and actionable solutions.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#ddcfbf] bg-[#fffaf4] p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#86786c]">
                Primary Domain
              </p>

              <p className="mt-4 text-3xl font-bold text-[#805b3f]">
                Healthcare
              </p>

              <p className="mt-3 text-sm leading-7 text-[#6f675f]">
                Claims, members, providers, data quality, reporting, compliance,
                and operations.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#ddcfbf] bg-[#fffaf4] p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#86786c]">
                Growth Focus
              </p>

              <p className="mt-4 text-3xl font-bold text-[#805b3f]">
                AI + Analytics
              </p>

              <p className="mt-3 text-sm leading-7 text-[#6f675f]">
                AI readiness, governance, automation, responsible use, and
                business value.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#ddcfbf] bg-white/75 p-8 shadow-sm lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6142]">
                Education
              </p>

              <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    Master of Science in Information Systems and Technology
                  </h3>

                  <p className="mt-2 font-semibold text-[#805b3f]">
                    University of North Texas
                  </p>

                  <p className="mt-1 text-sm text-[#746b63]">
                    Denton, Texas • Graduated May 2025
                  </p>
                </div>

                <span className="w-fit rounded-full border border-[#cfbaa2] bg-[#efe3d5] px-4 py-2 text-sm font-semibold text-[#704e36]">
                  Master’s Degree
                </span>
              </div>

              <p className="mt-5 max-w-4xl leading-8 text-[#6f675f]">
                Graduate foundation in enterprise information systems,
                analytics, business processes, technology strategy,
                data-driven decision-making, and digital transformation.
              </p>
            </article>
          </div>
        </section>

        <section
          id="experience"
          className="border-y border-[#dfd2c3] bg-[#fffaf4] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              label="Experience"
              title="Professional journey"
              description="Experience across healthcare, claims analytics, banking, risk, fraud, compliance, reporting, and business transformation."
            />

            <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
              <div className="space-y-3">
                {experiences.map((experience, index) => (
                  <button
                    key={experience.company}
                    type="button"
                    onClick={() => setActiveExperience(index)}
                    className={`w-full rounded-2xl border p-5 text-left transition ${
                      activeExperience === index
                        ? "border-[#9c785b] bg-[#eadccc] shadow-sm"
                        : "border-[#ddcfbf] bg-white/65 hover:bg-[#f4e9dc]"
                    }`}
                  >
                    <p className="font-bold">{experience.company}</p>

                    <p className="mt-1 text-sm text-[#746b63]">
                      {experience.duration}
                    </p>
                  </button>
                ))}
              </div>

              <article className="rounded-[2rem] border border-[#ddcfbf] bg-white/80 p-7 shadow-sm md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a6142]">
                  {experiences[activeExperience].domain}
                </p>

                <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row">
                  <div>
                    <h3 className="text-3xl font-bold">
                      {experiences[activeExperience].company}
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-[#805b3f]">
                      {experiences[activeExperience].role}
                    </p>
                  </div>

                  <span className="h-fit w-fit rounded-full border border-[#cfbaa2] bg-[#efe3d5] px-4 py-2 text-sm font-semibold text-[#704e36]">
                    {experiences[activeExperience].duration}
                  </span>
                </div>

                <p className="mt-7 leading-8 text-[#6f675f]">
                  {experiences[activeExperience].summary}
                </p>

                <div className="mt-8 space-y-4">
                  {experiences[activeExperience].responsibilities.map(
                    (responsibility) => (
                      <div key={responsibility} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#805b3f]" />

                        <p className="leading-7 text-[#5f574f]">
                          {responsibility}
                        </p>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {experiences[activeExperience].technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#dbcab8] bg-[#fffaf4] px-3 py-2 text-xs font-semibold text-[#6f675f]"
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

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <SectionHeader
            label="Selected Work"
            title="Business analysis, analytics, and AI projects"
            description="Projects demonstrating how I connect requirements, data, dashboards, validation, governance, and measurable business outcomes."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[2rem] border border-[#ddcfbf] bg-white/75 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#a98465] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-4xl font-bold text-[#c5aa8e]">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-[#d4c1ad] bg-[#f2e7da] px-3 py-2 text-xs font-semibold text-[#704e36]">
                    {project.status}
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#8a6142]">
                  {project.label}
                </p>

                <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>

                <p className="mt-5 leading-8 text-[#6f675f]">
                  {project.description}
                </p>

                <div className="mt-7 space-y-3">
                  {project.outcomes.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="font-bold text-[#805b3f]">✓</span>

                      <p className="text-sm leading-7 text-[#5f574f]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#dbcab8] bg-[#fffaf4] px-3 py-2 text-xs font-semibold text-[#6f675f]"
                    >
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
          className="border-y border-[#dfd2c3] bg-[#fffaf4] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              label="Certifications"
              title="Continuous learning in AI and data analytics"
              description="These certifications strengthen my ability to use AI responsibly, improve analytical workflows, and translate emerging technology into practical business value."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {certifications.map((certification, index) => (
                <article
                  key={certification.title}
                  className="rounded-[2rem] border border-[#ddcfbf] bg-white/80 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7a563b] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6142]">
                        {certification.category}
                      </span>

                      <h3 className="mt-3 text-xl font-bold">
                        {certification.title}
                      </h3>

                      <p className="mt-2 font-semibold text-[#805b3f]">
                        {certification.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-[#6f675f]">
                    {certification.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <SectionHeader
            label="Skills"
            title="Business, data, delivery, and AI capabilities"
            description="Skills are grouped to make my experience easy for recruiters and hiring managers to understand."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-[#ddcfbf] bg-white/75 p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{group.title}</h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#dbcab8] bg-[#fffaf4] px-3 py-2 text-xs font-semibold text-[#6f675f]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="border-y border-[#dfd2c3] bg-[#fffaf4] px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              label="My Approach"
              title="From business problem to measurable value"
              description="A simple delivery flow showing how I connect business analysis, data analysis, solution design, validation, and adoption."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[2rem] border border-[#ddcfbf] bg-white/80 p-7 shadow-sm"
                >
                  <span className="text-sm font-bold text-[#8a6142]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#6f675f]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d8c6b3] bg-gradient-to-br from-[#eadcca] via-[#fffaf4] to-[#f0e4d6] p-9 text-center shadow-xl shadow-[#7a563b]/10 md:p-16">
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6142]">
                Let’s Connect
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                Let’s turn business challenges into meaningful solutions.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f675f]">
                Open to Business Analyst, Data Analyst, Business Systems
                Analyst, Healthcare Analyst, BI Analyst, and AI Business Analyst
                opportunities.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-full bg-[#7a563b] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#65452f]"
                >
                  Email Me
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#b99f84] bg-white/70 px-7 py-3.5 font-semibold text-[#6d4c35] transition hover:bg-[#eee2d4]"
                >
                  LinkedIn
                </a>

                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#b99f84] bg-white/70 px-7 py-3.5 font-semibold text-[#6d4c35] transition hover:bg-[#eee2d4]"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-10 space-y-2 text-sm text-[#7a7067]">
                <p>{EMAIL}</p>
                <p>linkedin.com/in/vineela-nimmala-901471300</p>
                <p>{PORTFOLIO_URL}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfd2c3] bg-[#f8f3eb] px-5 py-8 text-center text-sm text-[#82776d]">
        © 2026 Vineela Nimmala • Business Analysis • Data Analytics • AI
        Transformation
      </footer>
    </div>
  )
}

export default App