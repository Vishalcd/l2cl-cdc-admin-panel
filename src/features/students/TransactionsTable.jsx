import { IconTransactionRupee } from "@tabler/icons-react";
import { useSearchParams } from "react-router-dom";

import TransactionRow from "./TransactionRow";
import { formatCurrency } from "../../utils/helper";
import Spinner from "../../ui/Spinner";
import useStudentTransactions from "./useTransactions";
import TransactionsOperations from "./TransactionsOperations";
import Empty from "../../ui/Empty";

function TransactionsTable({ student }) {
  const { isLoading, studentTranscations } = useStudentTransactions();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const {
    data: { data: transactions },
    results,
  } = studentTranscations;

  if (!transactions.length) return null;

  // Filtering
  const filterValue = searchParams.get("transactionMethod") || "all";
  let filteredTransactions;
  if (filterValue === "all") filteredTransactions = transactions;
  if (filterValue === "cash")
    filteredTransactions = transactions.filter(
      (transaction) => transaction.transactionMethod === "cash"
    );
  if (filterValue === "online")
    filteredTransactions = transactions.filter(
      (transaction) => transaction.transactionMethod === "online"
    );

  // sorting
  const [field, direction] = (searchParams.get("sort") || "createdAt-asc").split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const sortedTransactions = filteredTransactions.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <div className="w-full h-auto  mt-12 shadow-sm bg-zinc-50 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-violet-600 h-16 text-zinc-50 px-6">
        <p className=" text-xl flex items-center gap-6">
          <span className=" font-semibold flex items-center gap-3">
            <IconTransactionRupee width={26} height={26} stroke={2} /> {results} Transicitons
          </span>

          {student.remainingFees <= 0 && (
            <span className=" leading-none bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200 text-yellow-700 text-base font-medium px-3 py-1.5 rounded-full ">
              <span className=" font-mono">{formatCurrency(student.remainingFees)}</span> Remaining
            </span>
          )}
        </p>
        <div className="flex items-center gap-4">
          <TransactionsOperations />
        </div>
      </div>

      <div className="grid justify-center border-b dark:border-stone-950 border-violet-100 dark:bg-stone-700 bg-violet-50 grid-cols-[1fr,1fr,1.2fr,1.5fr,1fr,1fr] py-2.5 px-6 uppercase font-bold dark:text-stone-300  text-zinc-700 ">
        <div>ID</div>
        <div>Subject</div>
        <div>Amount</div>
        <div>Method</div>
        <div>Remainig Fee</div>
        <div>Date</div>
      </div>
      {!sortedTransactions.length && <Empty resource="Transactions" />}

      {sortedTransactions.map((transaction) => (
        <TransactionRow key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionsTable;
