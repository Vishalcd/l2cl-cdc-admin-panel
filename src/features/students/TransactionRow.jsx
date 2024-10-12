import { IconBrandCashapp, IconCash } from "@tabler/icons-react";

import { formatCurrency } from "../../utils/helper";
import Courses from "../../ui/Courses";
import FeeStatus from "../../ui/FeeStatus";
import RowTime from "../../ui/RowTime";
import RowID from "../../ui/RowID";

function TransactionRow({ transaction }) {
  return (
    <div className="grid grid-cols-[1fr,1fr,1.2fr,1.5fr,1fr,1fr] py-3 px-6 text-base dark:text-stone-300  text-zinc-600 border-b dark:border-stone-700 dark:bg-stone-800 border-zinc-200">
      <RowID>{transaction.transactionId}</RowID>

      <Courses courses={transaction.courses} />

      <span className=" flex items-center text-lg gap-0 dark:text-green-600 text-green-700 font-medium font-mono">
        {formatCurrency(transaction.transactionAmount)}
      </span>

      <p className=" font-medium text-sm dark:text-stone-300 text-zinc-600 flex items-center capitalize gap-1">
        <span className=" w-[28px]">
          {transaction.transactionMethod === "cash" ? (
            <IconCash className=" dark:text-green-600 text-green-800" stroke={1} />
          ) : (
            <IconBrandCashapp className=" dark:text-green-600 text-green-800" stroke={1} />
          )}
        </span>
        {transaction.transactionMethod} Payment
      </p>

      <span className=" flex items-center text-lg  leading-none  w-min rounded-full  gap-0 text-yellow-600  font-mono">
        {transaction.remainingFees === 0 ? (
          <FeeStatus status={true} />
        ) : (
          formatCurrency(transaction.remainingFees)
        )}
      </span>

      <RowTime>{transaction.createdAt}</RowTime>
    </div>
  );
}

export default TransactionRow;
