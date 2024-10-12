import { formatDate } from "date-fns";

function RowTime({ children }) {
  return (
    <time className=" dark:text-stone-400 text-zinc-500 font-mono font-medium">
      {formatDate(children, "dd/MMM/yyyy")}
    </time>
  );
}

export default RowTime;
