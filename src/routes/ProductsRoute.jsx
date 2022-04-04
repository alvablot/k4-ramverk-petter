import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Links from "../components/Links";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState, filterProductState } from "../recoil/products/atom";

export default function ProductsRoute(props) {
  const {
    showProducts,
    addToCart,
  } = props;
  const [filterProducts, setFilterProducts] = useRecoilState(filterProductState);

function filterCat(e) {
  setFilterProducts(e.target.name)
}
  return (
    <div>
      <header className="App-header">
        <Links />
        <Cart />
      </header>
      <main style={{ padding: "1rem 0" }}>
        <h3>Produktlista</h3>
       <b>Filtrera:</b> <input className="filterButtons" type="button" onClick={filterCat} name="" value="Allt" />
       <input className="filterButtons" type="button" onClick={filterCat} name="/category/jewelery" value="Smycken" />  
       <input className="filterButtons" type="button" onClick={filterCat} name="/category/men's clothing" value="Kläder män" />  
       <input className="filterButtons" type="button" onClick={filterCat} name="/category/women's clothing" value="Kläder kvinnor" />  
       <input className="filterButtons" type="button" onClick={filterCat} name="/category/electronics" value="Elektronik" />  
  
        <Products
          addToCart={addToCart}
          showProducts={showProducts}
        />
      </main>
    </div>
  );
}
