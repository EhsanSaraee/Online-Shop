import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Layout from './Layout/Layout';
import CartPage from './Pages/CartPage/CartPage';
import HomePage from './Pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
   return (
      <>
         <Layout>
            <ToastContainer />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cart" element={<CartPage />} />
            </Routes>
         </Layout>
      </>
   );
};

export default App;
