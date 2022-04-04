import Products from "../components/Products";
import Cart from "../components/Cart";
import Links from "../components/Links";
import CartDetails from "../components/CartDetails";
export default function CartRoute(props) {
  const { addToCart, deleteItem } = props;
  return (
    <div>
      <header className="App-header">
        <Links value="" addToCart={addToCart} />
      </header>
      <main style={{ padding: "1rem 0" }}>
        <h3>Varukorg</h3>
        <CartDetails value="" addToCart={addToCart} deleteItem={deleteItem} />
      </main>
    </div>
  );
}
