export interface PersonAttr {
  name: string
  age: number
  gender: string
}

export default class Person {
  public _name: string
  public _age: number
  public _gender:string

  constructor (person: PersonAttr) {
    this._name = person.name
    this._age = person.age
    this._gender = person.gender
  }

  get name (): string {
    return this._name
  }

  set name (name: string) {
    this._name = name
  }

  get age (): number {
    return this._age
  }

  set age (age: number) {
    this._age = age
  }

  get gender (): string {
    return this._gender
  }

  set gender (gender: string) {
    this._gender = gender
  }

  public profile (): void {
   console.log('name: ' + this._name + 'age: ' + this._age)
  }
}
