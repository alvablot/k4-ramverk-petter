import { useState } from "react";
import { adminState } from "../recoil/adminauth/atom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { allUsersState } from "../recoil/allUsers/atom";
import { userStatusStore } from "../recoil/userStatusStore/atom";
import Links from "../components/Links";
import Cart from "../components/Cart";
import { productListState } from "../recoil/products/atom";

function Admin(props) {
  const { addToCart } = props;
  const [productlist, setProductlist] = useRecoilState(productListState);
  const [admin, setAdmin] = useRecoilState(adminState);
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);
  const [userStatus, setUserStatus] = useRecoilState(userStatusStore);
  const resetUser = useResetRecoilState(adminState);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedin = !!admin.token;
  let [userLink, setUserLink] = useState("");

  if (isLoggedin) {
    return (
      // Inloggad
      <div>
        <header className="App-header">
          <Links userLink={userLink} />
          <Cart value="" addToCart={addToCart} />
        </header>
        <main>
          <h3>{userStatus.loginStatus}</h3>

          <button onClick={resetUser}>Logga ut</button>
          <div className="content">
            <div className="adminProductList">
              <h3>Alla produkter</h3>
              {productlist.map((listItem, i) => {
                return (
                  <div key={`key_${i}`} className="adminItems">
                    <p>{listItem.title}</p>
                    <img className="thumbs" src={listItem.image} />
                  </div>
                );
              })}
            </div>

            <div className="adminUserList">
              <h3>Alla användare</h3>
              {allUsers.map((listItem, i) => {
                return (
                  <div key={`key_${i}`} className="adminItems">
                    {listItem.name.firstname} {listItem.name.lastname}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      // Ej inloggad
      <div>
        <header className="App-header">
          <Links />
          <Cart value="" addToCart={addToCart} />
        </header>
        <main className="products">
          <h3>Admin login</h3>
          {admin.user}
          <br />
          {admin.token}
          <br />
          Användarnamn
          <br />
          <input
            className="textInput"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            name="userName"
          />
          <br /> <br />
          Lösenord <br />
          <input
            className="textInput"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="password"
          />
          <br />
          <button
            onClick={() => {
              props.adminLogin(userName, password);
            }}
          >
            Logga in
          </button>
        </main>
      </div>
    );
  }
}

export default Admin;
