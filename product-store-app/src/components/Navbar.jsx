import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <nav className="navbar navbar-dark bg-success px-4">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    Product Store
                </span>
                <Link to="/" className="btn btn-warning">Store</Link>

                <Link to="/cart" className="btn btn-warning">
                    Cart ({totalItems})
                </Link>
            </div>
        </nav>
    );
}