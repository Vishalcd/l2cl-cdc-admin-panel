import { createPortal } from "react-dom";
import ButtonIcon from "./ButtonIcon";
import { IconX } from "@tabler/icons-react";
import { cloneElement, createContext, useContext, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>{children}</ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, names }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (names !== openName) return null;

  return createPortal(
    <div className=" absolute w-dvw h-dvh inset-0 bg-black-rgba backdrop-blur-sm grid place-items-center">
      <div
        ref={ref}
        className="relative z-20 min-w-96 py-8 pt-10 px-10 rounded-2xl border dark:border-stone-800 border-zinc-200 dark:bg-stone-900 bg-stone-50 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] overflow-scroll no-scrollbar">
        <div className="absolute top-2 right-2">
          <ButtonIcon onClick={close}>
            <IconX className=" dark:text-stone-200" stroke={2} />
          </ButtonIcon>
        </div>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
