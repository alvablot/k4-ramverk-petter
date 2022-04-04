import { atom } from "recoil";

export const productListState = atom({
  key: "ProductList",
  default: [],
});

export const filterProductState = atom({
  key: "FilterProducts",
  default: "",
});

///category/jewelery