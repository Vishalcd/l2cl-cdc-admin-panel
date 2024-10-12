import { useSearchParams } from "react-router-dom";

import Empty from "../../ui/Empty";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import AddFaculty from "./AddFaculty";
import FacultyRow from "./FacultyRow";
import useFaculty from "./useFaculty";

function FacultyTable() {
  const { isLoading, facultys } = useFaculty();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!facultys || !facultys.length) return <Empty resource="Faculty" />;

  // 1) Filter
  const filterValue = searchParams.get("gender") || "all";

  let filteredFacultys;
  if (filterValue === "all") filteredFacultys = facultys;
  if (filterValue === "male")
    filteredFacultys = facultys.filter((faculty) => faculty.gender === "male");
  if (filterValue === "female")
    filteredFacultys = facultys.filter((faculty) => faculty.gender === "female");

  return (
    <>
      <div className="mt-6 border  dark:border-stone-800 border-zinc-300 rounded-lg  overflow-hidden mb-4">
        <Row
          role="table"
          moreClasses="grid content-center gap-2 grid-cols-facultyTable py-2.5 px-6 uppercase font-bold  text-zinc-700 dark:text-stone-300  ">
          <div></div>
          <div>Name</div>
          <div>Description</div>
          <div>Work</div>
          <div>Experiance Years</div>
          <div>Join on</div>
          <div></div>
        </Row>

        {filteredFacultys.map((faculty) => {
          return <FacultyRow faculty={faculty} key={faculty._id} />;
        })}
      </div>
      <AddFaculty />
    </>
  );
}

export default FacultyTable;
