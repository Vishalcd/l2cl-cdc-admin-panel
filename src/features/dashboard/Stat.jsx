import { useDarkMode } from "../../context/DarkModeContext";

function Stat({ icon, heading, children, color = "green" }) {
  const { isDarkMode } = useDarkMode();

  const colors = isDarkMode
    ? {
        red: "bg-red-900 text-red-200",
        violet: "bg-violet-900 text-violet-200",
        green: "bg-green-900 text-green-200",
        yellow: "bg-yellow-900 text-yellow-200",
      }
    : {
        red: "bg-red-200 text-red-600",
        violet: "bg-violet-200 text-violet-600",
        green: "bg-green-200 text-green-600",
        yellow: "bg-yellow-200 text-yellow-600",
      };

  return (
    <div className="p-4 rounded-md border dark:bg-stone-800 dark:border-stone-700 border-zinc-100 bg-zinc-50 grid grid-cols-[4rem,1fr] gap-x-2.5 gap-y-1 grid-rows-[2rem,2rem] justify-center items-center content-center place-content-center">
      <span
        className={` flex items-center justify-center ${colors[color]}  rounded-full w-14 aspect-square row-span-1 col-start-1 col-end-2 row-start-1 row-end-3`}>
        {icon}
      </span>
      <h4 className=" self-end font-semibold text-xs dark:text-stone-400 text-zinc-500 uppercase  col-start-2 col-end-auto row-start-1 row-end-2">
        {heading}
      </h4>
      <p className=" leading-none  self-start text-2xl font-medium  col-start-2 col-end-auto row-start-2 row-end-auto">
        {" "}
        {children}
      </p>
    </div>
  );
}

export default Stat;
