"use client";

import { useLocalStorage } from "@/hooks";
import { CLOUTERA_TOKEN } from "@/types/constants";
import { Fragment, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { getItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const isLoggedIn = !!getItem();

  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return <Fragment>{children}</Fragment>;
};
