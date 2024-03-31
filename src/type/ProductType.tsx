
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
}



export type {
  ProductCategoryType, ProductType
}