export default class Category {
  public _id: string
  public _name: string

  constructor (name: string, id: string) {
    this._id = id
    this._name = name
  }

  get id (): string {
    return this._id
  }

  set id (id: string) {
    this._id = id
  }

  get name (): string {
    return this._name
  }

  set name (name: string) {
    this._name = name
  }
}
