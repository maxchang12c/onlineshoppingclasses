import Person from './Person'
import { getAgeFromDOB } from './TimeUtil'
import OnlineSellerAccount from './OnlineSellerAccount'
import OnlineShopperAccount from './OnlineShopperAccount'
import { AccountInputArg } from './Account'
import { Addresses } from './InterfaceRepo'

export interface UserAttr {
  dob: Date
  email: string
  id: string
  tel: string
}

export default class User extends Person {
  public _dob: Date
  public _email: string
  public _id: string
  public _tel: string
  public _seller_account: OnlineSellerAccount
  public _shopper_account: OnlineShopperAccount

  constructor (
    name: string,
    gender: string,
    userSpecifics: UserAttr,
    accountSpecifics: AccountInputArg,
    addresses: Addresses
  ) {
    const age = getAgeFromDOB(userSpecifics.dob)
    super({ name, age, gender })
    this._dob = userSpecifics.dob
    this._email = userSpecifics.email
    this._id = userSpecifics.id
    this._seller_account = new OnlineSellerAccount(addresses, accountSpecifics)
    this._shopper_account = new OnlineShopperAccount(
      addresses,
      accountSpecifics
    )

    console.log('online shoppers', this, 'others')
  }

  get dob (): Date {
    return this._dob
  }

  set dob (dob: Date) {
    this._dob = dob
  }

  get email (): string {
    return this._email
  }

  set email (email: string) {
    this._email = email
  }

  get id (): string {
    return this._id
  }

  set id (id: string) {
    this._id = id
  }

  get tel (): string {
    return this._tel
  }

  set tel (tel: string) {
    this._tel = tel
  }

  get seller_account (): OnlineSellerAccount {
    return this._seller_account
  }

  set seller_account (seller_account: OnlineSellerAccount) {
    this._seller_account = seller_account
  }

  get shopper_account (): OnlineShopperAccount {
    return this._shopper_account
  }

  set shopper_account (shopper_account: OnlineShopperAccount) {
    this._shopper_account = shopper_account
  }
}
