import Stack from "./Stack";
import Name from "./Name";
import RowGender from "./RowGender";
import { BASE_URL } from "../utils/helper";

function RowUser({ photo, name, email, gender }) {
  return (
    <>
      <div className="w-12 h-12 rounded-full  overflow-hidden">
        <img
          src={`${photo === "default.jpg" ? `/img/default.jpg` : `${BASE_URL}img/users/${photo}`}`}
          alt={`${name} Profile picture`}
          className=" bg-violet-100"
          width={100}
          height={100}
        />
      </div>

      <Stack>
        <div className="flex items-center gap-2">
          <Name>{name}</Name> {gender && <RowGender>{gender}</RowGender>}
        </div>
        <span className=" text-zinc-500 dark:text-stone-400 text-[13px]">{email}</span>
      </Stack>
    </>
  );
}

export default RowUser;
