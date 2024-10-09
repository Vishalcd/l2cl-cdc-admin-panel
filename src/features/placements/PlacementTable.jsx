import { useSearchParams } from "react-router-dom";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import AddPlacement from "./AddPlacement";
import PlacementRow from "./PlacementRow";
import usePlacements from "./usePlacements";
import Empty from "../../ui/Empty";

function PlacementTable() {
  const { placements, isLoading } = usePlacements();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // 1) Filter
  const filterValue = searchParams.get("gender") || "all";

  let filteredPlacements;
  if (filterValue === "all") filteredPlacements = placements;
  if (filterValue === "male")
    filteredPlacements = placements.filter((placement) => placement.gender === "male");
  if (filterValue === "female")
    filteredPlacements = placements.filter((placement) => placement.gender === "female");

  // 2) Sort
  const sortBy = searchParams.get("sort") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedPlacements = filteredPlacements.sort((a, b) => {
    return typeof a[field] === "string"
      ? a[field].localeCompare(b[field]) * modifier
      : (a[field] - b[field]) * modifier;
  });

  if (!sortedPlacements || !sortedPlacements.length) return <Empty resource="Placements" />;

  return (
    <>
      <div className="mt-6 border  dark:border-stone-800 border-zinc-300 rounded-lg  overflow-hidden mb-4">
        <Row
          role="table"
          moreClasses="grid content-center grid-cols-shiningStarsTable py-2.5 px-4 uppercase font-bold  text-zinc-700 dark:text-stone-300  ">
          <div></div>
          <div>Name</div>
          <div>Developer</div>
          <div>Salery</div>
          <div>Company</div>
          <div>Join on</div>
          <div></div>
        </Row>

        {sortedPlacements.map((placement) => {
          return <PlacementRow placement={placement} key={placement._id} />;
        })}
      </div>

      <AddPlacement />
    </>
  );
}

export default PlacementTable;
