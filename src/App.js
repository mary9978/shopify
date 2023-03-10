import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/CartPage";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CartProvider from "./Context/CartProvider";
import theme from './Theme';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./Context/AuthProvider";
import ProductProvider from './Context/ProductProvider';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ToastContainer />
        <ProductProvider>
          <AuthProvider>
            <CartProvider>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </CartProvider>
          </AuthProvider>
        </ProductProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
