import AddCertificate from "../features/certificates/AddCertificate";
import CertificateOperations from "../features/certificates/CertificateOperations";
import CertificatesTable from "../features/certificates/CertificatesTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Certificates() {
  return (
    <>
      <Row>
        <Heading>All Certificates</Heading>
        <CertificateOperations />
      </Row>
      <CertificatesTable />
      <AddCertificate />
    </>
  );
}

export default Certificates;
