export const checkCart = (cart, product) =>
   cart.find((item) => item.id === product.id);
