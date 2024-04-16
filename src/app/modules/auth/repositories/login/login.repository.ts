import { DataResponse, HttpResponse } from '../../../../models/api-response-models'
import { LoginWithEmailRequest, LoginWithOTPRequest, OtpRequest } from '../../models/login/login-request.model'
import { postData, postDataWithToken } from '../../../../shared/utils/api'

const LoginWithEmail = async <T extends DataResponse>(data: LoginWithEmailRequest): Promise<HttpResponse<T>> => {
  const res: HttpResponse<T> = await postData(`/auth/login`, data)

  return res
}

const LoginWithOtp = async <T extends DataResponse>(data: LoginWithOTPRequest) => {
  const res: HttpResponse<T> = await postData('/auth/bo/verify-otp-phone', data)

  return res
}

const OTPRequest = async <T extends DataResponse>(data: OtpRequest) => {
  const res: HttpResponse<T> = await postData('/auth/bo/login-with-phone', data)

  return res
}

const OTPResend = async <T extends DataResponse>(data: OtpRequest) => {
  const res: HttpResponse<T> = await postData('/auth/bo/resend-otp', data)

  return res
}

const LogOut = async <T extends DataResponse>(data: '') => {
  const res: HttpResponse<T> = await postDataWithToken('/auth/logout', data)

  return res
}

export { LoginWithEmail, OTPRequest, LoginWithOtp, OTPResend, LogOut}
