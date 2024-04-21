import { LoginResponse } from "@/modules/auth/models/login/login-response.model";

export type AuthType = {
  user: LoginResponse | null;
  setUser: (data: LoginResponse | null) => void;
};
