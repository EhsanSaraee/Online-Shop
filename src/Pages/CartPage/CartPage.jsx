import { Link } from 'react-router-dom';
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

   if (!cart.length) {
      return <h2>Cart is Empty</h2>;
   }

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
                     <div>{item.offPrice * item.quantity}</div>
                     <div className="btnGroup">
                        <button onClick={() => decrement(item)}>-</button>
                        <button>{item.quantity}</button>
                        <button onClick={() => increment(item)}>+</button>
                     </div>
                  </div>
               ))}
            </section>
            <CartSummary cart={cart} total={total} />
         </section>
      </main>
   );
};

export default CartPage;

const CartSummary = ({ cart, total }) => {
   const currentTotalPrice = cart.length
      ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
      : 0;
   return (
      <section className="cartSummary">
         <h2>Cart Summary</h2>
         <div className="summaryItem">
            <p>Current Price</p>
            <p>${currentTotalPrice}</p>
         </div>
         <div className="summaryItem">
            <p>discount Amount</p>
            <p>${currentTotalPrice - total}</p>
         </div>
         <div className="summaryItem net">
            <p>Total Price</p>
            <p>${total}</p>
         </div>
         <Link to="/sign-up?redirect=checkout">
            <button
               className="btn primary"
               style={{ marginTop: '20px', width: '100%' }}
            >
               Go to Checkout
            </button>
         </Link>
      </section>
   );
};
