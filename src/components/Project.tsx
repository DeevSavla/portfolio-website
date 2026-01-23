import { Chip } from "./Chip";

type ProjectProps = {
  title: string;
  githubLink: string;
  visitLink: string;
  imgLink?: string;
  description: any;
  stack: string[];
  amworking?: boolean;
  showImages?: boolean;
};

const Project = ({ title, githubLink,visitLink,imgLink, description, stack }: ProjectProps) => {
  
  return (
    <div className="rounded-xl mt-6 border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/50">
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SECTION – IMAGE */}
        <div className="w-full h-full">
          {imgLink ? (
            <img
              src={`${imgLink}?tr=w-600,h-500,fo-auto,q-auto`}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg border border-zinc-800 transition-transform duration-300 hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 text-sm">
              No Image
            </div>
          )}
        </div>

        {/* RIGHT SECTION – CONTENT */}
        <div className="flex flex-col justify-between">
          {/* Title + Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
            <h3 className="text-xl font-semibold text-white">{title}</h3>

            <div className="flex gap-2">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-lg transition-all duration-200 text-zinc-300 hover:text-white flex items-center gap-2"
                >
                  <i className="fa-brands fa-github" />
                  GitHub
                </a>
              )}

              {visitLink && (
                <a
                  href={visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-lg transition-all duration-200 text-zinc-300 hover:text-white flex items-center gap-2"
                >
                  <i className="fas fa-globe" />
                  Visit
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <ul className="mt-4 space-y-2 text-sm text-zinc-300 leading-relaxed list-disc ml-4">
            {description.map((desc:any, i:number) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((tech, i) => (
              <Chip key={i} text={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
