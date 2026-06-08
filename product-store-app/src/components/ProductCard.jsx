import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "10px"
            }}
        >
            <img
                src={product.images[0]}
                alt={product.title}
                width="120"
            />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

            <Link to={`/product/${product.id}`}>
                Details
            </Link>

            <br />
            <br />

            <button
                onClick={() =>
                    dispatch(addToCart(product))
                }
            >
                Add To Cart
            </button>
        </div >
    );
}