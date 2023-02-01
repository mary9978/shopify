import "./product.css";
import {products} from '../../data';
import ProductCard from "../ProductCard/ProductCard";
const Product = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
        {
         products.map(item=>{
          return(
            <div className="col-md-4 mt-3" key={item.id}>
            <ProductCard productData={item}/>
            </div>
          )
         })
        }

       </div>
      </div>
    </>
  );
};

export default Product;
