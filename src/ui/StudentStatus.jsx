function StudentStatus({ status }) {
  return (
    <span
      className={`${
        status ? "text-green-600 bg-green-200" : "text-red-600 bg-red-200"
      }  	 min-w-24 px-3  font-medium  w-max rounded-full text-center text-sm`}>
      {status ? "Active" : "Unactive"}
    </span>
  );
}

export default StudentStatus;
