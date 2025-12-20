import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="px-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
};

export default App;
