import Logo from "./Logo";
import Navigation from "./Navigation";

function Sidebar() {
  return (
    <aside className="row-span-full dark:border-stone-700	border-zinc-200 border-r flex flex-col">
      <Logo />
      <Navigation />
    </aside>
  );
}

export default Sidebar;
