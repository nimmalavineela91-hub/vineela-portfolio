const resumeFile = `${import.meta.env.BASE_URL}Vineela_Nimmala_Resume.pdf`
const profilePhoto = `${import.meta.env.BASE_URL}photo.jpg`

const LINKEDIN_URL = "https://www.linkedin.com/in/your-linkedin-profile/"
const EMAIL = "your-email@example.com"

const roleTargets = [
  {
    title: "Business Systems Analyst",
    description:
      "Business requirements, system workflows, process analysis, stakeholder collaboration, Agile delivery, UAT, and implementation support.",
  },
  {
    title: "Data & BI Analyst",
    description:
      "SQL validation, Tableau, Power BI, KPI design, dashboard requirements, operational reporting, and data-driven insights.",
  },
  {
    title: "Healthcare Business Analyst",
    description:
      "Healthcare operations, claims, member services, provider processes, compliance-aware requirements, reporting, and process improvement.",
  },
  {
    title: "AI Business Analyst",
    description:
      "AI readiness, use-case assessment, AI requirements, governance, human oversight, risk analysis, and measurable business value.",
  },
]

const domainExpertise = [
  {
    name: "Healthcare & Health Insurance",
    details:
      "Claims operations, member services, provider data, healthcare reporting, process improvement, privacy, and compliance-aware analysis.",
    type: "Professional Domain",
  },
  {
    name: "Data Analytics & Business Intelligence",
    details:
      "SQL validation, Tableau, Power BI, KPI frameworks, dashboard requirements, data quality, operational reporting, and business storytelling.",
    type: "Core Capability",
  },
  {
    name: "Banking & Financial Services",
    details:
      "Customer onboarding, KYC workflows, fraud and risk indicators, transaction monitoring, approvals, exceptions, and compliance reporting.",
    type: "Portfolio Case Study",
  },
  {
    name: "Retail & E-commerce",
    details:
      "Order lifecycle, inventory visibility, customer behavior, fulfillment performance, returns, operational KPIs, and dashboard analysis.",
    type: "Portfolio Case Study",
  },
  {
    name: "HR & Workday",
    details:
      "Employee lifecycle, HR reporting, workflow analysis, approvals, data validation, service requests, and automation opportunities.",
    type: "Portfolio Case Study",
  },
  {
    name: "Customer Service & Operations",
    details:
      "Inquiry volumes, response time, service quality, case routing, recurring issues, self-service analytics, and process optimization.",
    type: "Portfolio Case Study",
  },
]

const skills = [
  "Business Analysis",
  "Business Systems Analysis",
  "Requirements Gathering",
  "Stakeholder Management",
  "Process Mapping",
  "Current-State & Future-State Analysis",
  "User Stories",
  "Acceptance Criteria",
  "Agile & Scrum",
  "UAT Planning",
  "SQL",
  "Tableau",
  "Power BI",
  "Data Validation",
  "KPI Design",
  "Data Quality",
  "Healthcare Analytics",
  "AI Readiness",
  "AI Governance",
  "Human-in-the-Loop AI",
  "AI Risk Analysis",
  "Process Automation",
]

const projects = [
  {
    category: "Healthcare Analytics",
    title: "Healthcare Claims Analytics & Operational Performance",
    problem:
      "Operations leaders needed better visibility into claims volume, turnaround time, denial trends, pending inventory, rework, and first-pass resolution.",
    solution:
      "Defined KPI requirements, validated reporting logic using SQL, designed Tableau views, supported UAT, and translated findings into operational recommendations.",
    tools: ["Tableau", "SQL", "Excel", "Jira", "UAT"],
    status: "Experience-Aligned Case Study",
  },
  {
    category: "AI Transformation",
    title: "Enterprise AI Readiness Assessment",
    problem:
      "An organization wanted to implement AI without a consistent method to evaluate business, process, data, people, risk, and governance readiness.",
    solution:
      "Created an AI-readiness framework covering business outcomes, process maturity, data quality, human oversight, governance, adoption, and ROI measures.",
    tools: ["AI Readiness", "Process Analysis", "Governance", "ROI"],
    status: "AI Business Analysis Case Study",
  },
  {
    category: "Banking & Risk",
    title: "Digital Customer Onboarding & Risk Analytics",
    problem:
      "Manual identity checks, inconsistent document validation, delayed exception reviews, and limited visibility created onboarding delays.",
    solution:
      "Mapped the onboarding workflow, defined business rules and exception paths, documented data requirements, and proposed dashboards for risk and turnaround-time monitoring.",
    tools: ["BPMN", "SQL", "Power BI", "Risk Analysis", "UAT"],
    status: "Synthetic Portfolio Case Study",
  },
  {
    category: "Retail & E-commerce",
    title: "Order Fulfillment & Inventory Performance Analytics",
    problem:
      "Business teams needed visibility into order delays, inventory availability, cancellations, returns, fulfillment methods, and delivery performance.",
    solution:
      "Defined operational KPIs, mapped the order lifecycle, identified bottlenecks, and designed a dashboard concept for fulfillment and inventory decisions.",
    tools: ["Tableau", "SQL", "Process Mapping", "KPI Design"],
    status: "Synthetic Portfolio Case Study",
  },
  {
    category: "HR & Workday",
    title: "Employee Service & HR Workflow Automation",
    problem:
      "HR service requests required multiple manual handoffs, unclear ownership, repetitive follow-ups, and fragmented reporting.",
    solution:
      "Documented current-state workflows, defined future-state routing and approval rules, identified automation opportunities, and created HR service KPIs.",
    tools: ["Workday", "Process Analysis", "Reporting", "Automation"],
    status: "Synthetic Portfolio Case Study",
  },
  {
    category: "Customer Operations",
    title: "Customer Service Analytics & AI-Assisted Case Routing",
    problem:
      "Support teams faced high inquiry volumes, inconsistent categorization, delayed routing, and limited visibility into recurring customer issues.",
    solution:
      "Defined case categories, routing rules, escalation paths, service-level KPIs, human-review points, and an AI-assisted operating model.",
    tools: ["Power BI", "AI Requirements", "Human Oversight", "SLA Analysis"],
    status: "Synthetic Portfolio Case Study",
  },
]

