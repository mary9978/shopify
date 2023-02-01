import { useState } from "react";
import "./product.css";
import { CheckItemInCart, CheckTotalDiscount } from "../../utils/checkIbCart";
import { useCartAction, useCart } from "../../Context/CartProvider";
import { toast } from 'react-toastify';
const ProductCard = ({ productData }) => {
  const [readMore, setreadMore] = useState(false);
  const [heart, setheart] = useState(true);
  const dispatch = useCartAction();
  const addProductHandler = (product) => {
    toast.success(`${productData.name} added to cart`, {
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
        <img src={productData.image} alt="" width={"100%"} height={"200px"} />
      </div>
      <div className="text">
        <h3 className="mt-2">{productData.name}</h3>
        <div className="rating_reviews">
          <div className="rating">
            <input type="radio" name="rating" value="5" id="5" />
            <label htmlFor="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label htmlFor="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label htmlFor="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label htmlFor="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label htmlFor="1">☆</label>
          </div>
          <p>4.7</p>
          <p>32 reviews</p>
        </div>
        <h6>price is {productData.price}</h6>
        <h6>off is {productData.discount}</h6>
        <div className="price">
          <h3 className={productData.discount ? 'has-discount' :'no-discount'}>
            {productData.discount
              ? productData.price - productData.discount
              : productData.price}
          </h3>
          <div className="qty">
            <i className="fa fa-minus"></i>
            <p></p>
            <i className="fa fa-plus"></i>
          </div>
        </div>
        <div className="description">
          <h5>Description</h5>
          <p>
            {readMore
              ? productData.description
              : productData.description.slice(0, 150)}
          </p>
        </div>
        <div className="last_section">
          <button onClick={() => addProductHandler(productData)}>
            Add to cart
          </button>
          <h6>
            {CheckItemInCart(cart, productData)
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
