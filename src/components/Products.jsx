import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState, filterProductState } from "../recoil/products/atom";

import "../App.css";

function Products(props) {
  const [productlist, setProductlist] = useRecoilState(productListState);
  const { addToCart, showProducts } = props;

  return (
    <div className="list">
      {productlist.map((listItem, i) => {
        return (
          <div key={`key_${i}`} className="products">
            <div className="imgContainer">
              <img src={listItem.image} />
              <div className="container">
                <h4>{listItem.title}</h4>
              </div>
            </div>
            <br />
            <b> {Math.round(listItem.price)}kr</b>
            <br />
            <button
              onClick={() =>
                addToCart(i, Math.round(listItem.price), 1, listItem.id)
              }
            >
              Lägg till i varukorg
            </button>
            <br />

            <nav>
              <Link className="buttonText" to={`/product/${i}`}>
                <button style={{marginLeft:"-9px"}} onClick={() => showProducts(listItem.id)}>
                  
                  Läs mer...
                </button>
              </Link>
            </nav>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
