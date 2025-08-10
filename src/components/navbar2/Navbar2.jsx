import {useState} from 'react'
import style from './Navbar2.module.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { GiGraduateCap } from "react-icons/gi";
import { Link } from 'react-router-dom'

export default function Navbar2(props) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <div className={style.navbar2_header}>
            <Link to = '/courses'>
                <div className={style.brand}>
                    <span><GiGraduateCap /></span>
                    <p>Gigo<span>School</span> </p>
                </div>
            </Link>
            <HiMenuAlt3 className={style.menu_icon} onClick={toggleNavbar}/>
            <div className={`${style.navs} ${isOpen ? style.active : ''}`}>
                <Link to = '/' onClick={toggleNavbar}>
                    <div className={props.home_state ? style.active : style.notActive}>Home</div>
                </Link>
                <Link to = '/courses' onClick={toggleNavbar}>
                    <div className={props.home_state ? style.active : style.notActive}>All Courses</div>
                </Link>
                <Link to = '/courses' onClick={toggleNavbar}>
                    <div className={props.about_state? style.active : style.notActive}>About </div>
                </Link>
                <Link to = '/courses' onClick={toggleNavbar}>
                    <div className={props.product_state ? style.active : style.notActive}>Gallery</div>
                </Link>                
            </div>
        </div>
    </div>
  )
}
