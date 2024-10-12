function Name({ children }) {
  return (
    <span className="col-start-2 col-end-[-1] row-start-1 row-end-2 capitalize dark:text-stone-300 font-semibold text-[15px] leading-tight text-zinc-700 ">
      {children}
    </span>
  );
}

export default Name;
