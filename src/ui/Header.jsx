import Row from "./Row";
import ToggleDark from "./ToggleDark";
import User from "./User";

function Header() {
  return (
    <header className="col-start-2 col-end-auto content-center flex justify-end px-20 dark:border-stone-700 border-zinc-200 border-b">
      <Row moreClasses="gap-2">
        <ToggleDark />

        <User />
      </Row>
    </header>
  );
}

export default Header;
