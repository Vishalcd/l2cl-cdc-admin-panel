import Row from "../../ui/Row";
import StudentRow from "./StudentRow";
import Pagination from "../../ui/Pagination";
import useStudents from "./useStudents";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function StudentTable() {
  const { isLoading, data } = useStudents();
  if (isLoading) return <Spinner />;

  const { data: students, totalResults } = data;

  if (!students.length || !students) return <Empty resource="Student" />;

  return (
    <>
      <div className="mt-6 border dark:border-stone-800 border-zinc-300 rounded-lg  overflow-hidden">
        <Row
          role="table"
          moreClasses="grid content-center grid-cols-userTable py-2.5 px-4 uppercase font-bold dark:text-stone-200  text-zinc-700  ">
          <div></div>
          <div>Student</div>
          <div>Courses</div>
          <div>M. Number</div>
          <div>Status</div>
          <div>Join On</div>
          <div></div>
        </Row>

        {students.map((student) => (
          <StudentRow key={student._id} student={student} />
        ))}

        <Pagination count={totalResults} />
      </div>
    </>
  );
}

export default StudentTable;
