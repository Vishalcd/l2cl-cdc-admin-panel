import { useNavigate } from "react-router-dom";
import Menus from "../../ui/Menus";
import Row from "../../ui/Row";
import Stack from "../../ui/Stack";
import { IconEye, IconUserOff } from "@tabler/icons-react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { format } from "date-fns";
import StudentStatus from "../../ui/StudentStatus";
import Courses from "../../ui/Courses";
import { formatMobileNumber } from "../../utils/helper";
import useDeactivateStudent from "./useDeactivateStudent";

function StudentRow({ student }) {
  const { isDeactivating, deactivateStudent } = useDeactivateStudent();

  function handleDeactivate() {
    deactivateStudent(student._id);
  }

  const navigate = useNavigate();

  return (
    <Row moreClasses="grid dark:bg-stone-800 bg-zinc-50 content-center grid-cols-userTable py-3 px-6 text-base  text-zinc-600 dark:text-stone-200 border-t dark:border-stone-700 border-zinc-200">
      <div className="w-12 h-12 rounded-full  overflow-hidden">
        <img
          src={`/img/${student.photo}`}
          alt="user profile picture "
          className=" bg-red-100"
          width={100}
          height={100}
        />
      </div>
      <Stack>
        <p className=" font-semibold leading-none">{student.name}</p>
        <span className=" text-zinc-500 dark:text-stone-400 text-[13px]">{student.email}</span>
      </Stack>
      <Courses courses={student.courses} />

      <p className="font-mono leading-6 font-semibold">{formatMobileNumber(student.phoneNumber)}</p>

      <StudentStatus status={student.active} />

      <time className="font-mono text-base font-medium dark:text-zinc-300 text-zinc-500">
        {format(student.createdAt, "dd/MMM/yyyy")}
      </time>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={student._id}></Menus.Toggle>

          <Menus.List id={student._id}>
            <Menus.Button
              onClick={() => navigate(`/students/${student._id}`)}
              icon={<IconEye width={20} height={20} />}>
              See Details
            </Menus.Button>

            <Modal.Open opens="delete">
              <Menus.Button icon={<IconUserOff width={20} height={20} />}>Deactivate</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window names="delete">
            <ConfirmDelete
              disabled={isDeactivating}
              type="Deactivate"
              handleDelete={handleDeactivate}
              resource="Student"
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Row>
  );
}

export default StudentRow;
