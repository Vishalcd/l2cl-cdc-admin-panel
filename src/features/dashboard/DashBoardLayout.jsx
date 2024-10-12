import Spinner from "../../ui/Spinner";
import FeeChart from "./FeeChart";
import LastTransactions from "./LastTransactions";
import PopularCoursesChart from "./PopularCoursesChart";
import Stats from "./Stats";
import useStats from "./useStats";

function DashBoardLayout() {
  const { isLoading, stats, numDays } = useStats();

  if (isLoading) return <Spinner />;

  const statData = {
    totalStudents: stats.students[0].totalStudents,
    totalDeposited: stats.transaction[0].totalDeposited,
    totalTransaction: stats.transaction[0].totalTransaction,
    depositRate: stats.transaction[0].depositRate,
    allTransactions: stats.allTransactions,
    popularCourses: stats.popularCourses,
    lastTransactions: stats.lastTransactions,
  };

  return (
    <div className=" mt-6 min-h-max grid grid-cols-2 grid-rows-[min-content,0.6fr,1fr] gap-6">
      <Stats statData={statData} />
      <LastTransactions lastTransactions={statData.lastTransactions} />
      <PopularCoursesChart popularCourses={statData.popularCourses} />
      <FeeChart transactions={statData.allTransactions} numDays={numDays} />
    </div>
  );
}

export default DashBoardLayout;
