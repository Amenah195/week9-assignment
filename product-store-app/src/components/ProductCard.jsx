import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="card product-card h-100 shadow-sm">
            <div className="product-img-wrapper">
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="product-img"
                />
            </div>

            <div className="card-body d-flex flex-column">


                <h6 className="product-title">
                    {product.title.length > 50
                        ? product.title.slice(0, 50) + "..."
                        : product.title}
                </h6>


                <p className="product-price">
                    ${product.price}
                </p>


                <div className="mt-auto d-flex justify-content-between align-items-center">


                    <Link
                        to={`/product/${product.id}`}
                        className="details-link"
                    >
                        Details
                    </Link>


                    <button
                        className="btn btn-success btn-sm"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add +
                    </button>

                </div>

            </div>
        </div >
    );
}