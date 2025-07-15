import { Status } from "@/types/enums";

interface LabelValuePair<T = string> {
  label: string;
  value: T;
}

interface ServiceList {
  title: string;
  services: Service[];
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
}
export interface ApiDataResponse<T> extends ApiMessageResponse {
  data: T;
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
