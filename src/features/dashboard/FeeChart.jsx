import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, formatDate, isSameDay, subDays } from "date-fns";

import { useDarkMode } from "../../context/DarkModeContext";

function FeeChart({ transactions, numDays }) {
  const { isDarkMode } = useDarkMode();

  const colors = isDarkMode
    ? {
        totalFees: { stroke: "#7c3aed", fill: "#7c3aed" },
        bca: { stroke: "#22c55e", fill: "#22c55e" },
        webDev: { stroke: "#eab308", fill: "#eab308" },
        text: "#a8a29e",
        background: "#292524",
      }
    : {
        totalFees: { stroke: "#7c3aed", fill: "#ddd6fe" },
        bca: { stroke: "#16a34a", fill: "#dcfce7" },
        webDev: { stroke: "#ca8a04", fill: "#fef08a" },
        text: "#3f3f46",
        background: "#fff",
      };

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      lable: formatDate(date, "MMM dd"),
      totalFees: transactions
        .filter((transaction) => {
          return isSameDay(date, new Date(transaction.createdAt));
        })
        .reduce((acc, transaction) => acc + transaction.transactionAmount, 0),

      bcaFee: transactions
        .filter((transaction) => {
          return isSameDay(date, new Date(transaction.createdAt));
        })
        .filter(
          (transaction, i) =>
            transaction.courses[i]?.courseName === "bca" ||
            transaction.courses[i]?.courseName === "bca-2" ||
            transaction.courses[i]?.courseName === "bca-3"
        )
        .reduce((acc, transaction) => acc + transaction.transactionAmount, 0),

      webDevFee: transactions
        .filter((transaction) => {
          return isSameDay(date, new Date(transaction.createdAt));
        })
        .filter((transaction, i) => transaction.courses[i]?.courseName === "web-dev")
        .reduce((acc, transaction) => acc + transaction.transactionAmount, 0),
    };
  });

  return (
    <div className=" col-start-1 col-end-[-1] dark:bg-stone-800 dark:border-stone-700 bg-zinc-50 rounded-md border border-zinc-200 p-10 ">
      <h2 className=" dark:text-stone-200 font-semibold text-zinc-700 text-xl mb-5">
        Fee Deposit from {formatDate(allDates.at(0), "MMM dd yyyy")} —{" "}
        {formatDate(allDates.at(-1), "MMM dd yyyy")}
      </h2>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} dataKey="lable" />
          <YAxis
            tick={{ fill: colors.text }}
            tickMargin={-1}
            tickLine={{ stroke: colors.text }}
            unit="₹"
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip contentStyle={{ background: colors.background }} />
          <Area
            dataKey="totalFees"
            type="monotone"
            stroke={colors.totalFees.stroke}
            fill={colors.totalFees.fill}
            strokeWidth={2}
            name="Total Fee"
            unit="₹"
          />
          <Area
            dataKey="webDevFee"
            type="monotone"
            stroke={colors.webDev.stroke}
            fill={colors.webDev.fill}
            strokeWidth={2}
            name="Web Fee"
            unit="₹"
          />
          <Area
            dataKey="bcaFee"
            type="monotone"
            stroke={colors.bca.stroke}
            fill={colors.bca.fill}
            strokeWidth={2}
            name="BCA Fee"
            unit="₹"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FeeChart;
