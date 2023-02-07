import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();
export const ProductContextActions = createContext();

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const makeRequest = async () => {
        try {
           const response = await axios.get(
             "http://localhost:5000/api/product"
            ); 
            setProduct(response.data)
            // console.log("response", response);
            return;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    useEffect(() => {
        makeRequest();
  }, [product]);
  return (
    <ProductContext.Provider value={product}>
      <ProductContextActions.Provider value={setProduct}>
        {children}
      </ProductContextActions.Provider>
    </ProductContext.Provider>
  );
};
export default ProductProvider;

export const useProduct = () => useContext(ProductContext);
export const useProductActions = () => useContext(ProductContextActions);
