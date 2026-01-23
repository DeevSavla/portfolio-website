const Skills = ({ skills = [] }:{skills:any}) => {
  return (
     <div className="flex gap-3 flex-wrap items-center">
      {skills.map((skill:any, idx:number) => (
        <div
          key={idx}
          className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white font-medium text-sm gap-2.5 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 hover:scale-105"
        >
          <div className="text-zinc-400">{skill.icon}</div>
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
