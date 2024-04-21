import { ResponseUseCase } from "@/models/api-response-models";
import { RegisterRequest } from "../../models/register/register-request.model";
import { RegisterResponse } from "../../models/register/register-response.model";
import { RegisterRepo } from "../../repositories/register/register.repository";

export const RegisterCase = async (data: RegisterRequest): Promise<ResponseUseCase<RegisterResponse>> => {
    const res = await RegisterRepo<RegisterResponse>(data)
    if (res?.success) {
        return {
            success: true,
            message: res?.message,
            data: res?.data
        }
    }
    return {
        success: false,
        message: res?.message ?? 'gagal mengambil data',
        data: null
    }
}