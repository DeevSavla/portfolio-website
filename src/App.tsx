import { useEffect, useState } from "react";
import buymore from "./assets/buymore.png";
import cue from "./assets/cue.png";
import dockter from "./assets/dockter.png";
import jspm from "./assets/jspm.png";
import lilp from "./assets/lilp.png";
import pm from "./assets/pm.png";
import sqllike from "./assets/sqllike.png";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export const Chip = (props: { text: string }) => {
  return (
    <div className="bg-[#18181b] border border-[#27272a] text-gray-300 px-3 py-1 rounded-full mr-2 mb-2 inline-block">
      {props.text}
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      title: "Dockter",
      description:
        "A container orchestration tool built on top of docker for multi-node distributed cloud environment",
      amworking: false,
      articleLink: "",
      link: "https://github.com/ayushmd/Dockter",
      stack: [
        "Go",
        "Docker Engine",
        "Sqlite",
        "Kafka",
        "GRPC",
        "MongoDB",
        "AWS",
      ],
      imgLink: dockter,
    },
    {
      title: "Cue",
      description:
        "Cue is a scheduler/time based reminder queue which notifies when message expires for a given TTL.",
      amworking: false,
      articleLink: "",
      link: "https://github.com/ayushmd/cue",
      stack: ["Go", "GRPC", "Heap", "PebbleDB"],
      imgLink: cue,
    },
    {
      title: "BuyMore.ai",
      description:
        "GenAI-powered conversational fashion outfit generator. Social trends meet 44k+ products. Elevate style with personalized outfit inspirations.",
      amworking: false,
      articleLink: "",
      link: "https://github.com/ayushmd/BuyMore.ai",
      stack: ["Flask", "MongoDB", "Falcon LLM", "Pinecone", "Reactjs"],
      imgLink: buymore,
    },
    {
      title: "SqlLike",
      description: "A sql-like query language parser.",
      amworking: false,
      articleLink: "",
      link: "https://github.com/ayushmd/sqlLike",
      stack: ["C++", "Lexer", "Parser - RDP", "AST"],
      imgLink: sqllike,
    },
    {
      title: "LiLP",
      description:
        "LiLP is a tool for local pdf operations like Merge, Split and Conversion from Pdf to Docx",
      amworking: false,
      articleLink: "",
      link: "https://github.com/ayushmd/LiLP",
      stack: ["Python", "Tkinter", "PyPDF2", "pdf2docx"],
      imgLink: lilp,
    },
    {
      title: "Jspm",
      description:
        "Jspm is a package manager for JavaScript that allows you to install and manage packages from the npm registry.",
      amworking: false,
      articleLink: "",
      link: "https://github.com/ayushmd/jspm",
      stack: ["Go", "semver parsing", "TUI", "Dependency Resolution"],
      imgLink: jspm,
    },
    {
      title: "go-ipc",
      description:
        "A go process managment library that gives ability to manage processes and communicate with them using system IPC.",
      amworking: true,
      articleLink: "",
      link: "https://github.com/ayushmd/go-ipc",
      stack: [],
      imgLink: pm,
    },
  ];

  const [showNav, setShowNav] = useState(false);
  const [showImages, setShowImages] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    languages: [
      { name: "C++", icon: <i className="fa-solid fa-code" /> },
      { name: "JavaScript", icon: <i className="fa-brands fa-js" /> },
      { name: "TypeScript", icon: <i className="fa-brands fa-js" /> }, // closest FA
      { name: "Java", icon: <i className="fa-brands fa-java" /> },
      { name: "Python", icon: <i className="fa-brands fa-python" /> },
      { name: "Rust", icon: <i className="fa-solid fa-gear" /> }, // no FA Rust icon
      { name: "SQL", icon: <i className="fa-solid fa-database" /> },
    ],

    technologies: [
      { name: "React.js", icon: <i className="fa-brands fa-react" /> },
      { name: "Node.js", icon: <i className="fa-brands fa-node-js" /> },
      { name: "Express.js", icon: <i className="fa-brands fa-node-js" /> }, // closest
      { name: "MongoDB", icon: <i className="fa-solid fa-database" /> }, // closest
      { name: "React Native", icon: <i className="fa-brands fa-react" /> },
      { name: "Docker", icon: <i className="fa-brands fa-docker" /> },
      { name: "Firebase", icon: <i className="fa-solid fa-fire" /> }, // closest
      { name: "Tailwind", icon: <i className="fa-solid fa-wind" /> }, // closest
      { name: "Signoz", icon: <i className="fa-solid fa-chart-line" /> }, // closest
    ],
  };

  return (
    <div className="flex justify-center min-h-screen p-4 sm:p-6 lg:p-10">
      <nav
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-md border border-white/10 px-3 sm:px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <a
            href="#about"
            className="hover:text-blue-400 transition-colors duration-200 whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-blue-400 transition-colors duration-200 whitespace-nowrap"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-blue-400 transition-colors duration-200 whitespace-nowrap"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-blue-400 transition-colors duration-200 whitespace-nowrap"
          >
            Projects
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/20 mx-2"></div>
          <a
            href="https://github.com/ayushmd"
            target="_blank"
            className="hover:text-blue-400 transition-colors duration-200 hidden md:block"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-base"></i>
          </a>
          <a
            href="https://linkedin.com/in/ayush-des"
            target="_blank"
            className="hover:text-blue-400 transition-colors duration-200 hidden md:block"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-base"></i>
          </a>
        </div>
      </nav>

      <div className="w-full max-w-6xl mt-4 lg:mx-64">
        <section id="about" className="scroll-mt-20 sm:scroll-mt-10">
          <div className="mx-2 sm:mx-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2 justify-between">
              <div className="text-2xl sm:text-3xl font-bold">Deev Savla</div>
            </div>

            <div className="mt-4">
              <p className="text-sm">
                I am a software engineer with a passion for building scalable
                applications, dev-tools, core and Cloud-native applications.
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
            <Experience
              name="MeeraAI Tech Solutions LLP"
              timeline="September 2025 - October 2025"
              descriptions={[
                "Developed the website’s authentication system, and social logins (Google, Facebook), and integrated an AI-powered chatbot for real-time user assistance — improved login speed by 40% and reduced unauthorized access.",
                "Built and optimized 10+ responsive, SEO-friendly web pages with intuitive navigation, fast loading speeds, and mobile compatibility — resulting in a 30% increase in overall user engagement.",
              ]}
              skills={["Flutter", "Node.js", "Javascript", "MongoDB"]}
            />

            <Experience
              name="Zeber"
              timeline="January 2025 - March 2025"
              descriptions={[
                "Developed the website’s authentication system, and social logins (Google, Facebook), and integrated an AI-powered chatbot for real-time user assistance — improved login speed by 40% and reduced unauthorized access.",
                "Built and optimized 10+ responsive, SEO-friendly web pages with intuitive navigation, fast loading speeds, and mobile compatibility — resulting in a 30% increase in overall user engagement.",
              ]}
              skills={["React.js", "Node.js", "Express.js", "MongoDB"]}
            />

            <Experience
              name="Rebase IT Labs"
              timeline="September 2024 - February 2025"
              descriptions={[
                "Configured and deployed SigNoz within a Docker containerized environment to collect and monitor logs and implemented a customized alerting mechanism to detect unhandled silent errors.",
                "Developed a React Native mobile application using Expo framework and NativeWind, featuring real-time notifications via FCM for alerts, along with designing and developing interactive, user-friendly screens.",
                "Created reusable headless React components, including generic, schema-driven forms to improve development efficiency and maintainability across the project.",
              ]}
              skills={["Expo - React Native", "Docker", "Signoz", "Firebase"]}
            />
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
            <div className="flex items-center text-xs sm:text-sm text-gray-400 gap-2">
              <div
                className="checkbox-apple cursor-pointer"
                onClick={() => {
                  setShowImages((prev) => !prev);
                  console.log("Show Images:", !showImages);
                }}
              >
                <input
                  className="yep"
                  id="check-apple"
                  type="checkbox"
                  checked={showImages}
                  onChange={() => {}}
                  onClick={(e) => e.stopPropagation()}
                />
                <label htmlFor="check-apple" className="cursor-pointer"></label>
              </div>
              <p>Show Images</p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="text-white border border-gray-300 rounded-lg relative shadow-sm"
              >
                {showImages && (
                  <img
                    src={project.imgLink}
                    alt=""
                    className="rounded-t-lg w-full h-32 sm:h-48 object-cover"
                  />
                )}

                <div className="p-4 sm:p-5 pb-4">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                    <div className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs sm:text-sm border border-gray-700 rounded-lg px-2 sm:px-3 py-1 whitespace-nowrap"
                    >
                      {project.link.includes("github.com") ? (
                        <>
                          <i className="fab fa-github text-white text-base"></i>
                          <span className="ml-2">GitHub</span>
                        </>
                      ) : (
                        <>
                          <i className="fas fa-globe text-white text-base"></i>
                          <span className="ml-2">Visit</span>
                        </>
                      )}
                    </a>
                  </div>

                  <div className="mt-2 text-gray-300 text-xs sm:text-sm leading-relaxed min-h-[60px] sm:min-h-[80px]">
                    {project.description.length > 120 ? (
                      <p>{project.description.substring(0, 120)}...</p>
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>

                  {project.amworking ? (
                    <div className="flex items-center text-xs sm:text-sm text-slate-400 mt-2">
                      <i className="fas fa-gears mr-2 "></i>
                      <span>Work in progress</span>
                    </div>
                  ) : (
                    <>
                      {project.articleLink !== "" && (
                        <div className="flex items-center text-xs sm:text-sm text-blue-400 cursor-pointer mt-2">
                          <span className="mr-2">Read Article</span>
                          <i className="fa-solid fa-chevron-right text-xs"></i>
                        </div>
                      )}
                    </>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.stack.map((st, idx) => (
                      <Chip text={st} key={idx} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-500 rounded-lg mt-8 sm:mt-12"></div>

        <footer className="text-center text-gray-400 py-6 sm:py-8 border-t border-gray-800 text-xs sm:text-sm">
          <p>Built with Vite and Tailwind CSS</p>
          <p className="mt-2">© 2025 Ayush Deshmukh</p>
        </footer>
      </div>
    </div>
  );
}
