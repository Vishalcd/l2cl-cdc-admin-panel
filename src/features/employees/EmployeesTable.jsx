import Pagination from "../../ui/Pagination";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import EmployeeRow from "./EmployeeRow";
import useEmployees from "./UseEmployees";

function EmployeesTable() {
  const { isLoading, data } = useEmployees();

  if (isLoading) return <Spinner />;

  const { data: employess, totalResults } = data;

  return (
    <div className="mt-6 border dark:border-stone-800 border-zinc-300 rounded-lg  overflow-hidden">
      <Row
        role="table"
        moreClasses="grid content-center grid-cols-employeeTable py-2.5 px-6 uppercase font-bold dark:text-stone-200  text-zinc-700  ">
        <div>ID</div>
        <div>Employee</div>
        <div>M. Number</div>
        <div>Work</div>
        <div>Join On</div>
        <div></div>
      </Row>

      {employess.map((employee) => {
        return <EmployeeRow employee={employee} key={employee._id} />;
      })}

      <Pagination count={totalResults} />
    </div>
  );
}

export default EmployeesTable;
