"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AdminCard, Loading } from "@/components/ui";
import { GraphFilter } from "@/types/enums";
import { FilterButton } from "@/components/admin/dashboard/filter-button";
import { useGetDashboardTrends } from "@/queries/dashboard";

// const data = [
//   { name: "Sun", value: 15000, day: "Sunday", amount: "15k" },
//   { name: "Mon", value: 15000, day: "Monday", amount: "15k" },
//   { name: "Tue", value: 26000, day: "Tuesday", amount: "26k" },
//   { name: "Wed", value: 0, day: "Wednesday", amount: "0k" },
//   { name: "Thu", value: 35000, day: "Thursday", amount: "35k" },
//   { name: "Fri", value: 22000, day: "Friday", amount: "22k" },
//   { name: "Sat", value: 30000, day: "Saturday", amount: "30k" },
// ];

export const DashboardGraph = () => {
  const { isLoading, data } = useGetDashboardTrends();

  const [filter, setFilter] = useState<GraphFilter>(GraphFilter.ThisWeek);

  const trendsData = data?.data;
  const graphData = useMemo(() => {
    const trends =
      filter === GraphFilter.ThisWeek
        ? trendsData?.thisWeek
        : trendsData?.lastWeek;
    if (!trends) return [];
    return trends.map((trend) => {
      const fullDayMap = {
        Sun: "Sunday",
        Mon: "Monday",
        Tue: "Tuesday",
        Wed: "Wednesday",
        Thu: "Thursday",
        Fri: "Friday",
        Sat: "Saturday",
      };
      const fullDay = fullDayMap[trend.day];
      const value = trend.revenue;
      const amount = `${Math.round(value / 1000)}k`;
      return { name: trend.day, value, day: fullDay, amount };
    });
  }, [filter, trendsData]);

  const title =
    filter === GraphFilter.ThisWeek
      ? "Report for this week"
      : "Report for last week";

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: Array<{
      payload: {
        name: string;
        value: number;
        day: string;
        amount: string;
      };
    }>;
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="relative rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg">
          <div className="text-center">
            <div className="font-medium">{data.day}</div>
            <div className="text-sm">{data.amount}</div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full transform">
            <div className="h-0 w-0 border-t-4 border-r-4 border-l-4 border-t-red-500 border-r-transparent border-l-transparent"></div>
          </div>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AdminCard>
      <div className="flex w-full items-center justify-between">
        <p className="text-light-black text-lg font-bold">{title}</p>

        <div className="bg-foundation-red-white flex items-center gap-1 rounded-xl p-1">
          <FilterButton
            label="This week"
            value={GraphFilter.ThisWeek}
            currentValue={filter}
            onChange={setFilter}
          />

          <FilterButton
            label="Last week"
            value={GraphFilter.LastWeek}
            currentValue={filter}
            onChange={setFilter}
          />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={graphData}
          margin={{ top: 40, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dc2626" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#dc2626" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="none"
            stroke="#f0f0f0"
            horizontal={true}
            vertical={false}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#999" }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#999" }}
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[0, 50000]}
            ticks={[0, 10000, 20000, 30000, 40000, 50000]}
          />

          <Tooltip content={<CustomTooltip />} cursor={false} />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#dc2626"
            strokeWidth={3}
            dot={{ fill: "#dc2626", strokeWidth: 0, r: 0 }}
            activeDot={{
              r: 6,
              fill: "#dc2626",
              stroke: "#fff",
              strokeWidth: 2,
            }}
            fill="url(#lineGradient)"
            fillOpacity={1}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </AdminCard>
  );
};
