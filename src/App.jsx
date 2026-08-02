const skills = [
  "Business Analysis",
  "Healthcare Analytics",
  "Requirements Gathering",
  "Process Mapping",
  "SQL",
  "Tableau",
  "Power BI",
  "Agile & UAT",
  "AI Readiness",
  "AI Governance",
]

const projects = [
  {
    title: "Healthcare Claims Analytics",
    description:
      "A healthcare analytics case study focused on claims volume, denial trends, turnaround time, first-pass resolution, and operational reporting.",
    tags: ["Tableau", "SQL", "Claims", "UAT"],
  },
  {
    title: "Healthcare AI Readiness Assessment",
    description:
      "A structured assessment covering business, process, data, people, governance, risk, human oversight, and measurable value before AI implementation.",
    tags: ["AI Readiness", "Governance", "Risk Analysis"],
  },
  {
    title: "Member Services Analytics",
    description:
      "An operational analytics solution designed to track member inquiries, response times, service categories, recurring issues, and process bottlenecks.",
    tags: ["Power BI", "Healthcare Operations", "Data Analysis"],
  },
]

const approach = [
  {
    number: "01",
    title: "Discover",
    text: "Understand stakeholders, business goals, current processes, pain points, and decision needs.",
  },
  {
    number: "02",
    title: "Define",
    text: "Translate business needs into requirements, process flows, KPIs, user stories, and acceptance criteria.",
  },
  {
    number: "03",
    title: "Validate",
    text: "Confirm data quality, business rules, reporting logic, and stakeholder expectations.",
  },
  {
    number: "04",
    title: "Deliver Value",
    text: "Support UAT, implementation, adoption, reporting, and measurable business outcomes.",
  },
]

function App() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Vineela Nimmala
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>

            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>

            <a
              href={`${baseUrl}Vineela_Nimmala_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden px-6 py-20 md:py-28"
        >
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-700/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Healthcare Business Analysis
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Turning healthcare business problems into
                <span className="block text-cyan-300">
                  data-driven and AI-enabled solutions.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Business Analyst at Molina Healthcare with experience in
                healthcare analytics, requirements gathering, SQL validation,
                Tableau, Power BI, process improvement, Agile delivery, UAT,
                and AI readiness.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Projects
                </a>

                <a
                  href={`${baseUrl}Vineela_Nimmala_Resume.pdf`}
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
                    src={`${baseUrl}photo.jpg`}
                    alt="Vineela Nimmala"
                    className="h-80 w-full rounded-[1.5rem] object-cover object-top"
                  />

                  <div className="px-2 pb-2 pt-5">
                    <h2 className="text-xl font-bold">Vineela Nimmala</h2>

                    <p className="mt-1 text-sm font-medium text-cyan-300">
                      Business Analyst at Molina Healthcare
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Healthcare Analytics • SQL • Tableau • Power BI • AI
                      Business Analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/60 px-6 py-10">
          <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            {[
              ["Healthcare", "Domain Expertise"],
              ["SQL & BI", "Data Validation"],
              ["Agile & UAT", "Delivery Support"],
              ["AI Readiness", "Transformation Focus"],
            ].map(([title, subtitle]) => (
              <div key={title}>
                <p className="text-lg font-bold">{title}</p>
                <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-20 text-slate-900">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              About Me
            </p>

            <div className="mt-5 grid gap-10 md:grid-cols-2">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                I connect business needs, healthcare processes, data, and
                technology.
              </h2>

              <div className="space-y-4 leading-7 text-slate-600">
                <p>
                  My work focuses on understanding business problems, gathering
                  and documenting requirements, analysing healthcare operations,
                  validating KPIs, supporting dashboard development, and helping
                  stakeholders make informed decisions.
                </p>

                <p>
                  I am particularly interested in how Artificial Intelligence
                  can improve healthcare processes responsibly through strong
                  data quality, human oversight, governance, risk controls, and
                  measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Core Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Healthcare, analytics, and AI transformation skills
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

        <section id="projects" className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Featured Case Studies
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Healthcare and AI Business Analysis projects
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              These projects use synthetic and non-confidential examples to
              demonstrate my approach to healthcare analytics, reporting,
              requirements, process improvement, UAT, and responsible AI.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-300/50"
                >
                  <div className="mb-6 h-1 w-16 rounded-full bg-cyan-300" />

                  <h3 className="text-xl font-bold">{project.title}</h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 text-slate-900">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              My Approach
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {approach.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <p className="text-sm font-bold text-blue-700">
                    {item.number}
                  </p>

                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900 to-slate-900 p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Open to Healthcare Business Analyst, Data Analyst, and AI Business
              Analyst opportunities
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Let us connect to discuss healthcare analytics, requirements,
              reporting, process improvement, and responsible AI transformation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:your-email@example.com"
                className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                LinkedIn
              </a>

              <a
                href={`${baseUrl}Vineela_Nimmala_Resume.pdf`}
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
        © 2026 Vineela Nimmala. Healthcare Analytics and AI Business Analysis
        Portfolio.
      </footer>
    </div>
  )
}

export default App