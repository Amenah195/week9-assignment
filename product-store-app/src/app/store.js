import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";


// 📦 Load cart from localStorage
const loadCartFromStorage = () => {
    try {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : { items: [] };
    } catch (error) {
        return { items: [] };
    }
};


// 💾 Save cart to localStorage
const saveCartToStorage = (state) => {
    try {
        localStorage.setItem(
            "cart",
            JSON.stringify(state)
        );
    } catch (error) {
        // ignore errors
    }
};


// 🏪 Redux Store
export const store = configureStore({
    reducer: {
        cart: cartReducer
    },

    preloadedState: {
        cart: loadCartFromStorage()
    }
});


// 🔁 Subscribe to changes
store.subscribe(() => {
    saveCartToStorage(store.getState().cart);
});