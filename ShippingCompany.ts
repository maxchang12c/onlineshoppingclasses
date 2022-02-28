import Company from './Company'
import Shipment from './Shipment'
import { Address } from './InterfaceRepo'

export default class ShippingCompany extends Company {
  public _shipments: [Shipment]

  constructor (
    name: string,
    address: Address,
    tel: string,
    type: string,
    industry: string,
    logo: string,
    created: Date,
    tracking_website: string
  ) {
    super(name, address, tel, type, industry, logo, created, tracking_website)
  }

  get shipments (): [Shipment] {
    return this._shipments
  }

  set shipments (shipments: [Shipment]) {
    this._shipments = shipments
  }
}
