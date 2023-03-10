import './app.css';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import LatestProducts from './components/LatestProducts';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
