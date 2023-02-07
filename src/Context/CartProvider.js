import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import CartReducer from "./CartReducer";
const cartContext = createContext();
const cartDispatcher = createContext();
const intialValues ={
    cart:[],
    total:0,
    totalprice:0
}
const CartProvider = ({ children }) => {
    const [cartList] = useState(() => {
      return JSON.parse(localStorage.getItem("cartItem")) || intialValues;
    });
  const [cart, dispatch] = useReducer(CartReducer, cartList);

  
    useEffect(() => {
      const data = JSON.stringify(cart);
      localStorage.setItem("cartItem", data);
    }, [cart]);
  
    return ( 
     <cartContext.Provider value={cart}>
        <cartDispatcher.Provider value={dispatch}>
          {children}
        </cartDispatcher.Provider>
     </cartContext.Provider>
     );
};
export default CartProvider;

export const useCart=()=> useContext(cartContext);
export const useCartAction=()=> useContext(cartDispatcher);