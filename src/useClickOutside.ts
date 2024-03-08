import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  cb: (...args: unknown[]) => void
) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current) return;

      if (e.target instanceof Node && !ref.current.contains(e.target)) {
        cb();
      }
    }
    document.documentElement.addEventListener("click", handleClick, true);

    return () => {
      document.documentElement.removeEventListener("click", handleClick, true);
    };
  }, [cb, ref]);
}
