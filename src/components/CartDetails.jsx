import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState } from "../recoil/products/atom";
import { theCartState } from "../recoil/cart/atom";
import { amountState, priceState } from "../recoil/amountOfProducts/atom";
import "../App.css";

function Cart(props) {
  const [productlist, setProductlist] = useRecoilState(productListState);
  const [cartArray, setCartArray] = useRecoilState(theCartState);

  const [totalAmountOfProducts, setTotalAmountOfProducts] =
    useRecoilState(amountState);
  const [summonPrice, setSummonPrice] = useRecoilState(priceState);

  let i = 0;
  return (
    
    <div className="products">
      <div className="cart">
        {cartArray.map((item, i) => {
          return (
            
            <div key={`asd_${i}`}>
              <img className="thumb" src={productlist[item.id-1].image} />
              1 st {item.title} {Math.round(item.price)}kr<br />
              <a href="#" className="black" onClick={() => {
                return props.deleteItem(i);
              }}>Ta bort</a>
              <br /><br />
            </div>
          );
        })}
        <div  style={{position:"relative", top:"40px"}}>
        <span key={`asc_${i}`} className="summonPrice"> <br />
          <b key={`ayukyd_${i}`}>Totalt antal varor: {totalAmountOfProducts}</b>
        </span>
        <br />
        <span key={`arthr6d_${i}`} className="summonPrice">
          <b key={`atyjytsd_${i}`}>Summa: {Math.round(summonPrice)}kr</b>
          <br />
          Frakt tillkommer
        </span></div>
      </div>
    </div>
  );
}
export default Cart;
