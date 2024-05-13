import React, { useEffect} from "react";
import { useShopContext } from "../Hook/useShopContext";
import Product from "../components/product/Product";

import "./Shop.css";
import Cart from "../components/Cart/Cart";

const Shop = () => {

  const {allProducts,addAllProducts} = useShopContext();



  useEffect(() => {
    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data =>{
      addAllProducts(data)
    })
    .catch(err => console.log(err))
  },[addAllProducts])




  return (
    <div className="shop">
      <div className="product-wrap">
        <div className="product">
          {allProducts &&
            allProducts.map((product, index) => (
              <Product key={index} addShowCard={true} product={product} />
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
};

export default Shop;