const approach = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand business goals, stakeholders, user needs, operational pain points, decisions, constraints, and expected outcomes.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Map current processes, review data, identify root causes, clarify business rules, and evaluate risks and dependencies.",
  },
  {
    number: "03",
    title: "Define",
    description:
      "Create requirements, future-state workflows, user stories, acceptance criteria, KPI definitions, and traceability.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Support data reconciliation, requirement reviews, testing, UAT, defect analysis, and stakeholder approval.",
  },
  {
    number: "05",
    title: "Deliver Value",
    description:
      "Measure adoption, cycle time, quality, customer experience, operational efficiency, risk reduction, and business value.",
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Vineela Nimmala
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>

            <a href="#roles" className="transition hover:text-cyan-300">
              Target Roles
            </a>

            <a href="#domains" className="transition hover:text-cyan-300">
              Domains
            </a>

            <a href="#projects" className="transition hover:text-cyan-300">
              Case Studies
            </a>

            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>

            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden px-6 py-20 md:py-28"
        >
          <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Business Analysis • Data Analytics • AI Transformation
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Turning complex business problems into
                <span className="mt-2 block text-cyan-300">
                  data-driven, process-focused, and AI-enabled solutions.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Business Analyst with experience in healthcare operations,
                requirements gathering, process improvement, SQL validation,
                Tableau, Power BI, Agile delivery, UAT, data analytics, and AI
                readiness.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                My portfolio combines professional healthcare experience with
                non-confidential, synthetic case studies across banking, retail,
                HR, customer operations, business intelligence, and enterprise
                AI transformation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Case Studies
                </a>

                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 to-blue-700/30 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                  <img
                    src={profilePhoto}
                    alt="Vineela Nimmala"
                    className="h-80 w-full rounded-[1.5rem] object-cover object-top"
                  />

                  <div className="px-2 pb-2 pt-5">
                    <h2 className="text-xl font-bold">Vineela Nimmala</h2>

                    <p className="mt-1 font-medium text-cyan-300">
                      Business Analyst | Data & AI Transformation
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Healthcare • SQL • Tableau • Power BI • Process
                      Improvement • UAT • AI Readiness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/60 px-6 py-10">
          <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Business Analysis", "Requirements & Processes"],
              ["Data Analytics", "SQL & BI"],
              ["Healthcare", "Domain Expertise"],
              ["Agile & UAT", "Delivery Support"],
              ["AI Transformation", "Readiness & Governance"],
            ].map(([title, subtitle]) => (
              <div key={title}>
                <p className="font-bold">{title}</p>
                <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-20 text-slate-900">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              About Me
            </p>

            <div className="mt-6 grid gap-12 md:grid-cols-2">
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                I connect business needs, processes, data, technology, and AI.
              </h2>

              <div className="space-y-5 leading-7 text-slate-600">
                <p>
                  My experience focuses on stakeholder collaboration,
                  requirements gathering, workflow analysis, operational
                  reporting, SQL-based data validation, dashboard requirements,
                  Agile delivery, and UAT.
                </p>

                <p>
                  Healthcare is my strongest professional domain. I also use
                  synthetic portfolio case studies to demonstrate how the same
                  Business Analysis methods can be applied across financial
                  services, retail, HR, customer operations, and enterprise
                  technology.
                </p>

                <p>
                  My current learning and portfolio development also focus on AI
                  readiness, responsible AI requirements, governance,
                  human-in-the-loop workflows, AI risk, automation, and
                  measurable value delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Target Roles
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-4xl">
              Roles aligned with my business, data, systems, and AI capabilities
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {roleTargets.map((role) => (
                <article
                  key={role.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 h-1 w-12 rounded-full bg-cyan-300" />

                  <h3 className="text-xl font-bold">{role.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {role.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="domains" className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Domain Coverage
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Professional expertise supported by cross-domain case studies
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {domainExpertise.map((domain) => (
                <article
                  key={domain.name}
                  className="rounded-3xl border border-white/10 bg-slate-950 p-6"
                >
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {domain.type}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{domain.name}</h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {domain.details}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Core Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Business, analytics, delivery, and AI transformation skills
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white px-6 py-20 text-slate-900">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Featured Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Multi-domain Business Analysis and analytics case studies
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Professional healthcare experience is presented separately from
              synthetic cross-domain case studies. No confidential employer,
              member, customer, provider, or production data is used.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{project.title}</h3>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Business Problem
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {project.problem}
                    </p>
                  </div>

                  <div className="mt-5 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      BA Solution
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {project.solution}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 border-t border-slate-200 pt-4 text-xs font-semibold text-blue-700">
                    {project.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Delivery Approach
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {approach.map((item) => (
                <article
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm font-bold text-cyan-300">
                    {item.number}
                  </p>

                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-900 to-slate-950 p-10 text-center md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Career Opportunities
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Open to Business Analyst, Business Systems Analyst, Data/BI
              Analyst, Healthcare BA, and AI Business Analyst opportunities
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">
              I bring healthcare-domain experience, structured Business
              Analysis, analytics, process improvement, dashboarding, Agile/UAT,
              and growing AI-transformation capabilities.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Email Me
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                LinkedIn
              </a>

              <a
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Vineela Nimmala. Business Analysis, Data Analytics, and AI
        Transformation Portfolio.
      </footer>
    </div>
  )
}

export default App