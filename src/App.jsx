import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Layout from './Layout/Layout';
import CartPage from './Pages/CartPage/CartPage';
import HomePage from './Pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Pages/Checkout/Checkout';

const App = () => {
   return (
      <>
         <Layout>
            <ToastContainer />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cart" element={<CartPage />} />
               <Route path="/checkout" element={<Checkout />} />
            </Routes>
         </Layout>
      </>
   );
};

export default App;
