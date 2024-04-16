import { DataResponse, HttpResponse } from "@/models/api-response-models";
import { RegisterWithEmailRequest,RegisterWithGoogleRequest } from "../../models/register/register-request";
import { postData } from "@/shared/utils/api";
import { GoogleAuthResponse, RedirectGoogleResponse } from "../../models/register/register-response.model";

const RegisterWithEmail = async <T extends DataResponse>(data: RegisterWithEmailRequest) => {
    const res: HttpResponse<T> = await postData(`/auth/register`, data)

    return res
}

const RegisterWithGoogle = async <T extends DataResponse>(data: RegisterWithGoogleRequest) => {
    const res:HttpResponse<T> = await postData('/auth/google', data)

    return res
}

const RedirectGoogle = async (data: null): Promise<HttpResponse<RedirectGoogleResponse>> => {
    const res: HttpResponse<RedirectGoogleResponse> = await postData('/auth/google', data)

    return res
}

const GoogleCallback = async (data: string): Promise<HttpResponse<GoogleAuthResponse>> => {
    const res: HttpResponse<GoogleAuthResponse> = await postData(`/auth/google/callback?${data}`, null)

    return res
}

export { RegisterWithEmail, RegisterWithGoogle, RedirectGoogle, GoogleCallback }
