const Skills = ({ skills = [] }:{skills:any}) => {
  return (
    <div className="flex gap-2 sm:gap-4 flex-wrap items-center">
      {skills.map((skill:any, idx:number) => (
        <div
          key={idx}
          className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow"
        >
          <div>{skill.icon}</div>
          <div className="text-xs sm:text-sm">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
