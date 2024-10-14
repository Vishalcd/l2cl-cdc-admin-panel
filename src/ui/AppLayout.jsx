import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className=" text-slate-900 dark:text-zinc-300 bg-zinc-50 dark:bg-stone-800  font-normal h-screen w-screen">
      <div className="grid grid-cols-[280px_1fr] grid-rows-[80px,_1fr] h-full">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default AppLayout;
