import { IconFileCertificate, IconTrash } from "@tabler/icons-react";

import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import RowTime from "../../ui/RowTime";
import RowUser from "../../ui/RowUser";
import ConfirmDelete from "../../ui/ConfirmDelete";
import RowID from "../../ui/RowID";
import RowPhone from "../../ui/RowPhone";
import CreateCertificateForm from "../certificates/CreateCertificateForm";
import RowInfo from "../../ui/RowInfo";

function EmployeeRow({ employee }) {
  return (
    <Row
      role="row"
      moreClasses="grid dark:bg-stone-800 bg-zinc-50 content-center grid-cols-employeeTable py-3 px-6 text-base  text-zinc-600 dark:text-stone-200 border-t dark:border-stone-700 border-zinc-200">
      <RowID>{employee.enrollId}</RowID>

      <div className=" flex items-center gap-3">
        <RowUser
          photo={employee.photo}
          name={employee.name}
          email={employee.email}
          gender={employee.gender}
        />
      </div>

      <RowPhone>{employee.phoneNumber}</RowPhone>

      <RowInfo>Web Developemnt</RowInfo>

      <RowTime>{employee.createdAt}</RowTime>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={employee._id}></Menus.Toggle>

          <Menus.List id={employee._id}>
            <Modal.Open opens="add-certificate">
              <Menus.Button icon={<IconFileCertificate width={20} height={20} />}>
                Add Certificate
              </Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<IconTrash width={20} height={20} />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window names="add-certificate">
            <CreateCertificateForm customerToAdd={employee} />
          </Modal.Window>

          <Modal.Window names="delete">
            <ConfirmDelete resource="Employee" />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Row>
  );
}

export default EmployeeRow;
