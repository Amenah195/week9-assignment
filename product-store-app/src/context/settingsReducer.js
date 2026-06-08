export const initialState = {
    darkMode: false,
    view: "grid"
};

export const settingsReducer = (state, action) => {
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

        default:
            return state;
    }
};