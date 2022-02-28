import { Review } from './InterfaceRepo'
import Category from './Category'

export default class Product {
  public _name: string
  public _price: string
  public _description: string
  public _quantity: number
  public _created: Date
  public _status: number
  public _images: [string]
  public _category: Category
  public _reviews: [Review]

  constructor (
    name: string,
    price: string,
    description: string,
    quantity: number,
    created: Date,
    status: number,
    images: [string],
    category: Category
  ) {
    this._name = name
    this._price = price
    this._description = description
    this._quantity = quantity
    this._created = created
    this._status = status
    this._images = images
    this._category = category
  }

  get name (): string {
    return this._name
  }
  set name (name: string) {
    this._name = name
  }
  get price (): string {
    return this._price
  }
  set price (price: string) {
    this._price = price
  }
  get description (): string {
    return this._description
  }
  set description (description: string) {
    this._description = description
  }
  get quantity (): number {
    return this._quantity
  }
  set quantity (quantity: number) {
    this._quantity = quantity
  }
  get created (): Date {
    return this._created
  }
  set created (created: Date) {
    this._created = created
  }
  get status (): number {
    return this._status
  }
  set status (status: number) {
    this._status = status
  }
  get images (): [string] {
    return this._images
  }
  set images (images: [string]) {
    this._images = images
  }
  get category (): Category {
    return this._category
  }
  set category (category: Category) {
    this._category = category
  }
}
