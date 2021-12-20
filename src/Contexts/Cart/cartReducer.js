const cartReducer = (state, action) => {
   const { type, payload } = action;
   switch (type) {
      case 'ADD_TO_CART': {
         const updatedCart = [...state.cart];
         const index = updatedCart.findIndex((item) => item.id === payload.id);
         if (index < 0) {
            updatedCart.push({ ...payload, quantity: 1 });
         } else {
            const updatedItem = { ...updatedCart[index] };
            updatedItem.quantity++;
            updatedCart[index] = updatedItem;
         }
         return {
            ...state,
            cart: updatedCart,
            total: state.total + payload.price,
         };
      }
      case 'REMOVE_FROM_CART': {
         const updatedCart = [...state.cart];
         const index = updatedCart.findIndex((item) => item.id === payload.id);
         const updatedItem = { ...updatedCart[index] };
         if (updatedItem.quantity === 1) {
            const filteredCart = updatedCart.filter(
               (item) => item.id !== payload.id
            );
            return {
               ...state,
               cart: filteredCart,
               total: state.total - payload.price,
            };
         } else {
            updatedItem.quantity--;
            updatedCart[index] = updatedItem;
            return {
               ...state,
               cart: updatedCart,
               total: state.total - payload.price,
            };
         }
      }
      default:
         return state;
   }
};

export default cartReducer;
