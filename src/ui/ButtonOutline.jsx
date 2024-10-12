function ButtonOutline({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="py-2 px-4 rounded-md bg-transparent font-medium h-10 border dark:border-stone-700 border-zinc-200  gap-1 dark:text-stone-300 text-sm text-zinc-600 flex items-center justify-center transition-colors">
      {children}
    </button>
  );
}

export default ButtonOutline;
