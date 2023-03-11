import './app.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Account/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
