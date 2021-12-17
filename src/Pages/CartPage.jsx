import { useCart } from '../Contexts/Cart/CartProvider';

const CartPage = () => {
   const { cart } = useCart();

   const renderCart = () =>
      cart.map((item) => (
         <div key={item.id}>
            <p>{item.name}</p>
         </div>
      ));

   return <main>{cart ? renderCart() : <p>cart is empty</p>}</main>;
};

export default CartPage;
