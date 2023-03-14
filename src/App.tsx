import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from 'react-router-dom';
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
import Admin from './components/Admin';
import Signup from './components/Account/Signup';
import Account from './components/Account/Account';
import SecureComp from './components/SecureComp';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutsWithNavbar />}>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route path='/contact' element={<Contact />} />
            <Route path='/ordercomplete' element={<OrderComplete />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:slug' element={<ProductCard />} />
            <Route path='/cart' element={<Cart />} />
            <Route
              path='/account'
              element={
                <SecureComp>
                  <Account />
                </SecureComp>
              }
            />
            {/* <Route
              path='/checkout'
              element={
                <RouteGuard>
                  <Checkout />
                </RouteGuard>
              }
            /> */}
          </Route>
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
      {/* Your navbar component */}
      <Navbar />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <Outlet />

      {/* You can add a footer to get fancy in here :) */}
      <Footer />
    </>
  );
}

export default App;
