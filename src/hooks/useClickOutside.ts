"use client";

import { RefObject, useEffect } from "react";

export const useClickOutside = (
  refs: RefObject<HTMLElement | null>[],
  callback: () => void,
  isClickOutsideActive: boolean,
) => {
  useEffect(() => {
    if (!isClickOutsideActive) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = !refs.some(
        (ref) => ref.current && ref.current.contains(event.target as Node),
      );

      if (isOutside) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refs, callback, isClickOutsideActive]);
};
