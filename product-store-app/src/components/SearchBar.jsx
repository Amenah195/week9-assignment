import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function SearchBar() {
    const { state, dispatch } = useContext(SettingsContext);

    return (
        <div className="container mt-3 d-flex gap-2">

            <input
                className="form-control"
                placeholder="Search products..."
                value={state.search}
                onChange={(e) =>
                    dispatch({
                        type: "SET_SEARCH",
                        payload: e.target.value
                    })
                }
            />

            <select
                className="form-select w-25"
                onChange={(e) =>
                    dispatch({
                        type: "SET_CATEGORY",
                        payload: e.target.value
                    })
                }
            >
                <option value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
            </select>

        </div>
    );
}