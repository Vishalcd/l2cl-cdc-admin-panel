import FacultyOperations from "../features/faculty/FacultyOperations";
import FacultyTable from "../features/faculty/FacultyTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Faculty() {
  return (
    <>
      <Row>
        <Heading>All Faculty</Heading>
        <FacultyOperations />
      </Row>
      <FacultyTable />
    </>
  );
}

export default Faculty;
