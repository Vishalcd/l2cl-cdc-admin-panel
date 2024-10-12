function RowGender({ children }) {
  return (
    <p
      className={` w-min h-min text-xs text-center min-w-16 py-0.5 px-2 uppercase leading-none font-semibold rounded-full ${
        children === "male" ? "bg-blue-200 text-blue-600" : "bg-pink-200 text-pink-600"
      }`}>
      {children}
    </p>
  );
}

export default RowGender;
