import React, { useState } from "react";
import Cart from "../components/Cart";
import Links from "../components/Links";

import { useRecoilState, useRecoilValue } from "recoil";
import { productListState } from "../recoil/products/atom";
import { Link } from "react-router-dom";
import "../App.css";

function ProductDetails(props) {
  const [productlist, setProductlist] = useRecoilState(productListState);
  const { addToCart, id } = props;
  return (
    <div>
      
      <header className="App-header">
        <Links />
        <Cart
          value=""
          addToCart={addToCart}
        />
      </header>

      <h2>Vald produkt</h2>
      <div className="details">
        <h1>{productlist[id].title}</h1>
        <nav>
          <Link to="/products">
            <button>Tillbaks</button>
          </Link>
        </nav>
        <br />
        <img className="bigImg" src={productlist[id].image} />
        <div>{productlist[id].description}</div>
        <div>Pris: {Math.round(productlist[id].price)}kr</div>
        <button onClick={() => addToCart(id, Math.round(productlist[id].price), 1)}>
          Lägg till i varukorg
        </button>
      </div>
    </div>
  );
}
export default ProductDetails;
