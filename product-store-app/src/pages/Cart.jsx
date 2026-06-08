import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} from "../redux/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // 🧾 Empty Cart UI
    if (items.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>🛒 Your Cart is Empty</h2>
                <p className="text-muted">
                    Add some products to see them here
                </p>
            </div>
        );
    }

    return (
        <div className="container mt-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Shopping Cart</h2>

                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>

            {/* Cart Items */}
            <div className="row g-3">

                {items.map((item) => (
                    <div key={item.id} className="col-12">

                        <div className="card shadow-sm p-3 d-flex flex-row align-items-center gap-3">

                            {/* Image */}
                            <img
                                src={item.image || item.images?.[0]}
                                alt={item.title}
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "contain"
                                }}
                            />

                            {/* Info */}
                            <div className="flex-grow-1">
                                <h5 className="mb-1">{item.title}</h5>
                                <p className="mb-1 text-muted">
                                    Price: ${item.price}
                                </p>

                                <div className="d-flex align-items-center gap-2">

                                    {/* Quantity controls */}
                                    <button
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            dispatch(decreaseQuantity(item.id))
                                        }
                                    >
                                        -
                                    </button>

                                    <span className="fw-bold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() =>
                                            dispatch(increaseQuantity(item.id))
                                        }
                                    >
                                        +
                                    </button>

                                </div>
                            </div>

                            {/* Remove */}
                            <button
                                className="btn btn-outline-danger"
                                onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                }
                            >
                                Remove
                            </button>

                        </div>

                    </div>
                ))}

            </div>

            {/* Total */}
            <div className="mt-4 p-3 bg-light rounded shadow-sm d-flex justify-content-between align-items-center">

                <h4 className="mb-0">
                    Total: ${totalPrice.toFixed(2)}
                </h4>

                <button className="btn btn-success">
                    Checkout
                </button>

            </div>

        </div>
    );
}