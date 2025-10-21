export const routes = {
  auth: {
    login: "/login",
    login2fa: "/login/2fa",
  },
  customer: {
    order: "/order",
    orderHistory: "/order/history",
    addFunds: "/add-funds",
    profile: "/profile",
  },
  admin: {
    dashboard: "/admin/dashboard",
    services: "/admin/services",
    customer: "/admin/customer",
    singleCustomer: (customerId: string) => `/admin/customer/${customerId}`,
    support: "/admin/support",
    newNotification: "/admin/support/new-notification",
    orders: "/admin/orders",
  },
};
