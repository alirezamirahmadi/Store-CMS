
type ProductCategoryType = {
  id: string,
  title: string
}

type ProductType = {
  id: string,
  category: ProductCategoryType,
  title: string,
  image: string,
  price: number,
  stock: number,
  isActive:boolean,
}



export type {
  ProductCategoryType, ProductType
}