import { IconPlus } from "@tabler/icons-react";

import ButtonPrimary from "../../ui/ButtonPrimary";
import Modal from "../../ui/Modal";
import CreateImageForm from "./CreateImageForm";

function AddGalleryImage() {
  return (
    <div className="mt-4">
      <Modal>
        <Modal.Open opens="gallery-form">
          <ButtonPrimary>
            <IconPlus stroke={2} /> Add New Image
          </ButtonPrimary>
        </Modal.Open>
        <Modal.Window names="gallery-form">
          <CreateImageForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddGalleryImage;
