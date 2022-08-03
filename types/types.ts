export interface IPreview {
  name: String
  price: String
  rating: number
  img: String
  id: number
}

export interface ICategory {
  name: String
  img: String
  link: String
}

export interface ICartItem {
  quantity?: number
  img?: String
  id: number
  name: String
  price: number
}

export interface IUser {
  name: String
  history: ICartItem[]
  purchases: ICartItem[]
}

export interface IProduct {
  id: number
  imgs: String[]
  price: number
  quantity: number
  name: String
  desc: String
  stock: number
}
