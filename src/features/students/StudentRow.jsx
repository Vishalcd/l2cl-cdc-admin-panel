import { useNavigate } from "react-router-dom";

import { IconEye, IconFileCertificate, IconUserOff } from "@tabler/icons-react";

import Menus from "../../ui/Menus";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import StudentStatus from "../../ui/StudentStatus";
import Courses from "../../ui/Courses";
import { formatMobileNumber } from "../../utils/helper";
import useDeactivateStudent from "./useDeactivateStudent";
import RowTime from "../../ui/RowTime";
import RowUser from "../../ui/RowUser";
import CreateCertificateForm from "../certificates/CreateCertificateForm";

function StudentRow({ student }) {
  const { isDeactivating, deactivateStudent } = useDeactivateStudent();

  function handleDeactivate() {
    deactivateStudent(student._id);
  }

  const navigate = useNavigate();

  return (
    <Row
      role="row"
      moreClasses="grid dark:bg-stone-800 bg-zinc-50 content-center grid-cols-userTable py-3 px-6 text-base  text-zinc-600 dark:text-stone-200 border-t dark:border-stone-700 border-zinc-200">
      <RowUser photo={student.photo} name={student.name} email={student.email} />

      <Courses courses={student.courses} />

      <p className="font-mono leading-6 font-semibold">{formatMobileNumber(student.phoneNumber)}</p>

      <StudentStatus status={student.active} />

      <RowTime>{student.createdAt}</RowTime>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={student._id}></Menus.Toggle>

          <Menus.List id={student._id}>
            <Menus.Button
              onClick={() => navigate(`/students/${student._id}`)}
              icon={<IconEye width={20} height={20} />}>
              See Details
            </Menus.Button>

            <Modal.Open opens="add-certificate">
              <Menus.Button icon={<IconFileCertificate width={20} height={20} />}>
                Add Certificate
              </Menus.Button>
            </Modal.Open>

            <Modal.Open opens="deactivate">
              <Menus.Button icon={<IconUserOff width={20} height={20} />}>Deactivate</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window names="deactivate">
            <ConfirmDelete
              disabled={isDeactivating}
              type="Deactivate"
              handleDelete={handleDeactivate}
              resource="Student"
            />
          </Modal.Window>

          <Modal.Window names="add-certificate">
            <CreateCertificateForm customerToAdd={student} />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Row>
  );
}

export default StudentRow;
