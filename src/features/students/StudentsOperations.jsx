import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import Sort from "../../ui/Sort";

function StudentsOperations() {
  return (
    <Row moreClasses=" gap-4">
      <Filter
        filterField="active"
        options={[
          { value: "all", lable: "All" },
          { value: "true", lable: "Active" },
          { value: "false", lable: "Unactive" },
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

export default StudentsOperations;
