export const endpoints = {
  auth: {
    login: "/auth/login",
    login2fa: "/auth/login-2fa",
    signup: "/auth/signup",
    verifyAccount: "/auth/verify-email",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    logout: "/auth/sign-out",
    checkUsername: "/auth/check-username",
  },
  profile: {
    getProfile: "/profile",
    updateProfile: "/profile/update",
    changePassword: "/profile/change-password",
    setup2fa: "/profile/setup-2fa",
    verify2fa: "/profile/verify-2fa",
  },
  services: {
    getAllServices: "/services",
    getServiceCategories: "/services/categories",
    getServiceById: (serviceId: string) => `/services/${serviceId}`,
  },
  orders: {
    addOrder: "/orders/add",
    getUserOrders: "/orders/list",
  },
  account: {
    addFund: "/account/add-fund",
    accountStatus: "/account/status",
    getFundsHistory: "/account/funds/history",
  },
  faq: {
    list: "/faqs/",
    item: (faqId: string) => `/faqs/${faqId}`,
    add: "/faqs/add",
    edit: (faqId: string) => `/faqs/${faqId}/edit`,
    deleteFaq: (faqId: string) => `/faqs/${faqId}/delete`,
  },
  admin: {
    customers: {
      getStats: "/admin/users/stats",
      getUsersList: "/admin/users",
      getSingleUser: (userId: string) => `/admin/users/${userId}`,
      getUserOrders: (userId: string) => `/admin/users/${userId}/orders`,
      getUserAccount: (userId: string) => `/admin/users/${userId}/account`,
      toggleBlockUser: (userId: string) => `/admin/users/${userId}/block`,
      deleteUser: (userId: string) => `/admin/users/${userId}/delete`,
    },
    orders: {
      getStats: "/admin/orders/stats",
      getOrdersList: "/admin/orders/list",
    },
    dashboard: {
      dashboardStats: "/admin/dashboard/stats",
      dashboardTrends: "/admin/dashboard/trends",
    },
  },
};
