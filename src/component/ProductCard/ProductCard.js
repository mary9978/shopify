import { useState } from "react";
import "./product.css";
import { CheckItemInCart, CheckTotalDiscount } from "../../utils/checkIbCart";
import { useCartAction, useCart } from "../../Context/CartProvider";
import { toast } from 'react-toastify';
const ProductCard = ({ productList }) => {
  const [heart, setheart] = useState(true);
  const dispatch = useCartAction();
  const addProductHandler = (product) => {
    console.log('product to add', product);
    console.log("product to add", product._id);
    toast.success(`${productList.name} added to cart`, {
      position: toast.POSITION.BOTTOM_LEFT,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
    });
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const Heart = () => {
    if (heart) {
      setheart(false);
    } else {
      setheart(true);
    }
  };
  const { cart } = useCart();
  return (
    <div className="card d-table mx-auto">
      <i className="fa fa-long-arrow-left"></i>
      <div className="image">
        <img src={productList.image} alt="" width={"100%"} height={"200px"} />
      </div>
      <div className="text">
        <h3 className="mt-2">{productList.name}</h3>
        <div className="rating_reviews">
          <p>4.7</p>
          <p>32 reviews</p>
        </div>
        <h6>price is {productList.price}</h6>
        <h6>off is {productList.discount}</h6>
        <div className="price">
          <h3 className={productList.discount ? 'has-discount' :'no-discount'}>
            {productList.discount
              ? productList.price - productList.discount
              : productList.price}
          </h3>
          <div className="qty">
            <i className="fa fa-minus"></i>
            <p></p>
            <i className="fa fa-plus"></i>
          </div>
        </div>
        <div className="description">
          <h5>Description</h5>
          {/* <p>
            {readMore
              ? productList.description
              : productList.description.slice(0, 150)}
          </p> */}
        </div>
        <div className="last_section">
          <button onClick={() => addProductHandler(productList)}>
            Add to cart
          </button>
          <h6>
            {CheckItemInCart(cart, productList)
              ? "item is in cart already"
              : ""}
          </h6>
          <div className="heart">
            <i
              onClick={Heart}
              className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
