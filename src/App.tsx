import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";

export const Chip = (props: { text: string }) => {
  return (
    <div className="bg-[#18181b] border border-[#27272a] text-gray-300 px-3 py-1 rounded-full mr-2 mb-2 inline-block">
      {props.text}
    </div>
  );
};

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
                I build reliable mobile and web experiences that stay fast under real-world traffic. Currently crafting production features for consumer apps and automating data-heavy backends.
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
          </div>
          <Project
            title="Safar"
            link="https://github.com/DeevSavla/Safar"
            description={[
              "Designed and developed Safar, an AI-powered travel itinerary planner tailored for solo travelers, families, and groups, providing a web-based experience to simplify and personalize the trip planning process.",
              "Integrated features like smart itinerary generation using Gemini APIs, real-time collaboration, budget tracking, andinteractive mapping tools, enhancing user convenience and transforming the way people plan and experience travel.",
            ]}
            stack={[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Socket.io",
              "FastAPI",
            ]}
            amworking={false}
          />

          <Project
            title="LikhAI"
            link="https://github.com/DeevSavla/likhai"
            description={[
              "Designed and developed an AI-driven content collaboration platform for writers and filmmakers, providing real-time editing, automated scene descriptions, and context-aware suggestions to enhance narrative tone and engagement.",
              "Integrated multi-modal support (text, audio, and visual), version history tracking, and export capabilities for multiple formats, making content creation and publishing seamless.",
            ]}
            stack={[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "TinyMCE",
              "AI APIs",
            ]}
          />

          <Project
            title="Doctor Appointment System"
            link="https://github.com/DeevSavla/Doc_Appoinment_System" // replace
            description={[
              "Developed a role-based hospital management platform with secure JWT authentication, real-time doctor availability, and an AI-powered assistant (Medibot) to streamline patient interactions and appointment workflows.",
              "Engineered a dynamic React.js + Redux frontend, integrated RazorPay for secure payments, and optimized MongoDB queries for high-performance transactions and data retrieval.",
            ]}
            stack={[
              "React.js",
              "Express.js",
              "Node.js",
              "MongoDB",
              "Redux",
              "RazorPay",
              "JWT Auth",
            ]}
          />

          <Project
            title="Anonymous Message App"
            link="https://github.com/DeevSavla/message_app" 
            description={[
              "Built a real-time anonymous messaging platform using Next.js, providing an interactive UI with optimized performance, server-side rendering, and responsive design.",
              "Implemented OTP-based email verification via NodeMailer, integrated NextAuth for authentication, and incorporated Gemini APIs to generate intelligent, context-aware message suggestions improving engagement.",
            ]}
            stack={[
              "Next.js",
              "MongoDB",
              "NextAuth",
              "NodeMailer",
              "Gemini APIs",
              "SSR",
            ]}
          />
        </section>
      </div>
    </div>
  );
}
