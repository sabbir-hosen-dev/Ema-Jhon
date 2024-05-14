import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useShopContext } from "../../Hook/useShopContext";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const { storeProduct } = useShopContext();
  const [order,setOrder] = useState(true)

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setOrder(false);
    } else {
      setOrder(true);
    }
  }, [location.pathname]);


  
  let total = 0;
  let tax = 0;
  let items = 0;

  storeProduct &&
  storeProduct.map((product) => {
      const { price, quantity } = product;
      return (items = price * quantity);
    });


  let cost =  storeProduct &&storeProduct.reduce(
    (cost, product) => cost + product.shipping,
    0
  );

  if (items > 20 || total > 20) {
    cost = 0;
  }
  if (items > 10 && total > 20) {
    cost = 4.99;
  }
  if (items > 0 && total > 20) {
    cost = 8.99;
  }

  if (items > 0) {
    tax = (2 / 100) * items;
  }

  total = items + tax + cost;

  const toFixed = (num) => {
    return num.toFixed(2);
  };

  const [cake, setCheack] = useState("");
  useEffect(()=> {
    if (total === 0) {
      setCheack(false);
    } else {
      setCheack(true);
    }
  },[total])

  return (
    <div className="cart-wrap">
      <div className="card-headding">
        <h3>Order Summary</h3>
        <p className=" margin">
          Items ordered: {storeProduct && storeProduct.length}
        </p>
      </div>
       <div className="card-content-wrap">
        <p>
          <small>Items:</small>
        </p>
        <p>
          <small>
            $<strong>{items}</strong>
          </small>
        </p>
      </div> 
      <div className="card-content-wrap">
        <p>
          <small>Total tax:</small>
        </p>
        <p>
          <small>
         $<strong> {toFixed(tax)} </strong>
    
          </small>
        </p>
      </div>
       <div className="card-content-wrap">
        <p>
          <small>Shipping & handing:</small>
        </p>
        <p>
          <small>
            $<strong> {toFixed(cost)} </strong>
          </small>
        </p>
      </div> 

       <div className="card-content-wrap"> 
      <h3>Order Total:</h3>
      <h3> $<strong> {toFixed(total)} </strong></h3>
      </div> 

       <div className="btn-center">
        {order ? (
          <Link to="/shep-ment">
            <button className="btn">Please Order</button>
          </Link>
        ) : cake ? (
          <Link to="/revew" >
            <button className="btn">Revew Order</button>
          </Link>
        ) : (
          <Link>
            <button className="btn">Revew Order</button>
          </Link>
        )}
      </div> 
    </div>
  );
};

export default Cart;
