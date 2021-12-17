import { useCartDispatch } from '../Contexts/Cart/CartProvider';
import { products } from '../data';

const HomePage = () => {
   const dispatch = useCartDispatch();
   const addProductHandler = (product) => {
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
                           Add to Cart
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
