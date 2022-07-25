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
  quantity: number
  id: number
  name: String
  price: number
}
