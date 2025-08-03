import style from './Contacts.module.css'
import React, {useEffect} from 'react';

// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import { GrLocation } from "react-icons/gr";
import { FaRegEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";


export default function Contacts() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={style.contact_container}>
      <Navbar contact_state = 'active'/>
      <div className={style.contact_hero} data-aos="fade-up" data-aos-duration="3000">
        <img src="./images/contact-banner.jpg" alt="" />  
      </div> 
      <div className={style.contact}>                 
        <div className={style.contact_left} data-aos="fade-up" data-aos-duration="3000">
          <form>
            <div class={style.form_group}>
              <label for="exampleInputName">Name<span>*</span></label><br />
              <input type="text" className={style.form_control} id="exampleInputName" required/>
            </div>  <br />
            <div class={style.form_group}>
              <label for="exampleInputName">Email address<span>*</span></label><br />
              <input type="email" className={style.form_control} id="exampleInputName" required />
            </div><br />
            <div class={style.form_group}>
              <label for="exampleInputName">Write your message<span>*</span></label><br />
              <textarea className={style.form_control} id="exampleInputName" required />
            </div>                           
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={style.contact_right} data-aos="fade-up" data-aos-duration="3000">
          <div className={style.title}>Our Contacts</div>
          <div className={style.c_aside}>
            <span><GrLocation /></span>
            <p>University of Nigeria, Nsukka. Enugu State, Nigeria.</p>
          </div><hr />

          <div className={style.c_aside}>
            <span><FaRegEnvelope /></span>
            <p>ekeneakubue@gmail.com</p>
          </div><hr />

          <div className={style.c_aside}>
            <span><FiPhoneCall /></span>
            <p>+234 8032744865</p>
          </div><hr />  

          <div className={style.c_aside}>
            <div className={style.s_aside}>               
              <a href="https://wa.me/+2348067359106" target="_blank" rel="noopener npreferrer">
                <span className={style.whatsapp}>
                  <FaWhatsapp />
                </span>
              </a>                 
                       
              <span className={style.in}><FaLinkedinIn /></span>
              <span className={style.instagram}><SiInstagram /></span>
              <span className={style.fb}><FaFacebook /></span>
            </div>            
          </div>          
        </div>
      </div>
      <Footer/>
    </div>
  )
}
