export const Chip = (props: { text: string }) => {
  return (
    <div className="bg-[#18181b] border border-[#27272a] text-gray-300 px-3 py-1 rounded-full mr-2 mb-2 inline-block">
      {props.text}
    </div>
  );
};