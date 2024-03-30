import React from "react"

type MenuType = {
  id: number,
  title: string,
  icon: React.JSX.Element,
  href: string,
}

type TextBoxType = {
  icon?: React.JSX.Element,
  placeHolder?: string,
  multiLine?: boolean
}




export type {
  MenuType, TextBoxType
}