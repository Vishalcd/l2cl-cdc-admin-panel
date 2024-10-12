import { IconDownload, IconTrash } from "@tabler/icons-react";

import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteGallery from "./useDeleteGallery";

function GalleryCard({ gallery }) {
  const { isDeleting, deleteGallery } = useDeleteGallery();

  return (
    <div className=" w-full min-h-14 border dark:border-stone-700 border-zinc-200 relative cursor-pointer  overflow-hidden [&>*]:hover:opacity-100 [&>*]:hover:pointer-events-auto">
      <div className=" absolute z-10  bottom-2.5 right-2.5 flex items-center gap-2.5 opacity-0 pointer-events-none">
        <form action={`http://localhost:8000/api/v1/gallerys/${gallery._id}/download`}>
          <button className=" transition-colors dark:hover:bg-green-700 dark:bg-green-900 hover:bg-green-800 bg-green-700 p-1 rounded-full dark:text-stone-300 text-zinc-200 w-auto flex items-center gap-1 justify-center z-10 text-xs px-2 shadow-xl">
            <IconDownload
              className="text-zinc-100 dark:text-stone-300"
              stroke={2}
              width={18}
              hanging={18}
            />{" "}
            Download
          </button>
        </form>
        <Modal>
          <Modal.Open opens="delete-image">
            <button className=" transition-colors dark:hover:bg-red-700 dark:bg-red-900 hover:bg-red-800 bg-red-700 p-1 rounded-full aspect-square w-8 flex dark:text-stone-300 text-zinc-200 items-center shadow-xl justify-center z-10">
              <IconTrash
                className="text-zinc-100 dark:text-stone-300"
                stroke={2}
                width={18}
                hanging={18}
              />
            </button>
          </Modal.Open>

          <Modal.Window names="delete-image">
            <ConfirmDelete
              resource="Image"
              disabled={isDeleting}
              handleDelete={() => deleteGallery(gallery._id)}
            />
          </Modal.Window>
        </Modal>
      </div>

      <img
        src={`http://localhost:8000/img/gallery/${gallery.photo}`}
        alt={`${gallery.photo} gallery image`}
        className="  hover:scale-110 hover:rotate-1 transition-transform  hover:grayscale "
      />
    </div>
  );
}

export default GalleryCard;
