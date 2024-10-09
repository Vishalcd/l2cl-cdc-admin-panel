function SpinnerMini({ moreClasses }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`${moreClasses} loader-mini`}></div>
    </div>
  );
}

export default SpinnerMini;
