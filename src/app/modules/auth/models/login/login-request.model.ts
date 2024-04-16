export type LoginWithOTPRequest = {
    phone: string
    otp: string
    rememberMe?: boolean
  }
  
  export type OtpRequest = {
    phone: string
  }
  
  export type LoginWithEmailRequest = {
    email: string
    password: string
    rememberMe?: boolean
  }
  