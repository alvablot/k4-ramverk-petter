import CartDetails from "../components/CartDetails";
import Links from "../components/Links";
import { useRecoilState, useRecoilValue } from "recoil";
import { amountState, priceState } from "../recoil/amountOfProducts/atom";
import Cart from "../components/Cart";

export default function CheckoutRoute(props) {
  const [totalAmountOfProducts, setTotalAmountOfProducts] =
    useRecoilState(amountState);
  const [summonPrice, setSummonPrice] = useRecoilState(priceState);
  let { addToCart } = props;
  let shipment = 159;
  let med = "Tack för att du spenderar alla dina pengar på mig!";
  if (totalAmountOfProducts < 1) {
    shipment = 0;
    med = "Du kan inte betala 0 kronor, pucko!";
  }

  function tack() {
    return alert(med);
  }
  const checked = "checked";
  return (
    <div>
      <header className="App-header">
        <Links />
        <Cart />
      </header>
      <main>
        <h3>Kassa</h3>
        <div className="products">
          Fraktkostnad: {shipment}kr
          <br />
          <b>Att betala: {summonPrice + shipment}kr</b>
          <br />
          <button onClick={tack}>Betala</button>
          <br />
          <input type="radio" name="betalning" /> Klarna
          <br />
          <input type="radio" name="betalning" /> Kort
          <br />
          <input type="radio" name="betalning" /> Paypal
        </div>
        <div>
          <CartDetails deleteItem={props.deleteItem} addToCart={addToCart} />
        </div>
      </main>
    </div>
  );
}
