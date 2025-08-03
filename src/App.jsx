import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
// import Products from './pages/products/Products'
import Contacts from './pages/contacts/Contacts'
import Products from './pages/products/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/contacts' element = {<Contacts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
