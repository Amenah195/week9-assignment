import { createContext, useReducer } from "react";

export const SettingsContext = createContext();

const initialState = {
    darkMode: false,
    view: "grid",
    search: "",
    category: "all"
};

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                darkMode: !state.darkMode
            };

        case "TOGGLE_VIEW":
            return {
                ...state,
                view: state.view === "grid" ? "list" : "grid"
            };


        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload
            };

        case "SET_CATEGORY":

            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export function SettingsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SettingsContext.Provider value={{ state, dispatch }}>
            {children}
        </SettingsContext.Provider>
    );
}