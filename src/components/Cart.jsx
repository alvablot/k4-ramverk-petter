import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { amountState, priceState } from "../recoil/amountOfProducts/atom";
import "../App.css";

function Cart() {
  const [totalAmountOfProducts, setTotalAmountOfProducts] = useRecoilState(amountState);
  const [summonPrice, setSummonPrice] = useRecoilState(priceState);

  return (

      <div className="cart">
        <nav>
          <Link to="/cart">
            <h3 className="black">Varukorg</h3>
          </Link>
        </nav>
        <span className="summonPrice">
          <b>Totalt antal varor {totalAmountOfProducts}</b>
        </span>
        <br />
        <span className="summonPrice">
          <b>Summa: {summonPrice}kr</b>
        </span>
      </div>

  );
}
export default Cart;
