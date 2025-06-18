import { Card } from "@/components/ui";

export const OrdersAccountInfo = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 p-6 lg:w-auto lg:grid-cols-3">
      <Card title="Account Status" value="Level 1" icon="h" gradient />
      <Card title="Total Orders" value="45,000" icon="h" />
      <Card title="Balance" value="₦45,000" icon="h" />
    </div>
  );
};
