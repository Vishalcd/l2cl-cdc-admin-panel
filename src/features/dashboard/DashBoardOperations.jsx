import Filter from "../../ui/Filter";

function DashBoardOperations() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "30", lable: "Last 30 Days" },
        { value: "60", lable: "Last 60 Days" },
        { value: "90", lable: "Last 90 Days" },
      ]}
    />
  );
}

export default DashBoardOperations;
