import './app.css';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import LatestProducts from './components/LatestProducts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
    </div>
  );
}

export default App;
