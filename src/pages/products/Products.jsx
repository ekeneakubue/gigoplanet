import style from './Products.module.css'
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  BsBrightnessAltHighFill, 
  BsBoxes, BsTextIndentLeft, 
  BsRocket, BsHddNetworkFill, 
  BsStack, 
  BsFileEarmarkRichtext,
  BsXbox, 
  BsVirus,
  BsFillDoorOpenFill,
  BsDatabaseUp,
} from "react-icons/bs";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function Products() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar product_state = 'active'/>
      <div className={style.container} data-aos="fade-up" data-aos-duration="3000">
        <div className={style.services_header} >Our <span>Services</span></div>
        <div className={style.pro_txt}>How we can serve you</div >

        <div className={style.services_container}>           
          <div className={style.s_card}>
            <BsBrightnessAltHighFill className={style.icon}/>                     
            <div className={style.title}>
              <div>Advisory</div>
            </div>
            <hr/>
            <div className={style.body}>
              We Help deliver better-quality business performance
            </div>
          </div>
         
          <div className={style.s_card}>
            <BsBrightnessAltHighFill className={style.icon}/>                     
            <div className={style.title}>
              <div>Information Technology</div>
            </div>
            <hr/>
            <div className={style.body}>
              We Help deliver better-quality business performance
            </div>
          </div>

          <div className={style.s_card}>
            <BsBrightnessAltHighFill className={style.icon}/>                     
            <div className={style.title}>
              <div>Managed Services</div>
            </div>
            <hr/>
            <div className={style.body}>
              We Help deliver better-quality business performance
            </div>
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
            <div className={style.icon}><BsTextIndentLeft /></div>           
            <div className={style.title}>
              <div>Result Management Systems</div>
            </div>
            <div className={style.body}>
              We Help deliver beter-quality business performance
            </div>
          </div>

          <div className={style.p_card}>  
            <div className={style.icon}><BsRocket /></div>             
            <div className={style.title}>
              <div>Biometrics Capture</div>
            </div>
            <div className={style.body}>
              We Help deliver beter-quality business performance
            </div>
          </div>

          <div className={style.p_card}>  
            <div className={style.icon}><BsHddNetworkFill /></div>             
            <div className={style.title}>
              <div>Network Integration</div>
            </div>
            <div className={style.body}>
              We Help deliver beter-quality business performance
            </div>
          </div>

          <div className={style.p_card}> 
            <div className={style.icon}><BsStack /></div>              
            <div className={style.title}>
              <div>Quiz App</div>
            </div>
            <div className={style.body}>
              We Help deliver beter-quality business performance
            </div>
          </div>

          <div className={style.p_card}>
            <div className={style.icon}><BsFileEarmarkRichtext /></div>               
            <div className={style.title}>
              <div>Document Digitization</div>
            </div>
            <div className={style.body}>
              We Help deliver beter-quality business performance
            </div>            
          </div>

        </div>
      </div>

      <div className={style.oem}>
        <div className={style.container} data-aos="fade-up" data-aos-duration="3000">
          <div className={style.products_header} >Other <span>Products</span></div>
          <div className={style.pro_txt}>Partner Solutions we offer</div >
          <div className={style.oem_container}>          
              <div className={style.oem_card}> 
                <div className={style.icon}><BsXbox /></div>              
                <div className={style.title}>
                  <div>Software</div>
                </div>
                <div className={style.body}>
                  Blade system, Hyperscale servers, Rack and tower servers, 
                  Small and medium business servers, SPARC, x86, Blade, Netra
                </div>
              </div>

              <div className={style.oem_card}>  
                <div className={style.icon}><BsFillDoorOpenFill /></div>            
                <div className={style.title}>
                  <div>Applications</div>
                </div>
                <div className={style.body}>
                  Customer Experience Applications, Enterprise Performance Management, 
                  Applications Product Lines, Industry Applications
                </div>
              </div>

              <div className={style.oem_card}> 
                <div className={style.icon}><BsVirus /></div>             
                <div className={style.title}>
                  <div>Security Products</div>
                </div>
                <div className={style.body}>
                  Application Security, Data Security and Encryption, Network Security, 
                  Security Information and Event Management, Authentication solutions
                </div>
              </div>

              <div className={style.oem_card}> 
                <div className={style.icon}><BsDatabaseUp /></div>             
                <div className={style.title}>
                  <div>Storage</div>
                </div>
                <div className={style.body}>
                  Disk systems, Flash systems, Tape systems, Storage software, 
                  Storage area networks, Network attached storage, Storage for SMEs
                </div>
              </div>

          </div>
        </div>
      </div>
      <div className={style.footer}>
        <Footer/>
      </div>
    </div>
  )
}
