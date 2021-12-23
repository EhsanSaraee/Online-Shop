import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Contexts/Auth/AuthProvider';
import { useCart } from '../../Contexts/Cart/CartProvider';
import './Navigation.css';

const Navigation = () => {
   const { cart } = useCart();
   const userData = useAuth();

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
                     to={userData ? '/profile' : '/login'}
                     className={(navLink) => (navLink.isActive ? 'active' : '')}
                  >
                     {userData ? 'Profile' : 'Login / Sign Up'}
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
