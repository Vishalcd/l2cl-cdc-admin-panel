import { IconCheck, IconX } from "@tabler/icons-react";

function FeeStatus({ status }) {
  return (
    <div
      className={`font-medium rounded-full ${
        status
          ? "text-green-600 border border-green-200 bg-green-100"
          : " text-red-600 border border-red-200 bg-red-100"
      } px-[0.34rem] py-[0.30rem] leading-none flex  gap-1 items-center justify-center text-sm`}>
      <span
        className={`w-[1rem] h-[1rem] flex items-center justify-center aspect-square rounded-full ${
          status ? "bg-green-600" : "bg-red-600"
        } `}>
        {status ? (
          <IconCheck className=" text-zinc-50" width={10} widths={10} stroke={3} />
        ) : (
          <IconX className=" text-zinc-50" width={10} widths={10} stroke={3} />
        )}
      </span>
      <p className=" font-semibold pr-1">{status ? "Completed" : "Uncomplete"}</p>
    </div>
  );
}

export default FeeStatus;
