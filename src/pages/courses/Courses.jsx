import {useEffect} from 'react';
import style from './Courses.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Navbar2 from '../../components/navbar2/Navbar2';
import Footer2 from '../../components/footer2/Footer2';

export default function Courses() {
   useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div>
      <Navbar2 />
      <div className={style.oem}>
        <div className={style.container}>
          <div className={style.products_header} >Gigo <span>Courses</span></div>
          <div className={style.pro_txt}>Special Courses we offer</div >
          <div className={style.oem_container}>          
            <div className={style.oem_card}> 
              <img src="./images/web2.jpg" alt="" />             
              <div className={style.title}>
                <div>Web Development</div>
              </div>
              <div className={style.body}>
                Beginner-friendly web development training, covering HTML, CSS, 
                and JavaScript fundamentals, empowering learners to build responsive, 
                interactive websites with confidence and creativity.

                <Link to = '/webdev'>
                  <div className={style.oem_btn}>Course Details</div>
                </Link>
                
              </div>
            </div>

            <div className={style.oem_card}>  
              <img src="./images/sk3.webp" alt="" />
              <div className={style.title}>
                <div>Hardware Repairs</div>
              </div>
              <div className={style.body}>
                Comprehensive training in hardware repairs, accesories replacement and maintenance, teaching diagnostic 
                skills, troubleshooting, and preventive care to ensure optimal computer performance 
                and longevity.

                <Link to = '/hardware'>
                  <div className={style.oem_btn}>Course Details</div>
                </Link>
              </div>
            </div>

            <div className={style.oem_card}> 
              <img src="./images/office.jpeg" alt="" /> 
              <div className={style.title}>
                <div>Microsoft Office</div>
              </div>
              <div className={style.body}>
                Application Security, Data Security and Encryption, Network Security, 
                Security Information and Event Management, Authentication solutions

                <Link to = '/office'>
                  <div className={style.oem_btn}>Course Details</div>
                </Link>
              </div>
            </div>

            <div className={style.oem_card}> 
              <img src="./images/appreciation.jpg" alt="" /> 
              <div className={style.title}>
                <div>Computer Appreciation</div>
              </div>
              <div className={style.body}>
                Disk systems, Flash systems, Tape systems, Storage software, 
                Storage area networks, Network attached storage, Storage for SMEs

                <Link to = '/appreciation'>
                  <div className={style.oem_btn}>Course Details</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Footer2 />                                                                                                                                           
    </div>
  )
}
