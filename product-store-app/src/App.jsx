import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import SettingsPanel from "./components/SettingsPanel";
import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
import SearchBar from "./components/SearchBar";

function App() {

  const { state } = useContext(SettingsContext);


  return (
    <div className={state.darkMode ? "bg-dark text-white min-vh-100" : ""}>
      <BrowserRouter>
        <Navbar />
        <SettingsPanel />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;