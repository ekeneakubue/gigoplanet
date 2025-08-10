import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Products from './pages/products/Products'
import Courses from './pages/courses/Courses'
import Course from './components/course/Course'
import Appreciation from './pages/coursePaths/Appreciation'
import Office from './pages/coursePaths/Office'
import Hardware from './pages/coursePaths/Hardware'
import WebDev from './pages/coursePaths/WebDev'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/contacts' element = {<Contacts/>} />
        <Route path='/courses' element = {<Courses />} />
        <Route path='/course' element = {<Course />} />
        <Route path='/appreciation' element = {<Appreciation />} />
        <Route path='/office' element = {<Office />} />
        <Route path='/hardware' element = {<Hardware />} />
        <Route path='/webdev' element = {<WebDev />} />
        <Route path='/gigostore' component={() => {
            window.location.href = 'https://ekeneakt.org.ng';
            return null;
        }}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
