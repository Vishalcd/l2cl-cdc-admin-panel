import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClose(e) {
        if (e.key === "Escape" || (ref.current && !ref.current.contains(e.target))) {
          handler();
        }
      }

      document.addEventListener("keydown", handleClose, listenCapturing);
      document.addEventListener("click", handleClose, listenCapturing);

      return () => {
        document.removeEventListener("keydown", handleClose, listenCapturing);
        document.removeEventListener("click", handleClose, listenCapturing);
      };
    },
    [ref, handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
