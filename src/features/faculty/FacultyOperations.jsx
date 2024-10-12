import Filter from "../../ui/Filter";
import Row from "../../ui/Row";

function FacultyOperations() {
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
    </Row>
  );
}

export default FacultyOperations;
