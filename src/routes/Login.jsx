import { useState, useEffect } from "react";
import { userState } from "../recoil/userauth/atom";
import { createUserState } from "../recoil/newUser/atom";
import { Routes, Route, Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { allUsersState } from "../recoil/allUsers/atom";

import Links from "../components/Links";
import Cart from "../components/Cart";

function Login(props) {
  const { addToCart, summonPrice, totalAmountOfProducts } = props;
  const [user, setUser] = useRecoilState(userState);
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);
  const resetUser = useResetRecoilState(userState);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  let [index, setIndex] = useState(0);

  const isLoggedin = !!user.token;
  let [userLink, setUserLink] = useState("");
  let [count] = useState(0);
  if (isLoggedin) {
    allUsers.map((items, i) => {
      if (items.id === user.userId) {
        count = i;
      }
    });

    return (
      // Inloggad
      <div>
        <header className="App-header">
          <Links userLink={userLink} />
          <Cart value="" addToCart={addToCart} />
        </header>
        <main className="products">
          <h3>
            Välkommen {allUsers[count].name.firstname}{" "}
            {allUsers[count].name.lastname}!
          </h3>
          Användarnamn: {allUsers[count].username}
          <br />
          Lösenord: {allUsers[count].password}
          <br />
          Användarnamn: {allUsers[count].email}
          <br />
          Stad: {allUsers[count].address.city}
          <br />
          Gata: {allUsers[count].address.street}
          <br />
          Nummer: {allUsers[count].address.number}
          <br />
          Postnummer: {allUsers[count].address.zipcode}
          <br />
          Telenummer: {allUsers[count].phone}
          <br />
          ID: {allUsers[count].id}
          <br />
          Roll: {allUsers[count].role}
          <br />
          <button onClick={resetUser}>Logga ut</button>
        </main>
      </div>
    );
  } else {
    return (
      // Ej inloggad
      <div>
        <header className="App-header">
          <Links />
          <Cart
            value=""
            addToCart={addToCart}
            summonPrice={summonPrice}
            totalAmountOfProducts={totalAmountOfProducts}
          />
        </header>
        <main className="products">
          <h3>Login</h3>
          {user.userId}
          <br />
          {user.token}
          <br />
          Användarnamn
          <br />
          <input
            required
            className="textInput"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            name="userName"
          />
          <br /> <br />
          Lösenord <br />
          <input
            required
            className="textInput"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="password"
          />
          <br />
          <button
            onClick={() => {
              props.login(userName, password, user.userId);
            }}
          >
            Logga in
          </button>
          {/*Registrera ny användare*/}
          <Register login={props.login} />
        </main>
      </div>
    );
  }
}

export default Login;

function Register(props) {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);
  const [newUser, setNewUser] = useRecoilState(createUserState);

  function createUser(event) {
    event.preventDefault();
    fetch("https://k4backend.osuka.dev/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: userName,
        password: password,
        role: "user",
        name: {
          firstname: fName,
          lastname: lName,
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
        },
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((json) => setAllUsers((allUsers) => [...allUsers, json]));
    alert(
      `Du har nu skapat användaren ${userName} och kan nu logga in med dina uppgifter`
    );
    setUserName("");
    setPassword("");
    setFName("");
    setLName("");
    setEmail("");
    setCity("");
    setStreet("");
    setNumber("");
    setZipcode("");
    setPhone("");
  }

  return (
    <div style={{ position: "relative", left: "300px", top: "-200px" }}>
      <form onSubmit={createUser}>
        * Förnamn <br />
        <input
          className="textInput"
          type="text"
          onChange={(e) => setFName(e.target.value)}
          value={fName}
          name="firstName"
        />
        <br /> <br />
        * Efternamn <br />
        <input
          className="textInput"
          type="text"
          onChange={(e) => setLName(e.target.value)}
          value={lName}
          name="lastName"
        />
        <br /> <br />
        * Email <br />
        <input
          className="textInput"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
        />
        <br /> <br />
        * Användarnamn <br />
        <input
          required
          className="textInput"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          name="userName"
        />
        <br /> <br />
        * Lösenord <br />
        <input
          required
          className="textInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <br />
        <br />
        Stad
        <br />
        <input
          className="textInput"
          type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          name="city"
        />
        <br />
        <br />
        Gata
        <br />
        <input
          className="textInput"
          type="text"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
          name="street"
        />
        <br />
        <br />
        Nummer
        <br />
        <input
          className="textInput"
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          name="number"
        />
        <br />
        <br />
        Postnummer
        <br />
        <input
          className="textInput"
          type="text"
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
          name="zipcode"
        />
        <br />
        <br />
        Telefonnummer
        <br />
        <input
          className="textInput"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          name="phone"
        />
        <br />
        <br />
        <input type="submit" value="Registrera ny användare" />
      </form>
    </div>
  );
}
