import { formatDate } from "date-fns";

function RowTime({ children }) {
  return (
    <time className=" dark:text-stone-300 text-zinc-500 font-mono font-medium">
      {formatDate(children, "dd/MMM/yyyy")}
    </time>
  );
}

export default RowTime;
