export const Chip = (props: { text: string }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200">
      {props.text}
    </div>
  );
};