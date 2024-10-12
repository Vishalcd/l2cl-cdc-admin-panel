import {
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandReact,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

import Stack from "../../ui/Stack";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreatePlacementForm from "./CreatePlacementForm";
import useDeletePlacement from "./useDeletePlacement";
import Row from "../../ui/Row";
import Name from "../../ui/Name";
import RowTime from "../../ui/RowTime";
import RowGender from "../../ui/RowGender";
import RowInfo from "../../ui/RowInfo";

function PlacementRow({ placement }) {
  function handleDup() {
    console.log(window);
  }

  const { deletePlacement, isDeleting } = useDeletePlacement();

  return (
    <Row
      role="row"
      moreClasses=" grid gap-2 grid-cols-shiningStarsTable py-2.5 px-6 dark:bg-stone-800  bg-zinc-50  border-t border-zinc-200 dark:border-stone-700 content-center items-center">
      <div className="overflow-hidden bg-violet-100 border border-zinc-200 w-12 h-18">
        <img
          className=" dark:brightness-90"
          src={`http://localhost:8000/img/placements/${placement.photo}`}
          alt={`${placement.name} Placement picture`}
        />
      </div>
      <Stack>
        <Name>{placement.name}</Name>
        <RowGender>{placement.gender}</RowGender>
      </Stack>

      <div className="flex items-center gap-2 justify-start">
        {placement.developerRole === "php-dev" ? (
          <IconBrandPhp stroke={1} className="text-blue-800" />
        ) : placement.developerRole === "js-dev" ? (
          <IconBrandJavascript stroke={1} className="text-yellow-500" />
        ) : placement.developerRole === "react-dev" ? (
          <IconBrandReact stroke={1} className="text-blue-600" />
        ) : placement.developerRole === "laravel-dev" ? (
          <IconBrandLaravel stroke={1} className="text-red-700" />
        ) : (
          ""
        )}
        <span className=" uppercase tracking-tight font-semibold text-sm ">
          {placement.developerRole.split("-").at(0).toUpperCase()} Developer
        </span>
      </div>

      <p className="font-mono text-lg font-medium tracking-tighter text-green-700 bg-green-100 px-4 py-1 inline-block leading-none w-max rounded-full">
        {`${placement.salary.toFixed(2, 0)}`}
        <span className="text-base inline-block leading-none">/LPA</span>
      </p>

      <RowInfo>{placement.companyName}</RowInfo>

      <RowTime>{placement.createdAt}</RowTime>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={placement._id}></Menus.Toggle>

          <Menus.List id={placement._id}>
            <Modal.Open opens="edit">
              <Menus.Button onClick={handleDup} icon={<IconEdit width={20} height={20} />}>
                Edit
              </Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button onClick={handleDup} icon={<IconTrash width={20} height={20} />}>
                Delete
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window names="edit">
            <CreatePlacementForm placementToEdit={placement} />
          </Modal.Window>
          <Modal.Window names="delete">
            <ConfirmDelete
              handleDelete={() => deletePlacement(placement._id)}
              resource="Placement"
              disabled={isDeleting}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Row>
  );
}

export default PlacementRow;
