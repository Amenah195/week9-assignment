import { useDispatch, useSelector } from "react-redux";

import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} from "../redux/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();

    const items = useSelector(
        state => state.cart.items
    );

    const totalPrice = items.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h1>Shopping Cart</h1>

            <button
                onClick={() =>
                    dispatch(clearCart())
                }
            >
                Clear Cart
            </button>

            {items.map(item => (
                <div
                    key={item.id}
                    style={{
                        border: "1px solid gray",
                        margin: "10px",
                        padding: "10px"
                    }}
                >
                    <h3>{item.title}</h3>

                    <p>Price: ${item.price}</p>

                    <p>Quantity: {item.quantity}</p>

                    <button
                        onClick={() =>
                            dispatch(
                                increaseQuantity(item.id)
                            )
                        }
                    >
                        +
                    </button>

                    <button
                        onClick={() =>
                            dispatch(
                                decreaseQuantity(item.id)
                            )
                        }
                    >
                        -
                    </button>

                    <button
                        onClick={() =>
                            dispatch(
                                removeFromCart(item.id)
                            )
                        }
                    >
                        Remove
                    </button>
                </div>
            ))}

            <h2>
                Total Price: $
                {totalPrice.toFixed(2)}
            </h2>
        </div>
    );
}