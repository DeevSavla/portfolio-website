import { Chip } from "../App";

const Experience = ({ name, timeline, descriptions, skills}:{name:string, timeline:string, descriptions:any, skills:any}) => {
  return (
    <div className="border border-black p-4 sm:p-5 rounded-lg shadow-sm relative">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
          <div className="text-base sm:text-lg font-semibold">
            {name}
          </div>
          <div className="text-xs sm:text-sm">
            {timeline}
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-2 p-5 flex flex-col gap-2 text-xs sm:text-sm leading-relaxed">
        {descriptions.map((desc:any, i:number) => (
          <li key={i}>{desc}</li>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1">
        {skills.map((skill:any, i:number) => (
          <Chip key={i} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default Experience;