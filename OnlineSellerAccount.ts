import Account, { AccountInputArg } from './Account'
import { Address, Addresses, Review, Shop } from './InterfaceRepo'

export default class OnlineSellerAccount extends Account {
  public _shipping_addresses: [Address]
  public _default_address: Address
  public _reviews: [Review]
  public _type: number
  public _shop: Shop

  constructor (addresses: Addresses, accountInfo: AccountInputArg) {
    super({
      id: accountInfo.id,
      open: accountInfo.open,
      password: accountInfo.password
    })
    this._default_address = addresses.default_address
    this._shipping_addresses = addresses.shipping_addresses
  }

  get default_address (): Address {
    return this._default_address
  }
  set default_address (default_address: Address) {
    this._default_address = default_address
  }

  get shipping_addresses (): [Address] {
    return this.shipping_addresses
  }
  set shipping_addresses (shipping_addresses: [Address]) {
    this._shipping_addresses = shipping_addresses
  }

  get reviews (): [Review] {
    return this._reviews
  }

  set reviews (reviews: [Review]) {
    this._reviews = reviews
  }

  get type (): number {
    return this._type
  }

  set type (type: number) {
    this._type = type
  }

  get shop (): Shop {
    return this._shop
  }

  set shop (shop: Shop) {
    this._shop = shop
  }
}
