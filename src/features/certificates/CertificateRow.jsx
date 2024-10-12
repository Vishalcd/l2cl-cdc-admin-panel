import { formatDate } from "date-fns";

import { IconCertificate, IconCertificate2, IconEdit, IconTrash } from "@tabler/icons-react";

import CertificateStatus from "../../ui/CertificateStatus";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Stack from "../../ui/Stack";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateCertificateForm from "./CreateCertificateForm";
import useDeleteCertificate from "./useDeleteCertificate";
import RowID from "../../ui/RowID";
import RowGender from "../../ui/RowGender";
import Name from "../../ui/Name";
import RowInfo from "../../ui/RowInfo";

function CertificateRow({ certificate }) {
  const { isDeleting, deleteCertificate } = useDeleteCertificate();

  function handleDelete() {
    deleteCertificate(certificate._id);
  }

  return (
    <Row
      role="row"
      moreClasses="grid dark:bg-stone-800 gap-2 bg-zinc-50 content-center grid-cols-certificateTable py-3 px-6 text-base  text-zinc-600 dark:text-stone-200 border-t dark:border-stone-700 border-zinc-200">
      <RowID>{certificate.certificateId}</RowID>
      <Stack>
        <div className="grid gap-x-4 grid-cols-[max-content,1fr] grid-rows-2">
          <span className=" self-center row-start-1 row-end-[-1]">
            <RowGender>{certificate.gender}</RowGender>
          </span>
          <Name>{certificate.name}</Name>
          <span className="col-start-2 col-end-[-1] row-start-2 row-end-[-1] w-full font-normal leading-tight text-sm justify-self-center dark:text-stone-400	 text-zinc-500">
            <b className=" uppercase font-bold text-xs tracking-tighter mr-2 dark:text-stone-500 text-zinc-500">
              {certificate.gender === "male" ? "S" : "D"}/O
            </b>
            {certificate.fatherName}
          </span>
        </div>
      </Stack>

      <p className=" font-medium text-sm leading-none flex items-center gap-2 min-w-20 rounded-full text-center  capitalize dark:text-violet-400 text-violet-600">
        {certificate.certificateType === "certificate" ? (
          <IconCertificate width={20} height={20} stroke={1.4} />
        ) : (
          <IconCertificate2 width={20} height={20} stroke={1.4} />
        )}
        {certificate.certificateType}
      </p>

      <Stack>
        <p className="font-semibold text-sm dark:text-green-500 text-green-600">
          {certificate.experience} Year of Experiance
        </p>
        <div className=" text-xs dark:text-stone-400 font-mono text-zinc-500 font-semibold  flex items-center gap-2">
          <time>{formatDate(certificate.startDate, "dd/MMM/yy")}</time>
          &mdash;
          <time>{formatDate(certificate.endDate, "dd/MMM/yy")}</time>
        </div>
      </Stack>

      <RowInfo>{certificate.course}</RowInfo>
      <CertificateStatus status={certificate.downloadPermission === "true"} />

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={certificate._id}></Menus.Toggle>

          <Menus.List id={certificate._id}>
            <Modal.Open opens="edit">
              <Menus.Button icon={<IconEdit width={20} height={20} />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<IconTrash width={20} height={20} />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window names="edit">
            <CreateCertificateForm certificateToEdit={certificate} />
          </Modal.Window>

          <Modal.Window names="delete">
            <ConfirmDelete
              disabled={isDeleting}
              handleDelete={handleDelete}
              resource="Certificate"
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Row>
  );
}

export default CertificateRow;
