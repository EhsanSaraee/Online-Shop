import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Contexts/Cart/CartProvider';

const rootElement = document.getElementById('root');

ReactDOM.render(
   <BrowserRouter>
      <CartProvider>
         <App />
      </CartProvider>
   </BrowserRouter>,
   rootElement
);
