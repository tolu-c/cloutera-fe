"use client";

import { Fragment, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks";
import { CLOUTERA_TOKEN } from "@/types/constants";
import { useGetProfile } from "@/queries/profile";
import { UserRole } from "@/types/enums";
import { Loading } from "@/components/ui";
import { routes } from "@/utils/routes";

interface AdminPrivateRouteProps {
  children: ReactNode;
}

export const AdminPrivateRoute = ({ children }: AdminPrivateRouteProps) => {
  const { getItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const isLoggedIn = !!getItem();
  const { data, isLoading } = useGetProfile();
  const router = useRouter();
  const { auth, customer } = routes;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(auth.login);
      return;
    }
    if (!isLoading) {
      const role = data?.data.user.role;
      if (role !== UserRole.Admin) {
        router.push(customer.order);
      }
    }
  }, [
    isLoading,
    isLoggedIn,
    data?.data.user.role,
    router,
    auth.login,
    customer.order,
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn || data?.data.user.role !== UserRole.Admin) {
    return <Loading />;
  }
  return <Fragment>{children}</Fragment>;
};
