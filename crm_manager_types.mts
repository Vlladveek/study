export type order = {
  id: number,
  customer: string,
  items: [
    { name: string, price: number, qty: number }
  ],
  status: "new" | "paid" | "shipped"
}