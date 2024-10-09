import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import Sort from "../../ui/Sort";

function TransactionsOperations() {
  return (
    <Row moreClasses=" gap-4">
      <Filter
        filterField="transactionMethod"
        options={[
          { value: "all", lable: "All" },
          { value: "cash", lable: "Cash" },
          { value: "online", lable: "Online" },
        ]}
      />
      <Sort
        options={[
          { value: "transactionAmount-asc", lable: "Sort by Amount (Low First)" },
          { value: "transactionAmount-desc", lable: "Sort by Amount (High First)" },
        ]}
      />
    </Row>
  );
}

export default TransactionsOperations;
