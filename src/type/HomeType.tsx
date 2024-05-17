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

type HomeCardType = {
  id: string,
  title: string,
  value: number,
  icon: string,
  changeRate: number,
  description: string,
}

type ChartType = {
  id: string,
  title: string,
  data: any[],
  dataKeyX: string,
  dataKeyY: string,
  grid?: boolean
}

type HomeChartType = {
  id: string,
  title: string,
  data: { id: string, name: string, amount: number }[],
}


export type {
  MenuType, TextBoxType, ModalType, HomeCardType, ChartType, HomeChartType
}