import './app.css';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Banner />
      <FeaturedProducts />
    </div>
  );
}

export default App;
