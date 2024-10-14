import { IconEdit, IconTrash } from "@tabler/icons-react";

import Row from "../../ui/Row";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateNoteForm from "./CreateNoteForm";
import useDeleteNote from "./useDeleteNote";
import { BASE_URL } from "../../utils/helper";

function NoteCard({ note }) {
  const { deleteNote, isDeleting } = useDeleteNote();

  function handleDeleteNote() {
    deleteNote(note._id);
  }

  return (
    <div className=" w-auto p-2 rounded-lg overflow-hidden border dark:bg-stone-800 dark:border-stone-700 bg-violet-50 border-zinc-200 shadow-[rgba(7,_65,_210,_0.05)_0px_9px_30px]">
      <div className="w-auto aspect-video">
        <img
          src={`${BASE_URL}img/pdfCover/${note.pdfCover}`}
          alt={`${note.pdfTitle} Note Thumbnail`}
          className=" rounded-md"
        />
      </div>
      <div className="mt-2 w-full p-2">
        <div className="flex">
          <ul className="flex items-center gap-1 top-2 left-2">
            {note.subject.split(",").map((sub, i) => {
              return (
                <li
                  key={i}
                  className={`leading-none py-1 px-2 rounded-full inline-block text-xs uppercase ${
                    sub === "bca-1-sem"
                      ? "bg-blue-600 dark:bg-blue-900"
                      : sub === "bca-2-sem"
                      ? "bg-green-600 dark:bg-green-900"
                      : sub === "bca-3-sem"
                      ? "bg-red-600 dark:bg-red-900"
                      : sub === "bca-4-sem"
                      ? "bg-yellow-600 dark:bg-yellow-900"
                      : sub === "bca-5-sem"
                      ? "bg-purple-700 dark:bg-purple-900"
                      : sub === "bca-6-sem"
                      ? "bg-violet-500 dark:bg-violet-900"
                      : ""
                  } text-zinc-100 dark:text-stone-300`}>
                  {sub}
                </li>
              );
            })}
          </ul>
        </div>
        <Row>
          <p className="text-lg font-semibold dark:text-stone-300 text-zinc-700">{note.pdfTitle}</p>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={note}></Menus.Toggle>

              <Menus.List id={note}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<IconEdit width={20} height={20} />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<IconTrash width={20} height={20} />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window names="edit">
                <CreateNoteForm noteToEdit={note} />
              </Modal.Window>
              <Modal.Window names="delete">
                <ConfirmDelete
                  disabled={isDeleting}
                  handleDelete={handleDeleteNote}
                  resource="Note"
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </Row>
      </div>
    </div>
  );
}

export default NoteCard;
