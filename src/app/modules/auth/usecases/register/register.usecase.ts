import { ResponseUseCase } from "@/models/api-response-models";
import { RegisterWithEmailRequest, RegisterWithGoogleRequest, RegisterWithOTPRequest } from "../../models/register/register-request";
import { GoogleAuthResponse, RedirectGoogleResponse, RegisterResponse } from "../../models/register/register-response.model";
import { GoogleCallback, RedirectGoogle, RegisterWithEmail, RegisterWithGoogle } from "../../repositories/register/register.repository";
import Cookies from 'js-cookie'
import authConfig from '../../../../shared/config/auth'
import { LoginResponse } from "../../models/login/login-response.model";

const RegisterUseCase = async (data: RegisterWithEmailRequest): Promise<ResponseUseCase<RegisterResponse>> => {
    let user
    let forCookies

    if ((data as RegisterWithEmailRequest).email) {
        const emailData = data as RegisterWithEmailRequest
        forCookies = {
            type: 'email',
            ...data
        }
        user = await RegisterWithEmail<RegisterResponse>(emailData)
    }

    if (user?.valid) {
        Cookies.remove(authConfig.storageUserData)
        Cookies.remove('lastResetTime')

        window.localStorage.setItem(authConfig.storageTokenKeyName, user?.data?.token?.plainTextToken as '')
        window.localStorage.setItem(authConfig.storageUserData, JSON.stringify(user?.data))

        return {
            valid: true,
            message: 'Data berhasil di dapatkan',
            data: user.data
        }
    }
    return {
        valid: false,
        message: user?.message ?? 'gagal mengambil data',
        data: null
    }
}
const RegisterGoogleUseCase = async (data: RegisterWithGoogleRequest): Promise<ResponseUseCase<RegisterResponse>> => {
    let user
    let forCookies

    if ((data as RegisterWithGoogleRequest).email) {
        const emailData = data as RegisterWithGoogleRequest
        forCookies = {
            type: 'email',
            ...data
        }
        user = await RegisterWithGoogle<RegisterResponse>(emailData)
    }



    if (user?.valid) {
        Cookies.remove(authConfig.storageUserData)
        Cookies.remove('lastResetTime')

        window.localStorage.setItem(authConfig.storageTokenKeyName, user?.data?.token?.plainTextToken as '')
        window.localStorage.setItem(authConfig.storageUserData, JSON.stringify(user?.data))

        return {
            valid: true,
            message: 'Data berhasil di dapatkan',
            data: user.data
        }
    }
    return {
        valid: false,
        message: user?.message ?? 'gagal mengambil data',
        data: null
    }
}

const RedirectGoogleUseCase = async (data: null): Promise<ResponseUseCase<RedirectGoogleResponse>> => {
    const res = await RedirectGoogle(data)

    if (res.valid) {
        return {
            valid: true,
            message: 'Redirect successfully',
            data: res.data
        }
    }

    return {
        valid: false,
        message: 'Failed',
        data: null
    }
}

const GoogleCallbackUseCase = async (data: string): Promise<ResponseUseCase<GoogleAuthResponse>> => {
    const res = await GoogleCallback(`code=${data}`)

    if (res.valid) {

        if (res.data.token !== undefined) {
            Cookies.remove(authConfig.storageUserData)
            Cookies.remove('lastResetTime')

            const localData: LoginResponse = {
                full_name:res.data.full_name,
                email:res.data.email,
                username: res.data.username,
                token: res.data?.token,
                address: res.data.address as boolean,
                phone_number: res.data.phone_number === null ? '' : res.data.phone_number,
                profile: res.data.profile === null ? '' : res.data.profile
            }
            window.localStorage.setItem(authConfig.storageTokenKeyName, res?.data?.token as '')
            window.localStorage.setItem(authConfig.storageUserData, JSON.stringify(localData))
        }

        return {
            valid: true,
            message: 'Redirect successfully',
            data: res.data
        }
    }

    return {
        valid: false,
        message: 'Failed',
        data: null
    }
}

export { RegisterUseCase, RegisterGoogleUseCase, RedirectGoogleUseCase, GoogleCallbackUseCase }
