import { NavLink } from 'react-router-dom';
import { useCart } from '../../Contexts/Cart/CartProvider';
import './Navigation.css';

const Navigation = () => {
   const { cart } = useCart();
   return (
      <header className="mainNavigation">
         <nav>
            <ul>
               <li>
                  <NavLink
                     to="/"
                     className={(navLink) => (navLink.isActive ? 'active' : '')}
                  >
                     Home
                  </NavLink>
               </li>
               <li className='cartLink'>
                  <NavLink
                     to="/cart"
                     className={(navLink) => (navLink.isActive ? 'active' : '')}
                  >
                     Cart
                  </NavLink>
                  <span>{cart.length}</span>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
