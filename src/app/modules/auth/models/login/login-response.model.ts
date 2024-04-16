export type LoginResponse = {
    id?: number
    email: string
    username: string
    full_name: string,
    phone_number?: string,
    profile?: string,
    token: string,
    address?: boolean
  }
