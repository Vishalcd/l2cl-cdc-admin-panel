function FormLable({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className=" dark:text-stone-400 text-zinc-600 font-medium tracking-tight cursor-pointer  flex items-center gap-2">
      {children}
    </label>
  );
}

export default FormLable;
