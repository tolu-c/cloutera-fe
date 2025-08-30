"use client";

import { useGetUser } from "@/hooks/useGetUser";

export const Greeting = () => {
  const admin = useGetUser();

  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-light-black text-lg font-bold">
        Hello {admin?.firstName}!
      </h4>

      <p className="text-light-black">Here are the updates for today: </p>
    </div>
  );
};
