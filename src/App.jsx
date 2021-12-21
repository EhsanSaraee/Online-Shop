import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Layout from './Layout/Layout';
import CartPage from './Pages/CartPage/CartPage';
import HomePage from './Pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

const App = () => {
   return (
      <>
         <Layout>
            <ToastContainer />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cart" element={<CartPage />} />
               <Route path="/checkout" element={<Checkout />} />
               <Route path="/login" element={<Login />} />
               <Route path="/sign-up" element={<SignUp />} />
            </Routes>
         </Layout>
      </>
   );
};

export default App;
