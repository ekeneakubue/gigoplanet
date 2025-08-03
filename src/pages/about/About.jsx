import {useEffect} from 'react'

// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from './About.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <Navbar about_state = 'active'/>
        <main className={style.about_container} data-aos="fade-up" data-aos-duration="3000">
            <img src="./images/img2.png" alt="" />
            <div className={style.about}>
              <div className={style.title}>About Us</div>
              <p>
                We are a Multi-Competency, Enterprise Transformation & Technology Consulting Firm. 
                We combine expertise and capabilities across many industries and business functions 
                to deliver superior value to our clients.
              </p>
              <br />
              <p>
                Gigoplanet has deep understanding of the industries it works in, strong technical competencies 
                and an outstanding track record both in the private and public sector. With its tested 
                methodologies and best practices.
              </p>
              <br />
              <div className={style.vision_mission}>
                <div className={style.vision}>
                  <div className={style.title}>Our Vision</div>
                  <p>                    
                    To be a global leader in IT services, empowering businesses through technology, 
                    excellence, and sustainable digital transformation across industries.
                  </p>
                </div>
                <div className={style.mission}>
                  <div className={style.title}>Our Mission</div>
                  <p>
                    Our mission is to provide reliable, innovative IT solutions that empower businesses to 
                    thrive. We prioritize customer satisfaction, technology excellence, and long-term 
                    partnerships to drive digital transformation and success.
                  </p>
                </div>
              </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}
