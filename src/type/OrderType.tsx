import type { ProductType } from "./ProductType";

type OrderType = {
  id: string,
  code: string,
  orderDate: string,
  status: 'Delivered' | 'In process' | 'Canceled',
  price: number,
  off?: number,
  details: ProductType[],
}

export type {
  OrderType
}