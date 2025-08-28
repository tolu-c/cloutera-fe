import { Status, UserRole } from "@/types/enums";

interface LabelValuePair<T = string> {
  label: string;
  value: T;
}

interface Service {
  id: string;
  service: string;
  rate: number;
  minOrder: number;
  maxOrder: number;
  description: string;
}

interface Order {
  id: string;
  link: string;
  charge: number;
  quantity: number;
  service: string;
  date: string;
  status: Status;
}

export interface ApiMessageResponse {
  message: string;
  success: boolean;
}
export interface ApiDataResponse<T> extends ApiMessageResponse {
  data: T;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    current: number;
    pages: number;
    total: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  filters: Record<string, string>;
}

export interface BaseParams {
  [key: string]: Param;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginDataWith2FA extends LoginData {
  secretCode: string;
}

export interface LoginResponse {
  token: string;
  isVerified: boolean;
  twoFactorEnabled: boolean;
  role: UserRole;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface CheckUsernameData {
  username: string;
}
export interface ForgotPasswordFormData {
  email: string;
}

export interface ResetPasswordData {
  email: string;
  token: string;
  password: string;
}

export interface VerifyAccountData {
  token: string;
  email: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  isVerified: boolean;
  role: UserRole;
  twoFactorEnabled: boolean;
  __v: number;
}

export interface Profile {
  user: User;
}

export interface UpdateProfileData {
  firstName: string;
  lastName: string;
  username: string;
}

export interface UpdatePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface Verify2FAData {
  secretCode: string;
}

export interface Setup2FAData {
  email: string;
}

export interface FormatAmountOptions {
  currency?: string; // e.g., 'USD', 'EUR', 'NGN'
  locale?: string; // e.g., 'en-US', 'en-NG', 'fr-FR'
  decimalPlaces?: number; // Number of decimal places (default: 2)
  showCurrencySymbol?: boolean; // Whether to show currency symbol (default: true)
}

export interface TimeStamp {
  createdAt: string;
  updatedAt: string;
}
