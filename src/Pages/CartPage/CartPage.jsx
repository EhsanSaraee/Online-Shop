import { useCart } from '../../Contexts/Cart/CartProvider';
import './CartPage.css';

const CartPage = () => {
   const { cart } = useCart();

   return (
      <main className="container">
         <section className="cartContainer">
            <section className="cartItemList">
               {cart?.map(({ name, image, price, quantity, id }) => (
                  <div className="cartItem" key={id}>
                     <div className="cartImg">
                        <img src={image} alt={name} />
                     </div>
                     <div>{name}</div>
                     <div>{price * quantity}</div>
                     <div>
                        <button>Remove</button>
                        <button>{quantity}</button>
                        <button>Add</button>
                     </div>
                  </div>
               ))}
            </section>
            <section className="cartSummary">Cart Summary</section>
         </section>
      </main>
   );
};

export default CartPage;
