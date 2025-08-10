import style from './Products.module.css'
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  BsBoxes,  
  BsRocket, 
  BsStack, 
  BsFileEarmarkRichtext,
  BsXbox, 
  BsVirus,
  BsFillDoorOpenFill,
  BsDatabaseUp,
  BsCart4,
  BsMortarboardFill,
  BsFillPlayFill
} from "react-icons/bs";
import { GiVote } from "react-icons/gi";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import OurProducts from '../../components/ourProducts/OurProducts';

export default function Products() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar product_state = 'active'/>
      <div className={style.products_hero}>
        <div className={style.title}>
          We empower Businesses, Individual, and Offices through technology, excellence, and sustainable digital transformation across industries.
        </div>
      </div>
      <OurProducts/>
      <div className={style.footer}>
        <Footer/>
      </div>
    </div>
  )
}
