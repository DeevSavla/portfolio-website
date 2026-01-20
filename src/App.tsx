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
    <div className="flex justify-center min-h-screen p-4 sm:p-6 lg:p-10">
      <div className="w-full max-w-6xl mt-4 lg:mx-64">
        <section id="about" className="scroll-mt-20 sm:scroll-mt-10">
          <div className="mx-2 sm:mx-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2 justify-between">
              <div className="text-2xl sm:text-3xl font-bold">Deev Savla</div>
            </div>

            <div className="mt-4">
              <p className="text-sm">
                I build reliable mobile and web experiences that stay fast under
                real-world traffic. Currently crafting production features for
                consumer apps and automating data-heavy backends.
              </p>
            </div>

            <div className="flex my-4 items-center gap-2 sm:gap-4 flex-wrap">
              <a
                href="https://drive.google.com/file/d/1CSSMCrE181yBQmxWm_9TR521yytLHQXO/view?usp=sharing"
                target="_blank"
              >
                <div className="cursor-pointer flex items-center gap-2 text-xs sm:text-sm border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition">
                  <i className="fas fa-download"></i>
                  <div>Resume</div>
                </div>
              </a>

              <a href="https://github.com/DeevSavla" target="_blank">
                <div className="cursor-pointer flex items-center gap-2 text-xs sm:text-sm border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition">
                  <i className="fab fa-github fa-lg"></i>
                  <div>Github</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/deev-savla-67820a2b3/"
                target="_blank"
              >
                <div className="cursor-pointer flex items-center gap-2 text-xs sm:text-sm border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition">
                  <i className="fab fa-linkedin fa-lg"></i>
                  <div>Linkedin</div>
                </div>
              </a>

              <a href="mailto:savla.deev@gmail.com" target="_blank">
                <div className="cursor-pointer flex items-center gap-2 text-xs sm:text-sm border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition">
                  <i className="fas fa-envelope fa-lg"></i>
                  <div className="hidden sm:block">savla.deev@gmail.com</div>
                  <div className="sm:hidden">Email</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-500 rounded-lg my-6 sm:my-8"></div>

        <section
          id="experience"
          className="my-6 sm:my-8 scroll-mt-20 sm:scroll-mt-10"
        >
          <div className="my-6 text-xl sm:text-2xl font-bold px-2 sm:px-0">
            Experience
          </div>

          <div className="w-full flex flex-col gap-4 sm:gap-6 px-2 sm:px-0">
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

        <section
          id="skills"
          className="my-6 sm:my-8 scroll-mt-20 sm:scroll-mt-10"
        >
          <div className="my-6 text-xl sm:text-2xl font-bold px-2 sm:px-0">
            Skills
          </div>

          <div className="space-y-6 border border-black rounded-lg p-4">
            <div>
              <div className="font-semibold mb-2 text-sm sm:text-base">
                Languages
              </div>
              <Skills skills={skills.languages} />
            </div>

            <div>
              <div className="font-semibold mb-2 text-sm sm:text-base">
                Technologies
              </div>
              <Skills skills={skills.technologies} />
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 sm:gap-6 px-2 sm:px-0"></div>
        </section>

        <section
          id="projects"
          className="my-6 scroll-mt-20 sm:scroll-mt-10 px-2 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xl sm:text-2xl font-bold">Projects</div>
          </div>
          {projects.map((p, i) => (
            <Project
              key={i}
              title={p.title}
              link={p.link}
              description={p.description}
              stack={p.stack}
              amworking={p.amworking}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
