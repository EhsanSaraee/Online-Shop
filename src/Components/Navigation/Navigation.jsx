import { NavLink } from 'react-router-dom';
import { useCart } from '../../Contexts/Cart/CartProvider';
import './Navigation.css';

const Navigation = () => {
   const { cart } = useCart();
   return (
      <header className="mainNavigation">
         <nav>
            <ul>
               <h1>Online Shopping</h1>
               <li>
                  <NavLink
                     to="/"
                     className={(navLink) => (navLink.isActive ? 'active' : '')}
                  >
                     Home
                  </NavLink>
               </li>
            </ul>
            <ul>
               <li className="cartLink">
                  <NavLink
                     to="/cart"
                     className={(navLink) => (navLink.isActive ? 'active' : '')}
                  >
                     Cart
                  </NavLink>
                  <span>{cart.length}</span>
               </li>
               <li className="cartLink">
                  <NavLink
                     to="/login"
                     className={(navLink) => (navLink.isActive ? 'active' : '')}
                  >
                     Login / Sign Up
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
