"use client";

import { usePathname } from "next/navigation";

export const useGetPageTitle = () => {
  const pathname = usePathname();

  return pathname.split("/").filter(Boolean).pop() || "";
};
