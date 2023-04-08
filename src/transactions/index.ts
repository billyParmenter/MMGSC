export * from "./components"

export interface Transaction {
  amount: number
  amountP: number
  amountR: number
  amountW: number
  devTime: String
  pan: string
  ref: number
  atm: {
    id: number
    txt: string
  }
  key: Array<Key>
  hst: {
    id: number
    txt: string
    descr: string
  }
  ttp?: {
    id: number
    txt: string
    descr: string
  }
}

interface Key {
  id: number
  txt: string
  descr: string
}