import { createContext, useContext, useReducer } from 'react';
import cartReducer from './cartReducer';

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
   cart: [],
   total: 0,
};

const CartProvider = ({ children }) => {
   const [cart, dispatch] = useReducer(cartReducer, initialState);
   return (
      <CartContext.Provider value={cart}>
         <CartContextDispatcher value={dispatch}>
            {children}
         </CartContextDispatcher>
      </CartContext.Provider>
   );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartContextDispatcher);
