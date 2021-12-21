import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Layout from './Layout/Layout';
import CartPage from './Pages/CartPage/CartPage';
import HomePage from './Pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';

const App = () => {
   return (
      <>
         <Layout>
            <ToastContainer />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cart" element={<CartPage />} />
               <Route path="/checkout" element={<CheckoutPage />} />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
         </Layout>
      </>
   );
};

export default App;
