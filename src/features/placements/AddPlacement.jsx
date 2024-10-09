import { IconPlus } from "@tabler/icons-react";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Modal from "../../ui/Modal";
import CreatePlacementForm from "./CreatePlacementForm";

function AddPlacement() {
  return (
    <Modal>
      <Modal.Open opens="placement-form">
        <ButtonPrimary>
          <IconPlus stroke={2} /> Add New Placement
        </ButtonPrimary>
      </Modal.Open>
      <Modal.Window names="placement-form">
        <CreatePlacementForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddPlacement;
