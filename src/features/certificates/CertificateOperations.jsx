import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import Sort from "../../ui/Sort";

function CertificateOperations() {
  return (
    <Row moreClasses=" gap-4">
      <Filter
        filterField="certificateType"
        options={[
          { value: "all", lable: "All" },
          { value: "certificate", lable: "Certificate" },
          { value: "work-experience", lable: "Work-Experience" },
        ]}
      />
      <Sort
        options={[
          { value: "experience", lable: "Sort by Experience (Low First)" },
          { value: "-experience", lable: "Sort by Experience (High First)" },
        ]}
      />
    </Row>
  );
}

export default CertificateOperations;
