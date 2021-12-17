import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';

const App = () => {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </div>
   );
};

export default App;
