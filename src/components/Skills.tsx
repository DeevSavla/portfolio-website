const Skills = ({ skills = [] }:{skills:any}) => {
  return (
     <div className="flex flex-wrap items-center gap-3">
      {skills.map((skill:any, idx:number) => (
        <div
          key={idx}
          className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
        >
          <div className="text-sky-500">{skill.icon}</div>
          <div className="tracking-tight">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
