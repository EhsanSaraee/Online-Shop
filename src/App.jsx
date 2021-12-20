import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import CartPage from './Pages/CartPage/CartPage';
import HomePage from './Pages/HomePage';

const App = () => {
   return (
      <div className="App">
         <Layout>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cart" element={<CartPage />} />
            </Routes>
         </Layout>
      </div>
   );
};

export default App;
