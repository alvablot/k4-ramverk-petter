import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/userauth/atom";
import { userStatusStore } from "../recoil/userStatusStore/atom";

function Links() {
  const [userStatus, setUserStatus] = useRecoilState(userStatusStore);
  const [user, setUser] = useRecoilState(userState);
  const isLoggedin = !!user.token;

  return (
    <div className="rightHead">
      <h1 className="headline">PETTERS AFFÄR</h1>
      <nav>
        <Link to="/">Hem</Link> |<Link to="/products">Produkter</Link> |
        <Link to="/cart">Varukorg</Link> |<Link to="/checkout">Kassa</Link> |
         <Link to="/login">{ isLoggedin ? "Mitt konto" : "Logga in"}</Link> |
        <Link to="/admin">Admin</Link>
      </nav>
     
    </div>
  );
}
export default Links;
