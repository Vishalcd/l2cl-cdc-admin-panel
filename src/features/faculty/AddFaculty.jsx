import { IconPlus } from "@tabler/icons-react";

import ButtonPrimary from "../../ui/ButtonPrimary";
import Modal from "../../ui/Modal";
import CreateFacultyForm from "./CreateFacultyForm";

function AddFaculty() {
  return (
    <Modal>
      <Modal.Open opens="faculty-form">
        <ButtonPrimary>
          <IconPlus stroke={2} /> Add New Faculty
        </ButtonPrimary>
      </Modal.Open>
      <Modal.Window names="faculty-form">
        <CreateFacultyForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddFaculty;
