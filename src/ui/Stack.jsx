function Stack({ children, moreClasses }) {
  return <div className={`${moreClasses} flex gap-0.5 flex-col`}>{children}</div>;
}

export default Stack;
