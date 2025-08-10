import {useState} from 'react'
import style from './Navbar.module.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <header>
            <Link to = '/'>
                <div className={style.brand}>
                    <img src="./images/logo2.png" alt="" />
                    <p>Gigo<span>planet</span> </p>
                </div>
            </Link>
            <HiMenuAlt3 className={style.menu_icon} onClick={toggleNavbar}/>
            <div className={`${style.navs} ${isOpen ? style.active : ''}`}>
                <Link to = '/' onClick={toggleNavbar}>
                    <div className={props.home_state ? style.active : style.notActive}>Home</div>
                </Link>
                <Link to = '/about' onClick={toggleNavbar}>
                    <div className={props.about_state? style.active : style.notActive}>About Us</div>
                </Link>
                <Link to = '/products' onClick={toggleNavbar}>
                    <div className={props.product_state ? style.active : style.notActive}>Products & Services</div>
                </Link>                
                <Link to = '/courses' onClick={toggleNavbar}>
                    <div className={props.school_state ? style.active : style.notActive}>Gigo School</div>
                </Link>
                <Link to = '/contacts' onClick={toggleNavbar}>
                    <div className={props.contact_state ? style.active : style.notActive}>Contact Us</div>
                </Link>
            </div>
        </header>
    </div>
  )
}
