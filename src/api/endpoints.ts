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
  },
};
