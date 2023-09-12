import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Contacts from './pages/contacts/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />    
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/contacts' element={<Contacts />} />    
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
