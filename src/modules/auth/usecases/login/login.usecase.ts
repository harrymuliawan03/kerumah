import { ResponseUseCase } from "@/models/api-response-models";
import { LoginRequest } from "../../models/login/login-request.model";
import { LoginResponse } from "../../models/login/login-response.model";
import {
  CheckLoginRepo,
  LoginRepo,
} from "../../repositories/login/login.repository";
import Cookies from "js-cookie";

export const LoginCase = async (
  data: LoginRequest
): Promise<ResponseUseCase<LoginResponse>> => {
  const res = await LoginRepo<LoginResponse>(data);
  if (res?.success) {
    Cookies.set("accessToken", res?.data?.token ?? "", { expires: 7 });
    // localStorage.setItem("accessToken", res?.data?.token ?? '');
    return {
      success: true,
      message: res?.message,
      data: res?.data,
    };
  }
  return {
    success: false,
    message: res?.message ?? "gagal mengambil data",
    data: null,
  };
};

export const CheckLoginCase = async (): Promise<
  ResponseUseCase<LoginResponse>
> => {
  const res = await CheckLoginRepo<LoginResponse>();
  if (res?.success) {
    return {
      success: true,
      message: res?.message,
      data: res?.data,
    };
  }
  return {
    success: false,
    message: res?.message ?? "gagal mengambil data",
    data: null,
  };
};
