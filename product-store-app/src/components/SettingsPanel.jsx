import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function SettingsPanel() {
    const { state, dispatch } = useContext(SettingsContext);

    return (
        <div className="container mt-3 d-flex gap-3">

            <button
                className={state.darkMode ? "btn btn-light" : "btn btn-dark"}
                onClick={() =>
                    dispatch({ type: "TOGGLE_THEME" })
                }
            >
                {state.darkMode ? "🌙Dark Mode" : "☀Light Mode"}
            </button>

            <button
                className={state.view === "grid" ? "btn btn-warning" : "btn btn-success"}
                onClick={() =>
                    dispatch({ type: "TOGGLE_VIEW" })
                }
            >
                {state.view === "grid" ? "📦Grid View" : "📃List View"}
            </button>

        </div>
    );
}