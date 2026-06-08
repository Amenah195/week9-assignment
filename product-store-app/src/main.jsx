import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import { store } from "./app/store";


import { SettingsProvider } from "./context/SettingsContext";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SettingsProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SettingsProvider>
  </Provider>
);