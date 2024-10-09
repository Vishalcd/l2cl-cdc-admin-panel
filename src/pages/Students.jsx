import StudentsOperations from "../features/students/StudentsOperations";
import StudentTable from "../features/students/StudentsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Students() {
  return (
    <>
      <Row>
        <Heading>All Students</Heading>
        <StudentsOperations />
      </Row>
      <StudentTable />
    </>
  );
}

export default Students;
