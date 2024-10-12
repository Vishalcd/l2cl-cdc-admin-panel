function ButtonPrimary({ moreClasses, children, onClick, style, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`${moreClasses} py-2 px-4 rounded-md bg-violet-600 h-10 gap-1 font-medium text-zinc-100 flex items-center justify-center text-sm hover:bg-violet-500 transition-colors`}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
