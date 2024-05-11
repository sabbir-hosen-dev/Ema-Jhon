import React, { useEffect } from "react";
import { useShopContext } from "../Hook/useShopContext";
import Product from "../components/product/Product";
import Cart from "./../components/Cart/Cart";

function Revew() {
  const { selectProduct,setOrder } = useShopContext();
  console.log(selectProduct)
  return (
    <div>
      <div className="product-wrap">
        <div className="product">
          {selectProduct &&
            selectProduct.map((product,index) => (
              <Product key={index} product={product} />
            ))}
        </div>
        <div className="cart">
          <div className="card-w">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revew;
