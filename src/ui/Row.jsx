function Row({ role = "", children, moreClasses = "" }) {
  return (
    <div role={role} className={`flex items-center justify-between ${moreClasses}`}>
      {children}
    </div>
  );
}

export default Row;
