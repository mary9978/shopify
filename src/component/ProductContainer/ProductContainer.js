import "./product.css";
import { useEffect, useState } from "react";
import { products } from '../../data';
import { useProduct, useProductActions } from "../../Context/ProductProvider";
import http from '../../services/httpServices';
import {GetAllProducts} from '../../services/GetAllProducts';
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";


const Product = () => {
  let productData = useProduct();
  // console.log("productData", productData);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {products.map((item) => {
            return (
              <div className="col-md-4 mt-3" key={item._id}>
                <ProductCard productList={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
