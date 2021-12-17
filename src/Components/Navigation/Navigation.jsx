import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
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
               <li>
                  <NavLink
                     to="/cart"
                     className={(navLink) => (navLink.isActive ? 'active' : '')}
                  >
                     Cart
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
