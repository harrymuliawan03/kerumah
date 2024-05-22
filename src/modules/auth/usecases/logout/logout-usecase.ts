import { ResponseUseCase } from "@/models/api-response-models";
import { LoginRequest } from "../../models/login/login-request.model";
import Cookies from "js-cookie";

export const LogoutCase = () => {
  Cookies.remove("accessToken");
};
