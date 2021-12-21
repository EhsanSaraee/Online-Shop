import { toast } from 'react-toastify';
import { useCart, useCartDispatch } from '../Contexts/Cart/CartProvider';
import { products } from '../data';
import { checkCart } from '../Helpers/checkCart';

const HomePage = () => {
   const dispatch = useCartDispatch();
   const { cart } = useCart();

   const addProductHandler = (product) => {
      toast.success(`${product.name} added to cart`);
      dispatch({ type: 'ADD_TO_CART', payload: product });
   };
   return (
      <main className="container">
         <section className="productList">
            {products.map((product) => {
               return (
                  <section className="product" key={product.id}>
                     <div className="productImg">
                        <img src={product.image} alt={product.name} />
                     </div>
                     <div className="productDesc">
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button
                           className="btn primary"
                           onClick={() => addProductHandler(product)}
                        >
                           {checkCart(cart, product)
                              ? 'In Cart'
                              : 'Add to Cart'}
                        </button>
                     </div>
                  </section>
               );
            })}
         </section>
      </main>
   );
};

export default HomePage;
