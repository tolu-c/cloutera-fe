export const routes = {
  admin: {
    dashboard: "/admin/dashboard",
    services: "/admin/services",
    customer: "/admin/customer",
    singleCustomer: (customerId: string) => `/admin/customer/${customerId}`,
    support: "/admin/support",
    orders: "/admin/orders",
  },
};
