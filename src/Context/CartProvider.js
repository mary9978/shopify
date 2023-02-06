import { useReducer,createContext,useContext,useEffect } from "react";
import CartReducer from "./CartReducer";
const cartContext = createContext();
const cartDispatcher = createContext();
const intialValues ={
    cart:[],
    total:0,
    totalprice:0
}
const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(CartReducer, intialValues);
    useEffect(() => {
      const cartData = JSON.parse(localStorage.getItem("cartItem")) || false;
      if (cartData) {
        dispatch(cartData, "RETURN_ALL");
      }
    }, []);
  
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