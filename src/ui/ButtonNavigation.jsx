function ButtonNavigation({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded text-sm ${
        disabled ? "" : "hover:bg-violet-500 hover:text-zinc-100"
      }  py-1.5 px-2 font-medium  transition-colors flex justify-center items-center gap-1`}>
      {children}
    </button>
  );
}

export default ButtonNavigation;
