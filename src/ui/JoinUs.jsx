import { format } from "date-fns";

function JoinUs({ date }) {
  return (
    <span className="px-6 py-2 rounded-full font-medium text-sm bg-violet-200 leading-none text-violet-600 flex items-center gap-2 justify-center ">
      <b className=" font-bold">Join US: </b>
      {format(date, "dd/MMM/yyyy")}
    </span>
  );
}

export default JoinUs;
