"use client";

import { useState, useCallback } from "react";

interface UseDisclosureHandlers {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useDisclosure = (
  initialValue: boolean = false,
): [boolean, UseDisclosureHandlers] => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => setIsOpen(false), []);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return [isOpen, { open, close, toggle }];
};
