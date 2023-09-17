
import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Products from './sections/Products';
import CopyrightFooter from './components/CopyrightFooter';
function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Footer />
      <CopyrightFooter />
    </div>
  );
}

export default App;
