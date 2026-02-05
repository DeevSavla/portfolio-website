import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { experience, projects } from "./utils/data";

export default function Home() {
  const skills = {
    languages: [
      { name: "C++", icon: <i className="fa-solid fa-code" /> },
      { name: "JavaScript", icon: <i className="fa-brands fa-js" /> },
      { name: "TypeScript", icon: <i className="fa-brands fa-js" /> },
      { name: "Java", icon: <i className="fa-brands fa-java" /> },
      { name: "Python", icon: <i className="fa-brands fa-python" /> },
      { name: "Rust", icon: <i className="fa-solid fa-gear" /> },
      { name: "SQL", icon: <i className="fa-solid fa-database" /> },
    ],

    technologies: [
      { name: "React.js", icon: <i className="fa-brands fa-react" /> },
      { name: "Node.js", icon: <i className="fa-brands fa-node-js" /> },
      { name: "Express.js", icon: <i className="fa-brands fa-node-js" /> },
      { name: "MongoDB", icon: <i className="fa-solid fa-database" /> },
      { name: "React Native", icon: <i className="fa-brands fa-react" /> },
      { name: "Docker", icon: <i className="fa-brands fa-docker" /> },
      { name: "Firebase", icon: <i className="fa-solid fa-fire" /> },
      { name: "Tailwind", icon: <i className="fa-solid fa-wind" /> },
      { name: "Signoz", icon: <i className="fa-solid fa-chart-line" /> },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div className="relative flex justify-center p-4 sm:p-6 lg:p-10">
        <div className="mt-4 w-full max-w-5xl">
          {/* Hero Section */}
          <section id="about" className="scroll-mt-20">
            <div className="grid gap-8 rounded-2xl bg-white p-10 shadow-md md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-center">
              {/* Left: Text content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Software Engineer • Full Stack
                  </div>
                  <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                    Deev Savla
                  </h1>
                </div>

                <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                  I design and ship fast, reliable mobile and web products that hold up
                  under real-world traffic with a focus on polished user experiences
                  and scalable, data-heavy backends.
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-base">📍</span>
                    <span>Mumbai, India</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-base">📞</span>
                    <span>+91 8850783854</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-base">✉️</span>
                    <span>savla.deev@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://drive.google.com/file/d/1CSSMCrE181yBQmxWm_9TR521yytLHQXO/view?usp=sharing"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-50 shadow-md transition-all duration-200 group-hover:bg-slate-800 group-hover:shadow-lg">
                      <span>My Resume</span>
                    </div>
                  </a>

                  <a
                    href="https://github.com/DeevSavla"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-white">
                      <span>GitHub</span>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/deev-savla-67820a2b3/"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-white">
                      <span>LinkedIn</span>
                    </div>
                  </a>

                  <a
                    href="https://leetcode.com/DeevSavla9"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-white">
                      <span>LeetCode</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Photo / avatar */}
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-slate-100 shadow-inner md:h-48 md:w-48 md:justify-self-end md:mr-2">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 text-4xl font-semibold text-slate-50 md:h-40 md:w-40">
                  DS
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="my-12 h-px bg-slate-200" />

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-20">
            <h2 className="mb-8 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <Experience
                  key={i}
                  name={exp.name}
                  timeline={exp.timeline}
                  descriptions={exp.descriptions}
                  skills={exp.skills}
                />
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mt-16 scroll-mt-20">
            <h2 className="mb-8 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Skills
            </h2>
            <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <div>
                <div className="mb-4 text-base font-semibold text-slate-900">
                  Languages
                </div>
                <Skills skills={skills.languages} />
              </div>

              <div className="h-px bg-slate-100" />

              <div>
                <div className="mb-4 text-base font-semibold text-slate-900">
                  Technologies & Frameworks
                </div>
                <Skills skills={skills.technologies} />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mt-16 scroll-mt-20">
            <h2 className="mb-8 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Projects
            </h2>
            <div>
              {projects.map((p, i) => (
                <Project
                  key={i}
                  title={p.title}
                  githubLink={p.githubLink}
                  imgLink={p.imgLink}
                  visitLink={p.visitLink}
                  description={p.description}
                  stack={p.stack}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mt-16 mb-20 scroll-mt-20">
            <div className="rounded-2xl bg-white px-6 py-8 shadow-md">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contact
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Let&apos;s build something users love
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                Open to roles where product reliability, performance, and shipping fast
                matter. Happy to share more work samples or dive into architecture.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="mailto:savla.deev@gmail.com"
                  className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow-md transition-colors duration-200 hover:bg-slate-800"
                >
                  Email me
                </a>
                <a
                  href="https://github.com/DeevSavla"
                  target="_blank"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition-colors duration-200 hover:border-slate-300 hover:bg-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/deev-savla-67820a2b3/"
                  target="_blank"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition-colors duration-200 hover:border-slate-300 hover:bg-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
