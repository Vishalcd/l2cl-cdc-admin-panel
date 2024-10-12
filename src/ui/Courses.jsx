function Courses({ courses }) {
  return (
    <ul className="flex gap-1.5 flex-wrap items-center">
      {courses.map((course) => {
        return (
          <li
            key={course.courseName}
            className={` drop-shadow-sm w-max	 leading-none py-1 font-medium  px-2 rounded-full inline-block text-xs ${
              course.courseName === "bca"
                ? "bg-blue-800 dark:bg-blue-900"
                : course.courseName === "web-dev"
                ? "bg-green-800 dark:bg-green-900"
                : course.courseName === "bca-2"
                ? "bg-red-800 dar:bg-red-900"
                : course.courseName === "bca-3"
                ? "bg-yellow-600 dark:bg-yellow-900"
                : ""
            } text-zinc-100 dark:text-stone-300 uppercase`}>
            {course.courseName}
          </li>
        );
      })}
    </ul>
  );
}

export default Courses;
