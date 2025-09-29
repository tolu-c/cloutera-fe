"use client";

import { AdminCard, Loading } from "@/components/ui";
import { useGetAdminActivities } from "@/queries/activity";
import { formatRelativeTime } from "@/utils";
import { ProfileIcon } from "@/assets/icons";

export function UserActivities() {
  const { isLoading, data } = useGetAdminActivities();

  return (
    <AdminCard>
      <p className="text-light-black font-bold">Recent Activity</p>
      {isLoading && <Loading />}

      <div className="flex w-full flex-col gap-6">
        {data?.data &&
          data.data.slice(0, 5).map(({ _id, action, createdAt }) => (
            <div key={_id} className="flex h-13 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-foundation-red-light flex size-9 items-center justify-center rounded-full">
                  <ProfileIcon className="text-foundation-red-normal size-4.5" />
                </div>

                <p className="text-light-black font-light">{action}</p>
              </div>

              <p className="text-light-black text-xs font-medium">
                {formatRelativeTime(createdAt)}
              </p>
            </div>
          ))}
      </div>
    </AdminCard>
  );
}
