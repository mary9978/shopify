import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/CartPage";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
