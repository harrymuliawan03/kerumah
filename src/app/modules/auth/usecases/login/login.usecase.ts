import { ResponseUseCase } from '../../../../models/api-response-models'
import { LoginResponse } from '../../models/login/login-response.model'
import authConfig from '../../../../shared/config/auth'
import { LoginWithEmailRequest, LoginWithOTPRequest, OtpRequest } from '../../models/login/login-request.model'
import { LogOut, LoginWithEmail, LoginWithOtp, OTPRequest, OTPResend } from '../../repositories/login/login.repository'
import Cookies from 'js-cookie'
import { parseErrorArray } from '../../../../shared/utils/parseManager'

const LoginUseCase = async (
  data: LoginWithEmailRequest | LoginWithOTPRequest
): Promise<ResponseUseCase<LoginResponse>> => {
  let user
  let forCookies

  if ((data as LoginWithEmailRequest).email) {
    const emailData = data as LoginWithEmailRequest
    forCookies = {
      type: 'email',
      ...data
    }

    user = await LoginWithEmail<LoginResponse>(emailData)
  }

  if ((data as LoginWithOTPRequest).otp) {
    const PhoneData = data as LoginWithOTPRequest

    forCookies = {
      type: 'phone',
      ...data
    }

    user = await LoginWithOtp<LoginResponse>(PhoneData)
  }

  if (user?.valid) {
    if (data.rememberMe) {
      Cookies.set(authConfig.storageUserData, JSON.stringify(forCookies), {
        secure: true
      })
    } else {
      Cookies.remove(authConfig.storageUserData)
      Cookies.remove('lastResetTime')
    }

    const localData = {
      email: user.data.email,
      full_name: user.data.full_name,
      username: user.data.username,
      address: user.data.address,
      profile: user.data.profile,
      phone_number: user.data.phone_number
    }

    window.localStorage.setItem(authConfig.storageTokenKeyName, user.data?.token as '')
    window.localStorage.setItem(authConfig.storageUserData, JSON.stringify(localData))

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

const RequestOtpCase = async (data: OtpRequest): Promise<ResponseUseCase<null>> => {
  const otp = await OTPRequest(data)

  if (otp.valid) {
    return {
      valid: true,
      message: 'Successfully requested OTP.'
    }
  }

  return {
    valid: false,
    message: parseErrorArray(otp.errors) ?? otp.message
  }
}

const ResendOtpCase = async (data: OtpRequest): Promise<ResponseUseCase<null>> => {
  const otp = await OTPResend(data)

  if (otp.valid) {
    return {
      valid: true,
      message: 'Successfully requested OTP.'
    }
  }

  return {
    valid: false,
    message: parseErrorArray(otp.errors) ?? otp.message
  }
}

const LogOutCase = async (data: ''): Promise<ResponseUseCase<null>> => {
  let user

  user = await LogOut<LoginResponse>(data)

  if (user?.valid) {
    window.localStorage.clear()

    return {
      valid: true,
      message: user?.message,
      data: null
    }
  }

  return {
    valid: false,
    message: user?.message ?? 'Logout Gagal',
    data: null
  }
}

export { LoginUseCase, RequestOtpCase, ResendOtpCase, LogOutCase }
