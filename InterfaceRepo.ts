import User from './User'
import Product from './Product'

export interface Address {
  name: string
  streetAddress: string
  city: string
  state: string
  zipCode: number
}

export interface Addresses {
  shipping_addresses: [Address]
  default_address: Address
}

export interface Category {
  id: string
  name: string
}

export interface Review {
  body: string
  author: User
  rating: number
  product: Product
  created: Date
}

export interface Shop {
  name: string
  pickup_address: string
  reviews: [Review]
}

export interface DeliveryTime {
  prepared: Date
  picked_up: Date
  delivered: Date
}

export type OrderStatus = 'New' | 'Hold' | 'Shipped' | 'Delivered' | 'Closed'

export type DeliveryStatus = 'New' | 'Prepared' | 'PickedUp' | 'Delivered'
