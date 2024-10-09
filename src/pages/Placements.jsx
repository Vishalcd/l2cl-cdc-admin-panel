import PlacementOperations from "../features/placements/PlacementOperations";
import PlacementTable from "../features/placements/PlacementTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Placements() {
  return (
    <>
      <Row>
        <Heading>All Placements</Heading>
        <Row moreClasses="gap-4">
          <PlacementOperations />
        </Row>
      </Row>
      <PlacementTable />
    </>
  );
}

export default Placements;
