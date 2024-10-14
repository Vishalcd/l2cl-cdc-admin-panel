import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    // set page to 1
    searchParams.get("page") && searchParams.set("page", "");
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex min-h-9 gap-1 items-center p-1.5 rounded-md border dark:bg-stone-800 dark:border-stone-700 bg-zinc-50 border-zinc-200 w-max ">
      {options.map((option) => {
        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            className={` hover:bg-violet-600 hover:text-zinc-50 font-semibold border-none w-max text-sm py-0.5 px-3  rounded-md ${
              currentFilter === option.value
                ? "bg-violet-600 text-zinc-50"
                : "dark:text-stone-200 text-zinc-800"
            }`}>
            {option.lable}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
