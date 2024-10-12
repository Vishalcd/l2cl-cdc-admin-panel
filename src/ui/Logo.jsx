import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="w-full flex items-center justify-center py-3">
      <img
        src={`/img/${isDarkMode ? "logo-light" : "logo-dark"}.png`}
        alt=""
        width="120"
        height="120"
      />
    </div>
  );
}

export default Logo;
