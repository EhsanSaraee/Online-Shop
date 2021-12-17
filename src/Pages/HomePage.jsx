import { products } from '../data';

const HomePage = () => {
   return (
      <main className="container">
         <section className="productList">
            {products.map((product) => {
               return (
                  <section className="product" key={product.name}>
                     <div className="productImg">
                        <img src={product.image} alt={product.name} />
                     </div>
                     <div className="productDesc">
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                     </div>
                  </section>
               );
            })}
         </section>
      </main>
   );
};

export default HomePage;
