import { Address } from './InterfaceRepo'

export default class Company {
  public _name: string
  public _address: Address
  public _tel: string
  public _type: string
  public _industry: string
  public _logo: string
  public _created: Date
  public _tracking_website: string

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
    this._name = name
    this._address = address
    this._tel = tel
    this._type = type
    this._industry = industry
    this._logo = logo
    this._created = created
    this._tracking_website = tracking_website
  }

  get name (): string {
    return this._name
  }

  set name (name: string) {
    this._name = name
  }

  get address (): Address {
    return this._address
  }

  set address (address: Address) {
    this._address = address
  }

  get tel (): string {
    return this._tel
  }

  set tel (tel: string) {
    this._tel = tel
  }

  get type (): string {
    return this._type
  }

  set type (type: string) {
    this._type = type
  }

  get industry (): string {
    return this._industry
  }

  set industry (industry: string) {
    this._industry = industry
  }

  get logo (): string {
    return this._logo
  }

  set logo (logo: string) {
    this._logo = logo
  }

  get created (): Date {
    return this._created
  }

  set created (created: Date) {
    this._created = created
  }

  get tracking_website (): string {
    return this._tracking_website
  }

  set tracking_website (tracking_website: string) {
    this._tracking_website = tracking_website
  }
}
