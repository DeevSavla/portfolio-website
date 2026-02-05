import { Chip } from "./Chip";

const Experience = ({
  name,
  timeline,
  descriptions,
  skills,
}: {
  name: string;
  timeline: string;
  descriptions: any;
  skills: any;
}) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        {/* Left: Logo + Role */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-base font-semibold text-slate-50">
            {initial}
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">
              {name}
            </div>
            {/* Company line could go here if separate from role */}
          </div>
        </div>

        {/* Right: Timeline pill + icon */}
        <div className="flex items-center gap-3 self-stretch sm:self-auto sm:justify-end">
          <div className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-slate-50">
            {timeline}
          </div>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 shadow-sm"
          >
            <i className="fa-solid fa-play text-[10px]" />
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-600 p-5">
        {descriptions.map((desc: any, i: number) => (
          <p key={i}>{desc}</p>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill: any, i: number) => (
          <Chip key={i} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default Experience;