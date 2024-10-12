import { IconEdit, IconTrash } from "@tabler/icons-react";

import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import RowTime from "../../ui/RowTime";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Stack from "../../ui/Stack";
import CreateFacultyForm from "./CreateFacultyForm";
import useDeleteFaculty from "./useDeleteFaculty";
import Name from "../../ui/Name";
import RowGender from "../../ui/RowGender";
import RowInfo from "../../ui/RowInfo";

function FacultyRow({ faculty }) {
  const { isDeleting, deleteFaculty } = useDeleteFaculty();

  function handleDelete() {
    deleteFaculty(faculty._id);
  }

  return (
    <Row
      role="row"
      moreClasses="grid dark:bg-stone-800 gap-2 bg-zinc-50 content-center grid-cols-facultyTable py-3 px-6 text-base  text-zinc-600 dark:text-stone-200 border-t dark:border-stone-700 border-zinc-200">
      <div className="w-20 border border-zinc-400 dark:border-zinc-800  aspect-square rounded-md overflow-hidden">
        <img
          className="   object-cover"
          src={`http://localhost:8000/img/faculty/${faculty.photo}`}
          alt={`${faculty.name} faculty photo`}
        />
      </div>
      <Stack>
        <Name>{faculty.name}</Name>
        <RowGender>{faculty.gender}</RowGender>
      </Stack>
      <p className=" font-mono whitespace-nowrap overflow-hidden text-ellipsis w-[80%] dark:text-stone-300 text-zinc-500">
        {faculty.description}
      </p>
      <RowInfo>{faculty.work}</RowInfo>
      <span className=" flex items-center justify-center text-green-600 dark:text-green-200 font-medium dark:bg-green-900 bg-green-200 rounded-full px-4 py-1 w-max  text-sm">
        {faculty.experience} Year Experiance
      </span>
      <RowTime>{faculty.startDate}</RowTime>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={faculty._id}></Menus.Toggle>

          <Menus.List id={faculty._id}>
            <Modal.Open opens="edit">
              <Menus.Button icon={<IconEdit width={20} height={20} />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<IconTrash width={20} height={20} />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window names="edit">
            <CreateFacultyForm facultyToEdit={faculty} />
          </Modal.Window>

          <Modal.Window names="delete">
            <ConfirmDelete handleDelete={handleDelete} disabled={isDeleting} resource="Faculty" />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Row>
  );
}

export default FacultyRow;
