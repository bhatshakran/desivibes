import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Account/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import OrderComplete from './components/Order/OrderComplete';
import Shop from './components/Shop';
import ProductCard from './components/Shop/Product/ProductCard';
import Cart from './components/Cart';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ordercomplete' element={<OrderComplete />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:slug' element={<ProductCard />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
