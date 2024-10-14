import { useState } from "react";
import Stack from "./Stack";
import Logout from "../features/authentication/Logout";
import { BASE_URL } from "../utils/helper";

function User() {
  const [showMenu, setShowMenu] = useState(false);
  const {
    user: { name, photo },
  } = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      className="flex items-center gap-3 cursor-pointer self-stretch px-2 dark:hover:bg-stone-700 hover:bg-zinc-100 relative">
      <div className="w-10 aspect-square rounded-full  bg-violet-100">
        <img
          src={`${
            photo === "default.jpg" ? `/img/default-admin.jpg` : `${BASE_URL}img/users/${photo}`
          }`}
          alt={`${name} profile picture`}
          className=" rounded-full "
        />
      </div>
      <Stack>
        <h6 className="text-base  capitalize font-semibold leading-none dark:text-slate-200 text-zinc-700">
          {name.split(" ").at(0)}
        </h6>
        {/* <p className="text-sm text-zinc-500">Admin</p> */}
      </Stack>

      {showMenu && (
        <div className=" overflow-hidden shadow-[rgba(0,_0,_0,_0.05)_0px_25px_50px_-12px] top-full right-0 absolute min-w-36 rounded-lg transition-all z-10 border dark:border-stone-600 border-zinc-200 ">
          {/* <Link
            to="/profile"
            className=" dark:bg-stone-800 dark:border-stone-600 bg-zinc-50 [&:not(:last-child)]:border-b border-zinc-200 flex items-center gap-2 px-5 py-3 dark:text-stone-400 text-zinc-600 font-medium transition-all dark:hover:bg-stone-700 hover:bg-zinc-100">
            <IconUser className=" text-zinc-500" width={20} height={20} stroke={2} />
            Profile
          </Link> */}
          <Logout />
        </div>
      )}
    </div>
  );
}

export default User;
