
import { UserType } from "./UserType"

type CommentType = {
  id: string,
  creator: UserType,
  content: string,
  date: string,
  time: string,
  answer?: CommentType[]
}

export type {
  CommentType
}