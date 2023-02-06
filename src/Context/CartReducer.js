const AddProductToCart = (state, action) => {
  const updatedCart = [...state.cart];
  const updatedTotal = state.total + 1;
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === action.payload.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...action.payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    totalprice: state.totalprice + action.payload.price,
    total: updatedTotal,
    cart: updatedCart,
  };
};
const RemoveProductFromCart = (state, action) => {
  const updatedCart1 = [...state.cart];
  const updatedTotal1 = state.total - 1;
  const index = updatedCart1.findIndex((item) => item.id === action.payload.id);
  const updatedItem = { ...updatedCart1[index] };
  if (updatedItem.quantity === 1) {
    const filtercartItem = updatedCart1.filter(
      (c) => c.id !== action.payload.id
    );
    return {
      totalprice: state.totalprice - action.payload.price,
      total: updatedTotal1,
      cart: filtercartItem,
    };
  } else {
    updatedItem.quantity--;
    updatedCart1[index] = updatedItem;
    return {
      totalprice: state.totalprice - action.payload.price,
      total: updatedTotal1,
      cart: updatedCart1,
    };
  }
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return AddProductToCart(state, action);

    case "REMOVE_FROM_CART":
      return RemoveProductFromCart(state, action);
    
    case "RETURN_ALL":
      return state;
    default:
      return state;
  }
};

export default CartReducer;
