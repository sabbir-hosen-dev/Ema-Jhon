import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useShopContext } from "../../Hook/useShopContext";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { addProduct, removeProduct, products } = useShopContext();
  const { name, img, seller, price, stock, key, quantity } = props.product;

  const hendleClick = () => {
    const selectProduct = products.filter((product) => product.key === key);
    selectProduct[0].quantity = selectProduct[0].quantity + 1;
    addProduct(key);
  };

  return (
    <div className="single-product-wrap">
      <div className="product-left">
        <img src={img} alt="" />
      </div>
      <div className="product-right">
        <div className="title">
          <Link to={`/product/${key}`}>
            <h4 className="product-name">{name}</h4>
          </Link>
        </div>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>
          <strong>${price}</strong>
        </p>
        <p>
          <small>Only {stock} leftin stock - Oder soon</small> <br />
          <small>Quantity:{quantity}</small>
        </p>
        {props.addShowCard ? (
          <button className="btn" onClick={hendleClick}>
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        ) : (
          <button className="btn" onClick={() => removeProduct(key)}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
