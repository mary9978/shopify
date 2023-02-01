export const totalDiscount = (cart) => {
    let totaldiscount = 0;
    totaldiscount += parseFloat(cart.map((item) => {
      return item.discount;
    }));
    return totaldiscount;
}