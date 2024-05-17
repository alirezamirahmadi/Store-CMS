import { UserType } from "./UserType"

type LoginType = {
  id:string,
  isLogin: boolean,
  token: string;
  userInfo?: UserType,
}

export type {
  LoginType
}