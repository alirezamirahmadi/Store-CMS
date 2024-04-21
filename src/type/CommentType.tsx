
import { UserType } from "./UserType"

type CommentType = {
  id: string,
  creator: UserType,
  content: string,
  date: string,
  time: string,
  answer?: CommentType[],
  isAccepted: boolean,
}

export type {
  CommentType
}