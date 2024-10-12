import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import Sort from "../../ui/Sort";

function PlacementOperations() {
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
          { value: "name", lable: "Sort by name (A-Z)" },
          { value: "-name", lable: "Sort by name (Z-A)" },
          { value: "salary", lable: "Sort by salary (low first)" },
          { value: "-salary", lable: "Sort by salary (high first)" },
        ]}
      />
    </Row>
  );
}

export default PlacementOperations;
