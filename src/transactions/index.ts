export * from "./components"

export interface Transaction {
  name: string
  amount: string
  status: "Pending" | "Failed" | "Done"
}