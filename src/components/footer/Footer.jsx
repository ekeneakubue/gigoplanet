import React from 'react'
import style from './Footer.module.css'
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className={style.footer}>
        <div className={style.footer_container}>
          <div className={style.foot_col}>
            <div className={style.foot_brand}>
              <img src="./images/logo2.png" alt="" />
              <div>Gigo<span>planet</span></div>              
            </div>
            <form action="">
              <p>Subscribe to our Newsletter</p>
              <p>Email</p>
              <input type="text" className={style.text_input}/>
              <div className={style.sub_btn}>Submit</div>
            </form>
          </div>
          <div className={style.foot_col}>
            <div className={style.title}>Company</div>
            <Link to = '/about'><p>About us</p></Link>
            <Link to = '/products'><p>Products & Services</p></Link>
            <Link to = '/courses'><p>GigoSchool</p></Link>
            <a href = 'https://store.gigoplanet.com' target='_blank'><p>GigoStore</p></a>            
          </div>
          <div className={style.foot_col}>
            <div className={style.title}>Community</div>
            <Link to = '#'><p>Blog</p></Link>
            <Link to = '#'><p>Webmail</p></Link>
            <Link to = '#'><p>Bootcamps</p></Link>
            <Link to = '#'><p>Partners & Clients</p></Link>
          </div>
          <div className={style.foot_col}>
            <div className={style.title}>Contacts</div>
            <p><span><GrLocation /></span> No 1 Emma Ezea Complex, Onuiyi Nsukka. Enugu State, Nigeria.</p>
            <p><span><FiPhoneCall /></span> +234 8032744865</p>
            <p><span><HiOutlineMail /></span> info@gigoplanet.com</p>
          </div>
          
        </div>
        <hr className={style.myhr} />
        <div className={style.footer2}>Copyright &copy; 2025 Gigoplanet Services Ltd. All rights reserved.</div>
      </div>
    </div>
  )
}
