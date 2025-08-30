export const routes = {
  auth: {
    login: "/login",
    login2fa: "/login/2fa",
  },
  customer: {
    order: "/order",
  },
  admin: {
    dashboard: "/admin/dashboard",
    services: "/admin/services",
    customer: "/admin/customer",
    singleCustomer: (customerId: string) => `/admin/customer/${customerId}`,
    support: "/admin/support",
    orders: "/admin/orders",
  },
};
