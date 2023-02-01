export const CheckItemInCart = (cart, product) => {
  return cart.find((c) => c.id === product.id);
};