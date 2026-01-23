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
    <div className="min-h-screen bg-black text-white">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div className="flex justify-center p-4 sm:p-6 lg:p-10">
        <div className=" mt-8">
          {/* Hero Section */}
          <section id="about" className="scroll-mt-20">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-3">
                  Deev Savla
                </h1>
                <div className="text-lg text-zinc-400 font-medium">
                  Software Engineer
                </div>
              </div>

              <p className="text-base text-zinc-300 leading-relaxed max-w-2xl">
                I build reliable mobile and web experiences that stay fast under
                real-world traffic. Currently crafting production features for
                consumer apps and automating data-heavy backends.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://drive.google.com/file/d/1CSSMCrE181yBQmxWm_9TR521yytLHQXO/view?usp=sharing"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center gap-2.5 text-sm border border-zinc-800 bg-zinc-900 text-zinc-300 px-4 py-2.5 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-200">
                    <i className="fas fa-download group-hover:scale-110 transition-transform"></i>
                    <span className="font-medium">Resume</span>
                  </div>
                </a>

                <a
                  href="https://github.com/DeevSavla"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center gap-2.5 text-sm border border-zinc-800 bg-zinc-900 text-zinc-300 px-4 py-2.5 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-200">
                    <i className="fab fa-github group-hover:scale-110 transition-transform"></i>
                    <span className="font-medium">GitHub</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/deev-savla-67820a2b3/"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center gap-2.5 text-sm border border-zinc-800 bg-zinc-900 text-zinc-300 px-4 py-2.5 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-200">
                    <i className="fab fa-linkedin group-hover:scale-110 transition-transform"></i>
                    <span className="font-medium">LinkedIn</span>
                  </div>
                </a>

                <a
                  href="mailto:savla.deev@gmail.com"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center gap-2.5 text-sm border border-zinc-800 bg-zinc-900 text-zinc-300 px-4 py-2.5 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-200">
                    <i className="fas fa-envelope group-hover:scale-110 transition-transform"></i>
                    <span className="font-medium hidden sm:inline">
                      savla.deev@gmail.com
                    </span>
                    <span className="font-medium sm:hidden">Email</span>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-12"></div>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="space-y-8 border border-zinc-800 rounded-xl p-6 bg-gradient-to-br from-zinc-900/30 to-zinc-950/30">
              <div>
                <div className="font-semibold mb-4 text-zinc-200 text-base">
                  Languages
                </div>
                <Skills skills={skills.languages} />
              </div>

              <div className="h-px bg-zinc-800"></div>

              <div>
                <div className="font-semibold mb-4 text-zinc-200 text-base">
                  Technologies & Frameworks
                </div>
                <Skills skills={skills.technologies} />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mt-16 mb-16 scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
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
        </div>
      </div>
    </div>
  );
}
