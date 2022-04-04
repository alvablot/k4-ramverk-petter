import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
export default function ProductRoute(props) {
  const { addToCart } = props;
  let params = useParams();

  return <ProductDetails id={params.id} addToCart={addToCart} />;
}
