export interface AccountAttr {
  id: string
  open: Date
  password: string
  closed: Date
}

export type AccountInputArg = Omit<AccountAttr, 'closed'>

export default class Account {
  public _id: string
  private _password: string
  public _open: Date
  public _closed: Date

  constructor (account: AccountInputArg) {
    this._id = account.id
    this._open = account.open
    this._password = account.password
  }

  get id (): string {
    return this._id
  }
  set id (id: string) {
    this._id = id
  }
  get open (): Date {
    return this._open
  }
  set open (open: Date) {
    this._open = open
  }
  get closed (): Date {
    return this._closed
  }
  set closed (closed: Date) {
    this._closed = closed
  }
  set password (password: string) {
    this._password = password
  }
}
