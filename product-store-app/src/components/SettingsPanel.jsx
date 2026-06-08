import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function SettingsPanel() {
    const { state, dispatch } = useContext(SettingsContext);

    return (
        <div className="container mt-3 d-flex gap-3">

            <button
                className="btn btn-dark"
                onClick={() =>
                    dispatch({ type: "TOGGLE_THEME" })
                }
            >
                Theme: {state.darkMode ? "Dark" : "Light"}
            </button>

            <button
                className="btn btn-primary"
                onClick={() =>
                    dispatch({ type: "TOGGLE_VIEW" })
                }
            >
                View: {state.view}
            </button>

        </div>
    );
}