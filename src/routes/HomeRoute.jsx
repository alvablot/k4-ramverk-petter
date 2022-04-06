import Cart from "../components/Cart";
import Links from "../components/Links";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState, filterProductState } from "../recoil/products/atom";
import storeImg from "../assets/store.jpg";

export default function HomeRoute(props) {
  const [productlist, setProductlist] = useRecoilState(productListState);
  const { addToCart, showProducts } = props;
  return (
    <div>
      <header className="App-header">
        <Links />
        <Cart />
      </header>
      <main style={{ padding: "1rem 0" }}>
        <h3>Hem</h3>
        <div className="list">

          <div className="products">
          <h3> Välkommen till min horribla internetaffär!</h3>

            <div className="imgContainer">
            <h4>
                  Här kan du köpa både begagnat grus och diverse användbara
                  saker, som använda plastomslag mm från Clas Ohlson.
                </h4>
              <img src={storeImg} />
              <div className="container">
        
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
