import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import AddPlacement from "./AddPlacement";
import PlacementRow from "./PlacementRow";
import usePlacements from "./usePlacements";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

function PlacementTable() {
  const { data, isLoading } = usePlacements();

  if (isLoading) return <Spinner />;

  const { data: placements, totalResults } = data;

  if (!placements || !placements.length) return <Empty resource="Placements" />;

  return (
    <>
      <div className="mt-6 border  dark:border-stone-800 border-zinc-300 rounded-lg  overflow-hidden mb-4">
        <Row
          role="table"
          moreClasses="grid gap-2 content-center grid-cols-shiningStarsTable py-2.5 px-4 uppercase font-bold  text-zinc-700 dark:text-stone-300  ">
          <div></div>
          <div>Name</div>
          <div>Developer</div>
          <div>Salery</div>
          <div>Company</div>
          <div>Join on</div>
          <div></div>
        </Row>

        {placements.map((placement) => {
          return <PlacementRow placement={placement} key={placement._id} />;
        })}

        <Pagination count={totalResults} />
      </div>

      <AddPlacement />
    </>
  );
}

export default PlacementTable;
