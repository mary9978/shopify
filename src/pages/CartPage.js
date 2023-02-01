import Layout from "../Layout/Layout";
import { useCart, useCartAction } from "../Context/CartProvider";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { totalDiscount } from "../utils/totalDiscount";
import { Link } from "react-router-dom";
// import CartSummery from "../component/CartSummery/CartSummery";
const Cart = () => {
  const { cart, total } = useCart();
  const price = useCart().totalprice;
  const dispatch = useCartAction();
  return (
    <Layout>
      <main className="cart--page__style">
        {cart.length !== 0 ? (
          <>
            <div className="d-flex flex-row justify-content-around">
              <div className="div--cartProduct">
                <h2>total price is - ${price}</h2>
                {cart.map((item) => {
                  return (
                    <div key={item.id}>
                      <img src={item.image} alt={item.name} width={"100px"} />
                      <h6>item number is - {item.quantity}</h6>
                      <h6>{item.name}</h6>
                      <h6>$ {item.price}</h6>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: item })
                        }
                      >
                        <DeleteTwoToneIcon />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="div--cartSummery">
                <CartSummery totalprice={price} cart={cart}/>
              </div>
            </div>
          </>
        ) : (
          <h2>no item on cart</h2>
        )}
      </main>
    </Layout>
  );
};
export default Cart;
const CartSummery = ({ totalprice,cart }) => {
  return (
    <div className="cart--summery mt-3 rounded">
      <h6>price total = $ {totalprice}</h6>
      <h6>total discount = $ {totalDiscount(cart)}</h6>
      <h6>netprice : {totalprice - totalDiscount(cart)}</h6>
      <Link to={'/checkout'}>checkout</Link>
    </div>
  );
}
