import { IconPlus } from "@tabler/icons-react";

import ButtonPrimary from "../../ui/ButtonPrimary";
import Modal from "../../ui/Modal";
import CreateCertificateForm from "./CreateCertificateForm";

function AddCertificate() {
  return (
    <Modal>
      <Modal.Open opens="certificate-form">
        <ButtonPrimary>
          <IconPlus stroke={2} /> Add New Certificate
        </ButtonPrimary>
      </Modal.Open>
      <Modal.Window names="certificate-form">
        <CreateCertificateForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCertificate;
