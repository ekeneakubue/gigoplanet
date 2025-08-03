import React, {useEffect} from 'react';
import style from './Home.module.css'
import { Link } from 'react-router-dom';

// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BsCaretRightFill } from "react-icons/bs";
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Home() {
  useEffect(() => {
      AOS.init();
  }, [])
  return (
    <div>
        <Navbar 
          home_state = 'active'
        />
        <main className={style.home_container}>
          <div className={style.home_left} data-aos="fade-right" data-aos-duration="3000">
            <div className={style.hero_title}>
              Transforming your business with our Technology Solutions
            </div>
            <div className={style.hero_text}>
              We are a Multi-Competency, Enterprise Transformation & Technology 
              Consulting Firm. We combine expertise and capabilities across many 
              industries and business functions to deliver superior value to our clients.
            </div>
            <Link to = './about'>
              <div className={style.hero_btn}>Read More <BsCaretRightFill /></div>
            </Link>
          </div>
          <div className={style.home_right} data-aos="fade-left" data-aos-duration="3000">
            <img src="./images/img1.png" alt="" />
          </div>
        </main>
        <Footer />
    </div>
  )
}
