import Courses from "../../ui/Courses";
import { formatCurrency } from "../../utils/helper";
import { formatDate } from "date-fns";

function LastTransactions({ lastTransactions }) {
  return (
    <div className=" col-start-1 col-end-[2] dark:bg-stone-800 bg-zinc-50 rounded-md border-zinc-100 p-6 ">
      <h2 className=" dark:text-stone-200 font-semibold text-zinc-700 text-xl mb-5">
        Last Transactions
      </h2>

      <div className="w-full h-full">
        {lastTransactions.map((transaction) => {
          return (
            <div
              key={transaction._id}
              className=" border-t last-of-type:border-b dark:border-stone-700 border-zinc-200 px-2 min-h-16 grid items-center gap-4 grid-cols-[1.2fr,0.8fr,0.7fr,1.4fr]">
              <div className="flex flex-col">
                <Courses courses={transaction.courses} />
              </div>
              <span className=" flex items-center text-base gap-0 dark:text-green-600 text-green-700 font-medium font-mono">
                {formatCurrency(transaction.transactionAmount)}
              </span>
              <p className=" text-sm font-semibold">{transaction.userId.name.split(" ").at(0)}</p>
              <time className=" dark:text-stone-400 font-mono text-zinc-500">
                {formatDate(transaction.createdAt, "dd/MMM/yyyy")}
              </time>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LastTransactions;
