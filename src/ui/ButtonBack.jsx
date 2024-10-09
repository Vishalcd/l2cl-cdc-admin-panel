import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function ButtonBack({ to, children }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to, { replace: true })}
      className=" flex items-center rounded-md hover:text-violet-700 gap-1.5 text-violet-500 pr-2 py-1 leading-none font-semibold text-xl">
      <IconChevronLeft stroke={2} /> {children}
    </button>
  );
}

export default ButtonBack;
