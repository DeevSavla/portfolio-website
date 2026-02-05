export const Chip = (props: { text: string }) => {
  return (
    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-white">
      {props.text}
    </div>
  );
};