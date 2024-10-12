import EmployeesOperations from "../features/employees/EmployeesOperations";
import EmployeesTable from "../features/employees/EmployeesTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Employees() {
  return (
    <>
      <Row>
        <Heading>All Employees</Heading>
        <EmployeesOperations />
      </Row>
      <EmployeesTable />
    </>
  );
}

export default Employees;
