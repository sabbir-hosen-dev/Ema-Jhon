import React, { useEffect } from "react";
import { useShopContext } from "../Hook/useShopContext";
import Product from "../components/product/Product";

import "./Shop.css";
import Cart from "../components/Cart/Cart";

const Shop = () => {
  const { products,setOrder } = useShopContext();
  useEffect(() => {
    setOrder(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="shop">
      <div className="product-wrap">
        <div className="product">
          {products &&
            products.map((product,index) => (
              <Product key={index} addShowCard={true} product={product} />
            ))}
        </div>
        <div className="cart">
          <div className="card-w">
            <Cart  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
