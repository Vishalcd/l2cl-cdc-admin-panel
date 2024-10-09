import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="col-start-2 col-end-auto px-14 py-10 relative dark:bg-stone-900 bg-zinc-100 overflow-scroll no-scrollbar h-full">
      <div className="m-auto max-w-[1200px] min-h-full">
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
