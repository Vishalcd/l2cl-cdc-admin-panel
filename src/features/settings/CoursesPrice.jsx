import useCourse from "./useCourse";
import Spinner from "../../ui/Spinner";
import Courses from "../../ui/Courses";
import useUpdateCoursePrice from "./updateCoursePrice";

function CoursesPrice() {
  const { isLoading, courses } = useCourse();
  const { isUpdateing, updateCourse } = useUpdateCoursePrice();
  const isPending = isLoading || isUpdateing;

  if (isLoading) return <Spinner />;

  function handleUpdatePrice(newPrice, course) {
    const { _id: id } = course;
    const coursePrice = Number(newPrice);

    updateCourse({ id, data: { coursePrice } });
  }

  return (
    <div className="mt-6 p-10 rounded-lg bg-zinc-50 dark:bg-stone-800 min-h-24">
      <h2 className=" text-left text-2xl font-semibold mb-8 dark:text-stone-200  text-zinc-600">
        Update Courses Price
      </h2>

      <div className="grid grid-cols-1 gap-y-5 gap-x-3">
        {courses.map((course) => {
          return (
            <div key={course._id} className="  grid grid-cols-[12rem,1fr] items-center gap-2">
              <label
                className=" capitalize text-zinc-500 dark:text-stone-400  cursor-pointer font-medium"
                htmlFor={course.courseName}>
                Update {course.courseName} Price
              </label>
              <div className="w-96 border-zinc-200 dark:border-stone-700 focus-within:border focus-within:border-violet-300 px-3 flex items-center gap-4 rounded  border">
                <Courses courses={[course]} />
                <input
                  id={course.courseName}
                  name={course.courseName}
                  className=" bg-transparent dark:bg-stone-800 w-full py-2.5 px-2 focus:outline-0 "
                  type="text"
                  defaultValue={course.coursePrice}
                  placeholder="Enter Price"
                  disabled={isPending}
                  onBlur={(e) => handleUpdatePrice(e.target.value, course)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesPrice;
