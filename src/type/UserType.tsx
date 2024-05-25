

type UserType = {
  id?: string,
  firstName: string,
  lastName: string,
  image?: string,
  province?: string,
  city?: string,
  address?: string,
  phone: string,
  postalCode?: string,
  email?: string,
  ePhone?: string,
  description?: string,
  isActive: boolean,
  permissions?: string[],
}

export type {
  UserType
}