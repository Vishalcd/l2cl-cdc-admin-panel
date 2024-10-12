function StudentStatus({ status }) {
  return (
    <span
      className={`${
        status
          ? "dark:text-green-200 dark:bg-green-900  text-green-600 bg-green-200"
          : "dark:text-red-200 dark:bg-red-900 text-red-600 bg-red-200"
      }  	 min-w-24 px-3  font-medium  w-max rounded-full text-center text-sm`}>
      {status ? "Active" : "Unactive"}
    </span>
  );
}

export default StudentStatus;
