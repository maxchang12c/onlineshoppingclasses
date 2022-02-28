import OnlineShoper from './OnlineShoper'
import { OrderStatus } from './InterfaceRepo'

export default class Order {
  public _id: string
  public _created: Date
  public _owner: OnlineShoper
  public _status: OrderStatus
  public _total: number

  constructor (
    id: string,
    created: Date,
    owner: OnlineShoper,
    status: OrderStatus,
    total: number
  ) {
    this._id = id
    this._created = created
    this._owner = owner
    this._status = status
    this._total = total
  }

  get id (): string {
    return this._id
  }

  set id (id: string) {
    this._id = id
  }

  get created (): Date {
    return this._created
  }

  set created (created: Date) {
    this._created = created
  }

  get owner (): OnlineShoper {
    return this._owner
  }

  set owner (owner: OnlineShoper) {
    this._owner = owner
  }

  get status (): OrderStatus {
    return this._status
  }

  set status (status: OrderStatus) {
    this._status = status
  }

  get total (): number {
    return this._total
  }

  set total (total: number) {
    this._total = total
  }
}
