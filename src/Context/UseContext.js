import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducer";


export const ShopContex = createContext({});

const ShopProvider = ({children}) => {


  const [state, dispatch] = useReducer(reducer,initialState);
  const value = {
    allProducts : state.allProducts,
    user:state.user,
    order:state.order,
    storeProduct : state.storeProduct,
    addAllProducts:(product) => {
      dispatch({type:"ADD_ALL_PRODUCTS",payload:product})
    },
    removeProduct:(product) => {
      dispatch({type:"REMOVE_PRODUCT",payload:product})
    },
    setUser:(user) => {
      dispatch({type:"ADD_USER",payload:user})
    },
    storeProductKey : (key) => {
      dispatch({type:"STORE_PRODUCT", payload:key})
    },
    storeReset : () => {
      dispatch({type:"EMTY_STORE"})
    },
  }

  return <ShopContex.Provider value={value}>
      {children}
    </ShopContex.Provider>

}

export default ShopProvider ; 