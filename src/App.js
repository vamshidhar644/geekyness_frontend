import './App.css';
import Footer from './pages/footer/Footer';
import Navigation from './pages/navigation/Navigation';
import ProductPage from './pages/product_page/ProductPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
