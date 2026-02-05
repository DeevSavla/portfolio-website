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

const Project = ({ title, githubLink, visitLink, imgLink, description, stack }: ProjectProps) => {
  
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
      <div className="relative grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
        {/* LEFT SECTION – IMAGE */}
        <div className="relative z-10 h-full w-full">
          {imgLink ? (
            <img
              src={`${imgLink}?tr=w-600,h-500,fo-auto,q-auto`}
              alt={title}
              loading="lazy"
              className="h-full w-full rounded-xl border border-slate-200 object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              No Image
            </div>
          )}
        </div>

        {/* RIGHT SECTION – CONTENT */}
        <div className="relative z-10 flex flex-col justify-between">
          {/* Title + Buttons */}
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
            <h3 className="text-xl font-semibold text-slate-900">
              {title}
            </h3>

            <div className="flex gap-2">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
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
                  className="flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm text-slate-50 shadow-sm transition-all duration-200 hover:bg-sky-500"
                >
                  <i className="fas fa-globe" />
                  Visit
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <ul className="mt-4 ml-4 list-disc space-y-2 text-sm leading-relaxed text-slate-600">
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
