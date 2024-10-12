function RowGender({ children }) {
  return (
    <p
      className={` w-min h-min text-xs text-center min-w-16 py-0.5 px-2 uppercase leading-none font-semibold rounded-full ${
        children === "male"
          ? "bg-blue-200 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
          : "bg-pink-200 text-pink-600 dark:bg-pink-900 dark:text-pink-200"
      }`}>
      {children}
    </p>
  );
}

export default RowGender;
