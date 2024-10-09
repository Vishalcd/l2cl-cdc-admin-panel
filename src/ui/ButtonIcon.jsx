function ButtonIcon({ children, onClick, moreClasses }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded flex items-center justify-center ${moreClasses}`}>
      {children}
    </button>
  );
}

export default ButtonIcon;
