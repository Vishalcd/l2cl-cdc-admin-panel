import { IconMoon, IconSun } from "@tabler/icons-react";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleDark() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <IconSun className=" text-violet-400" stroke={2} />
      ) : (
        <IconMoon className=" text-violet-400" stroke={2} />
      )}
    </ButtonIcon>
  );
}

export default ToggleDark;
