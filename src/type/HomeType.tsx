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

type ModalType = {
  title?: string,
  message?: string,
  buttons: {
    id: string, title: string, variant?: 'text' | 'contained' | 'outlined',
    color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning", onClick: () => void
  }[]
  children?: React.JSX.Element
}


export type {
  MenuType, TextBoxType, ModalType
}