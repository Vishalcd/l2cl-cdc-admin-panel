import DashBoardLayout from "../features/dashboard/DashBoardLayout";
import DashBoardOperations from "../features/dashboard/DashBoardOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row>
        <Heading>Dashboard</Heading>
        <DashBoardOperations />
      </Row>
      <DashBoardLayout />
    </>
  );
}

export default Dashboard;
