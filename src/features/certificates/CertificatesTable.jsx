import Empty from "../../ui/Empty";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import CertificateRow from "./CertificateRow";
import useCertificates from "./useCertificates";

function CertificatesTable() {
  const { isLoading, certificates } = useCertificates();

  if (isLoading) return <Spinner />;

  if (!certificates || !certificates.length) return <Empty resource="Certificate" />;

  return (
    <>
      <div className="mt-6 border  dark:border-stone-800 border-zinc-300 rounded-lg  overflow-hidden mb-4">
        <Row
          role="table"
          moreClasses="grid content-center gap-2 grid-cols-certificateTable py-2.5 px-6 uppercase font-bold  text-zinc-700 dark:text-stone-300  ">
          <div>ID</div>
          <div>User Details</div>
          <div>Type</div>
          <div>Total Experience</div>
          <div>Course</div>
          <div>Download</div>
          <div></div>
        </Row>

        {certificates.map((certificate) => {
          return <CertificateRow key={certificate._id} certificate={certificate} />;
        })}
      </div>
    </>
  );
}

export default CertificatesTable;
