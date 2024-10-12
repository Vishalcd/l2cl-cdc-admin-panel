import { IconLogout } from "@tabler/icons-react";

import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { isLoading, logout } = useLogout();

  return (
    <button
      disabled={isLoading}
      onClick={logout}
      className="bg-zinc-50 dark:hover:bg-red-400 dark:bg-stone-800 disabled:opacity-100 [&:not:(:last-child)]:border-b border-zinc-200 flex items-center gap-2 px-5 py-3 text-red-600 font-medium transition-all w-full focus:outline-0 hover:bg-red-100">
      {isLoading || <IconLogout className=" text-red-500" width={20} height={20} stroke={2} />}
      {isLoading ? <SpinnerMini /> : "Logout"}
    </button>
  );
}

export default Logout;
