import { useState, useEffect } from "react";
import "./App.css";
import { getProducts } from "./data";
import { useRecoilState, useRecoilValue } from "recoil";
import { amountState, priceState } from "./recoil/amountOfProducts/atom";
import { productListState, filterProductState } from "./recoil/products/atom";
import { theCartState } from "./recoil/cart/atom";
import { adminState } from "./recoil/adminauth/atom";
import { userState } from "./recoil/userauth/atom";
import { allUsersState } from "./recoil/allUsers/atom";
import { activeUserState } from "./recoil/activeUser/atom";
import { userStatusStore } from "./recoil/userStatusStore/atom";
import { Routes, Route, Link } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import ProductRoute from "./routes/ProductRoute";
import ProductsRoute from "./routes/ProductsRoute";
import CartRoute from "./routes/CartRoute";
import CheckoutRoute from "./routes/CheckoutRoute";

function App() {
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);

  useEffect(() => {
    fetch("https://k4backend.osuka.dev/users")
      .then((res) => res.json())
      .then((json) => setAllUsers(json));
  }, []);

  const [userStatus, setUserStatus] = useRecoilState(userStatusStore);
  const [user, setUser] = useRecoilState(userState);
  const [activeUser, setActiveUser] = useRecoilState(activeUserState);
  function login(username, password, id) {
    fetch("https://k4backend.osuka.dev/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        userId: id,
      }),
    })
      .then((res) => res.json())
      .then((json) => setStatus(json, username, setUser));
  }
  const [admin, setAdmin] = useRecoilState(adminState);
  function setStatus(data, username, functionType) {
    functionType(data);
    /*setUserStatus({ loginStatus: "Du är inte inloggad" });
    return console.log(userStatus);*/

    if (data.token && username === "admin") {
      setUserStatus({
        userStatus,
        loginStatus: "Du är nu inloggad som administratör",
      });
      console.log(userStatus);
    } else if (data.token && username !== "admin") {
      setUserStatus({
        userStatus,
        loginStatus: "Du är inloggad som användare",
      });
      console.log(userStatus);
    } else {
      setUserStatus({ userStatus, loginStatus: "Du är inte inloggad" });
      console.log(userStatus);
    }
  }

  function adminLogin(username, password) {
    fetch("https://k4backend.osuka.dev/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "admin",
        password: "admin",
      }),
    })
      .then((res) => res.json())
      .then((json) => setStatus(json, username, setAdmin));
  }

  const [productlist, setProductlist] = useRecoilState(productListState);
  const [filterProducts, setFilterProducts] =
    useRecoilState(filterProductState);

  useEffect(() => {
    fetch(`https://k4backend.osuka.dev/products${filterProducts}`)
      .then((res) => res.json())
      .then((json) => setProductlist(json));
  }, [filterProducts]);

  const [productArray, setProductArray] = useState(getProducts());
  const [productDetail, setProductDetail] = useState(0);
  function showProducts(id) {
    setProductDetail(id);
  }

  const [totalAmountOfProducts, setTotalAmountOfProducts] =
    useRecoilState(amountState);
  const [summonPrice, setSummonPrice] = useRecoilState(priceState);
  const [cartArray, setCartArray] = useRecoilState(theCartState);

  function addToCart(index, price, amount, id) {
    setSummonPrice(Math.round(summonPrice) + Math.round(price));
    setTotalAmountOfProducts(totalAmountOfProducts + amount);
    setCartArray(() => [
      ...cartArray,
      {
        id: productlist[index].id,
        title: productlist[index].title,
        price: Math.round(productlist[index].price),
      },
    ]);
  }

  function deleteItem(index) {
    if (window.confirm("Vill du ta bort varan?")) {
      setTotalAmountOfProducts(totalAmountOfProducts - 1);

      setSummonPrice(summonPrice - cartArray[index].price);

      setCartArray((prevItems) => {
        return [...prevItems.slice(0, index), ...prevItems.slice(index + 1)];
      });
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<Login login={login} showProducts={showProducts} />}
        />
        <Route
          path="/"
          element={
            <HomeRoute addToCart={addToCart} showProducts={showProducts} />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsRoute addToCart={addToCart} showProducts={showProducts} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductRoute addToCart={addToCart} showProducts={showProducts} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartRoute
              deleteItem={deleteItem}
              addToCart={addToCart}
              showProducts={showProducts}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutRoute deleteItem={deleteItem} addToCart={addToCart} showProducts={showProducts} />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin adminLogin={adminLogin} showProducts={showProducts} />
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Oj, nu hamnade du fel!</p>
              <nav>
                <Link to="/" style={{ color: "black" }}>
                  Hem
                </Link>
              </nav>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
