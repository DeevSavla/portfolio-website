import { Chip } from "./Chip";

const Experience = ({ name, timeline, descriptions, skills}:{name:string, timeline:string, descriptions:any, skills:any}) => {
  return (
    <div className="border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-6 rounded-xl hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/50 group">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div className="text-lg font-semibold text-white group-hover:text-zinc-100 transition-colors">
            {name}
          </div>
          <div className="text-sm text-zinc-400 font-medium">
            {timeline}
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-zinc-300 leading-relaxed">
        {descriptions.map((desc:any, i:number) => (
          <li key={i} className="ml-4">{desc}</li>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill:any, i:number) => (
          <Chip key={i} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default Experience;