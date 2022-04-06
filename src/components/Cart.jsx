import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { amountState, priceState } from "../recoil/amountOfProducts/atom";
import cartImg from "../assets/cart.png";
import "../App.css";

function Cart() {
  const [totalAmountOfProducts, setTotalAmountOfProducts] =
    useRecoilState(amountState);
  const [summonPrice, setSummonPrice] = useRecoilState(priceState);
  let showAmount = null;
if(totalAmountOfProducts > 0 ) {
  showAmount = totalAmountOfProducts;
}
  return (
    <div className="cart">
      <nav>
        <Link to="/cart">
   
  
      <img src={cartImg} className="cartImg" />
      </Link>
      </nav><br />
      <span className="summonPrice">
        <b>{showAmount}</b>
        <br />
        <br />
    
      <b>{summonPrice}kr</b>
      </span>
    </div>
  );
}
export default Cart;
