function Heading({ moreClasses, children, type = "h1" }) {
  return (
    <div role="row" className="w-full">
      {type === "h1" ? (
        <h1
          className={`${moreClasses} text-3xl font-semibold dark:text-zinc-200 text-zinc-800 flex items-center gap-2`}>
          {children}
        </h1>
      ) : (
        <h2 className=" text-2xl font-serif font-semibold text-center bg-gradient-to-br from-violet-200 via-violet-500  to-violet-800 bg-clip-text text-transparent ">
          {children}
        </h2>
      )}
    </div>
  );
}

export default Heading;
