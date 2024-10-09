import { useSearchParams } from "react-router-dom";

function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <select
        onChange={handleChange}
        className="py-1.5 min-h-9 px-4 rounded-md border bg-transparent dark:text-stone-200 text-zinc-800 dark:bg-stone-800 bg-zinc-50 dark:border-stone-700 border-zinc-200 font-semibold text-sm">
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.lable}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
