import { Chip } from "../App";

type ProjectProps = {
  title: string;
  link: string;
  imgLink?: string;
  description: any;
  stack: string[];
  amworking?: boolean;
  showImages?: boolean;
};

const Project = ({
  title,
  link,
  description,
  stack,
}: ProjectProps) => {
  const isGitHub = link.includes("github.com");

  return (
    <div className="rounded-lg mt-5 relative shadow-sm border border-black">
      <div className="p-4 sm:p-5 pb-4">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
          <div className="text-lg sm:text-xl font-semibold">{title}</div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-sm border text-center border-black p-2 rounded-lg py-1"
            >
              {isGitHub ? (
                <>
                  <div className="flex-2">
                    <i className="fa-brands fa-github items-center mr-1" />
                    <span className="text-center">GitHub</span>
                  </div>
                </>
              ) : (
                <>
                  <i className="fas fa-globe text-white text-base"></i>
                  <span className="ml-2">Visit</span>
                </>
              )}
            </a>
          )}
        </div>

        <div className="mt-3 sm:mt-2 p-5 flex flex-col gap-2 text-xs sm:text-sm leading-relaxed">
          {description.map((desc: any, i: number) => (
            <li key={i}>{desc}</li>
          ))}
        </div>

        <div className="flex flex-wrap gap-1">
          {stack.map((tech, i) => (
            <Chip key={i} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
