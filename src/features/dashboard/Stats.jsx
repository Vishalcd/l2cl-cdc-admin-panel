import {
  IconAntennaBars5,
  IconCash,
  IconTransactionRupee,
  IconUsersPlus,
} from "@tabler/icons-react";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helper";

function Stats({ statData }) {
  const { totalStudents, totalDeposited, totalTransaction, depositRate } = statData;
  return (
    <div className=" row-start-1 row-end-1 h-min col-start-1 col-end-[-1] grid md:grid-cols-4 sm:grid-cols-2  grid-rows-[6rem] gap-6 ">
      <Stat
        color="red"
        icon={<IconUsersPlus width={26} height={26} stroke={2} />}
        heading="Total Student">
        {totalStudents}
      </Stat>
      <Stat
        color="green"
        icon={<IconCash width={26} height={26} stroke={2} />}
        heading="Fee Deposit">
        {formatCurrency(totalDeposited)}
      </Stat>{" "}
      <Stat
        color="yellow"
        icon={<IconTransactionRupee width={26} height={26} stroke={2} />}
        heading="Transactions">
        {`${String(totalTransaction).padStart(2, "0")}`}
      </Stat>
      <Stat
        color="violet"
        icon={<IconAntennaBars5 width={26} height={26} stroke={2} />}
        heading="Fee Deposit Rate">
        {depositRate}%
      </Stat>
    </div>
  );
}

export default Stats;
