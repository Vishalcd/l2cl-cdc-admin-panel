function Spinner({ moreClasses }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`${moreClasses} loader mt-40`}></div>
    </div>
  );
}

export default Spinner;
