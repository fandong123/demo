import { request } from "./request";

export interface LoginValues {
  account: string;
  password: string;
}

interface LoginResponse {
  success: true;
  result: string;
}

export interface RegistryValues {
  username: string;
  account: string;
  number: string;
  password: string;
  confirmPassword: string;
}


export async function loginAccount(data: LoginValues) {
  return request<LoginResponse>("/api/login/account", {
    method: "POST",
    data,
  });
}

export async function registryAccount(data: LoginValues) {
  return request<LoginResponse>("/api/registry/account", {
    method: "POST",
    data,
  });
}
