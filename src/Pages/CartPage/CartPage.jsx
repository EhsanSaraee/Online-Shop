import { useCart, useCartDispatch } from '../../Contexts/Cart/CartProvider';
import './CartPage.css';

const CartPage = () => {
   const { cart, total } = useCart();
   const dispatch = useCartDispatch();

   const increment = (cartItem) => {
      dispatch({ type: 'ADD_TO_CART', payload: cartItem });
   };

   const decrement = (cartItem) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: cartItem });
   };

   return (
      <main className="container">
         <section className="cartContainer">
            <section className="cartItemList">
               {cart?.map((item) => (
                  <div className="cartItem" key={item.id}>
                     <div className="cartImg">
                        <img src={item.image} alt={item.name} />
                     </div>
                     <div>{item.name}</div>
                     <div>{item.price * item.quantity}</div>
                     <div>
                        <button onClick={() => decrement(item)}>Remove</button>
                        <button>{item.quantity}</button>
                        <button onClick={() => increment(item)}>Add</button>
                     </div>
                  </div>
               ))}
            </section>
            <section className="cartSummary">
               <h2>Cart Summary</h2>
               <div>${total}</div>
            </section>
         </section>
      </main>
   );
};

export default CartPage;
