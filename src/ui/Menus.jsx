import { createContext, useContext, useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { IconDotsVertical } from "@tabler/icons-react";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({});

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ position, setPosition, close, open, openId }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { close, open, openId, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <ButtonIcon onClick={handleClick}>
      <IconDotsVertical stroke={2} />
    </ButtonIcon>
  );
}

function List({ children, id }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      className={` shadow-sm fixed min-w-36 border dark:border-stone-700  border-zinc-300 dark:bg-stone-900 bg-zinc-50 overflow-hidden rounded-md`}>
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClose() {
    onClick?.();
    close();
  }

  return (
    <li className=" font-medium text-sm dark:text-stone-200 text-zinc-800  [&:not(:last-child)]:border-b [&:not(:last-child)]:border-zinc-200  dark:[&:not(:last-child)]:border-stone-700  cursor-pointer">
      <button
        onClick={handleClose}
        className="  transition-all dark:bg-stone-800 dark:hover:bg-stone-900 bg-zinc-50 w-full hover:bg-zinc-100 px-5 py-2.5 flex items-center gap-2.5 focus:outline-0 dark:focus:bg-stone-800 focus:bg-zinc-200">
        <span className=" dark:text-stone-300 text-zinc-500"> {icon}</span>
        {children}
      </button>
    </li>
  );
}

Menus.Menu = Menus;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
