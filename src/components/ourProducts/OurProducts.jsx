import style from './OurProducts.module.css'
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
import { Link } from 'react-router-dom';

export default function OurProducts() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className={style.container} data-aos="fade-up" data-aos-duration="3000">        
                <div className={style.services_header} >Our <span>Services</span></div>
                <div className={style.pro_txt}>How we can serve you</div >

                <div className={style.services_container}>         
                    <div className={style.s_card}>
                        <BsStack className={style.icon}/>
                        <div className={style.title}>
                            <div>Software Development</div>
                        </div>
                        <hr/>
                        <div className={style.body}>
                            We are a Multi-Competency, Enterprise Transformation & Technology 
                            Consulting Firm. We combine expertise and capabilities across many 
                            industries and business functions to deliver superior value to our clients.
                        </div>
                        <Link to = '/about'>
                            <div className={style.card_btn}><p>Read More</p><BsFillPlayFill /></div>
                        </Link>
                    </div>

                    <div className={style.s_card}>
                        <BsCart4 className={style.icon}/>
                        <div className={style.title}>
                            <div>Gigo Store</div>
                        </div>
                        <hr/>
                        <div className={style.body}>
                            Empowering your business to innovate, grow, and thrive. We maximize profitability, 
                            scale your operations, and ensure peak application performance through smart, 
                            strategic IT resource management.
                        </div>
                        <a href='https://store.gigoplanet.com' target='_blank'>
                            <div className={style.card_btn}><p>Read More</p><BsFillPlayFill /></div>
                        </a>
                    </div>

                    <div className={style.s_card}>
                        <BsMortarboardFill className={style.icon}/>
                        <div className={style.title}>
                            <div>Gigo School</div>
                        </div>
                        <hr/>
                        <div className={style.body}>
                            We provide hands-on training in web design, computer appreciation, and 
                            repairs, equipping learners with essential digital skills, creativity, 
                            and technical expertise to thrive in today’s fast-paced technology-driven 
                            world.
                        </div>
                        <Link to ='/courses'>
                            <div className={style.card_btn}><p>Read More</p><BsFillPlayFill /></div>
                        </Link>
                    </div>         
                </div>
            </div>

            <div className={style.container} data-aos="fade-up" data-aos-duration="3000">
                <div className={style.products_header} >Our <span>Products</span></div>
                <div className={style.pro_txt}>Solutions Developed by GigoPlanet</div >
                <div className={style.products_container}>          
                    <div className={style.p_card}> 
                        <div className={style.icon}><BsBoxes /></div>             
                        <div className={style.title}>
                            <div>School Management System</div>
                        </div>
                        <div className={style.body}>
                            We Help deliver beter-quality business performance
                        </div>
                    </div>

                    <div className={style.p_card}>   
                        <div className={style.icon}><GiVote /></div>           
                        <div className={style.title}>
                            <div>Voting Application</div>
                        </div>
                        <div className={style.body}>
                            We Help deliver beter-quality business performance
                        </div>
                    </div>

                    <div className={style.p_card}>
                        <div className={style.icon}><BsFileEarmarkRichtext /></div>               
                        <div className={style.title}>
                            <div>Document Digitalization</div>
                        </div>
                        <div className={style.body}>
                            We Help deliver beter-quality business performance
                        </div>            
                    </div>

                    <div className={style.p_card}>  
                        <div className={style.icon}><BsRocket /></div>             
                        <div className={style.title}>
                            <div>Biometrics Software</div>
                        </div>
                        <div className={style.body}>
                            We Help deliver beter-quality business performance
                        </div>
                    </div>                

                </div>
            </div>

            <div className={style.oem}>
                <div className={style.container} data-aos="fade-up" data-aos-duration="3000">
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
        </div>
    )
}
