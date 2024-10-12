import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import Sort from "../../ui/Sort";

function EmployeesOperations() {
  return (
    <Row moreClasses=" gap-4">
      <Filter
        filterField="gender"
        options={[
          { value: "all", lable: "All" },
          { value: "male", lable: "Male" },
          { value: "female", lable: "Female" },
        ]}
      />
      <Sort
        options={[
          { value: "name", lable: "Sort by Name (A-Z)" },
          { value: "-name", lable: "Sort by Name (Z-A)" },
        ]}
      />
    </Row>
  );
}

export default EmployeesOperations;
