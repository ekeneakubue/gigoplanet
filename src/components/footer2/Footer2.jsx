import style from './footer2.module.css'
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram, SiGitconnected } from "react-icons/si";

export default function Footer2() {
  return (
    <div>
        <div className={style.footer2_container}>
            <div className={style.footer2_title}>
                Get<span>Intouch!</span>
            </div>
            <div className={style.social_links}>                              
                <a href="https://wa.me/+2348067359106" target="_blank" rel="noopener npreferrer">
                    <span className={style.whatsapp}>
                        <FaWhatsapp />
                    </span>
                </a>                             
                <span className={style.in}><FaLinkedinIn /></span>
                <span className={style.instagram}><SiInstagram /></span>
                <span className={style.fb}><FaFacebook /></span>                
            </div><br /><br />
            <hr className={style.footer2_hr}/>
            <div className={style.copyright}>
                <p>© 2025 GigoSchool Project. All rights reserved.</p>
                <div>Powered by &nbsp;&nbsp;&nbsp;<span><img src="./images/logo2.png" alt="" /></span> Gigoplanet Services Ltd.</div>
            </div>
        </div>
    </div>
  )
}
