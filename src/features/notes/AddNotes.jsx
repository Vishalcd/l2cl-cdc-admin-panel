import { IconPlus } from "@tabler/icons-react";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Modal from "../../ui/Modal";
import CreateNoteForm from "./CreateNoteForm";

function AddNotes() {
  return (
    <Modal>
      <Modal.Open opens="note-form">
        <ButtonPrimary>
          <IconPlus stroke={2} /> Add New Note
        </ButtonPrimary>
      </Modal.Open>
      <Modal.Window names="note-form">
        <CreateNoteForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddNotes;
