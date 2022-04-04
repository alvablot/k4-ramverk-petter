import Cart from "../components/Cart";
import Links from "../components/Links";

export default function HomeRoute() {

  return (
    <div>
      <header className="App-header">
        <Links />
        <Cart />
      </header>
      <main style={{ padding: "1rem 0" }}>
        <h3>Hem</h3>
        <div className="products">
          <h3> Välkommen till min horribla internetaffär!</h3>
          <h4>
            Här kan du köpa både begagnat grus och diverse användbara saker, som
            använda plastomslag mm från Clas Ohlson.
          </h4>
        </div>
      </main>
    </div>
  );
}
