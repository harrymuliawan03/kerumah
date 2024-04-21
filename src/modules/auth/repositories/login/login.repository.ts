import { DataResponse, HttpResponse } from "@/models/api-response-models";
import { getDataWithToken, postData } from "@/utils/api";
import { LoginRequest } from "../../models/login/login-request.model";

export const LoginRepo = async <T extends DataResponse>(data: LoginRequest) => {
  const res: HttpResponse<T> = await postData(`/login`, data);

  return res;
};

export const CheckLoginRepo = async <T extends DataResponse>() => {
  const res: HttpResponse<T> = await getDataWithToken(`/user/current-byToken`);

  return res;
};
