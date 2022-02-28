import { Address, DeliveryStatus, DeliveryTime } from './InterfaceRepo'
import OnlineShoper from './OnlineShoper'

export default class Shipment {
  public _id: string
  public _company: string
  public _tracking_no: string
  public _recipient: OnlineShoper
  public _delivery_address: Address
  public _status: DeliveryStatus
  public _time: DeliveryTime

  constructor (
    id: string,
    company: string,
    tracking_no: string,
    recipient: OnlineShoper
  ) {
    this._id = id
    this._company = company
    this._tracking_no = tracking_no
    this._recipient = recipient
    this._delivery_address = recipient.account.default_address
    this._status = 'New'
  }

  get id (): string {
    return this._id
  }

  set id (id: string) {
    this._id = id
  }

  get company (): string {
    return this._company
  }

  set company (company: string) {
    this._company = company
  }

  get tracking_no (): string {
    return this._tracking_no
  }

  set tracking_no (tracking_no: string) {
    this._tracking_no = tracking_no
  }

  get recipient (): OnlineShoper {
    return this._recipient
  }

  set recipient (recipient: OnlineShoper) {
    this._recipient = recipient
  }

  get delivery_address (): Address {
    return this._delivery_address
  }

  set delivery_address (delivery_address: Address) {
    this._delivery_address = delivery_address
  }

  get status (): DeliveryStatus {
    return this._status
  }

  set status (status: DeliveryStatus) {
    this._status = status
  }
}
