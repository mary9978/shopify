import { useReducer } from 'react';
import products from '../data';
const ProductProvider = () => {
const reducer =(state,action)=>{
   switch(action.type){
    case "GET_PRODUCT":
        return state;   
    default :
        return state;
   }
}
const [product,dispatch]=useReducer(reducer,products);
    return ( 

     );
}
 
export default ProductProvider;