import { IconSearch } from "@tabler/icons-react";

function Search({ moreClasses = "" }) {
  return (
    <form
      className={`${moreClasses} min-w-[12rem] flex items-center justify-between overflow-hidden rounded-full px-4 bg-zinc-50 border transition-all  focus-within:min-w-[13rem] focus-within:border-zinc-300 border-zinc-200`}>
      <input
        className="w-[90%] caret-current font-medium focus:outline-0 text-sm border-none bg-transparent py-2 outline-none px-2"
        type="text"
        placeholder="Search name"
      />
      <IconSearch className=" text-zinc-400" width={22} height={22} stroke={2} />
    </form>
  );
}

export default Search;
