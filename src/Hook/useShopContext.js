import { useContext } from "react"
import { ShopContex } from "../Context/UseContext"

export const useShopContext = () => {
  return useContext(ShopContex);
}