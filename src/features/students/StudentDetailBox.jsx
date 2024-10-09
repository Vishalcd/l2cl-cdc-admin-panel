function StudentDetailBox({ icon, children, heading }) {
  return (
    <div className=" dark:border-[rgba(255,255,255,0.05)] border-[rgba(1,1,1,0.05)] [&:not(:last-child)]:border-r p-4  grid-flow-col">
      <div className="grid grid-cols-[30px,1fr] gap-2 gap-y-0">
        <span className=" dark:border-[rgba(255,255,255,0.05)] border-[rgba(1,1,1,0.05)] p-1 rounded-full bg-violet-50 dark:bg-stone-700 dark:text-stone-200 text-zinc-900 w-8 flex items-center justify-center aspect-square">
          {icon}
        </span>
        <p className="font-bold text-base dark:text-stone-300 text-zinc-800 flex items-center gap-1 uppercase leading-none">
          {heading}
        </p>
        <span className=" col-start-2 -col-end-1 text-sm font-semibold dark:text-stone-400 text-zinc-500 flex items-center gap-2">
          {children}
        </span>
      </div>
    </div>
  );
}

export default StudentDetailBox;
