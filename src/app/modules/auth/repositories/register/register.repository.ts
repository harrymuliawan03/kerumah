import { DataResponse, HttpResponse } from "@/models/api-response-models"
import { RegisterRequest } from "../../models/register/register-request.model"
import { postData } from "@/utils/api"

export const RegisterRepo = async <T extends DataResponse>(data: RegisterRequest) => {
    const res: HttpResponse<T> = await postData(`/register`, data)

    return res
}
