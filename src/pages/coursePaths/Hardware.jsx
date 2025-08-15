import React from 'react'
import style from './coursePaths.module.css'
import Navbar2 from '../../components/navbar2/Navbar2'
import Footer2 from '../../components/footer2/Footer2'
import Listing from '../../components/listings/Listing'

export default function Hardware() {
  return (
    <div>
      <Navbar2/>
      <div className={style.course_container}>
        <div className={style.left}>
          <div className={style.details}>
            <div className={style.course_title}>                
              <div>Hardware Repairs and Maintenance</div>     
              <p>Comprehensive training in hardware repairs, accesories replacement and maintenance, teaching diagnostic skills, troubleshooting, and preventive care to ensure optimal computer performance and longevity.</p>           
            </div>   
            <h4>What to Learn</h4>
            <div className={style.learn_obj}>
              <Listing list= 'Understanding Systems Settings'/> 
              <Listing list= 'Understanding Operating Systems'/> 
              <Listing list= 'Making Bootable Devices'/> 
              <Listing list= 'How to Format Laptops and Desktops'/> 
              <Listing list= 'Systems Recovery'/> 
              <Listing list= 'How to Replace Laptop Screens'/> 
              <Listing list= 'How to Replace HDD/SSD/RAM'/> 
               <Listing list= 'Fix or Replace Motherboards'/> 
              <Listing list= 'How to Do General laptop Bodywork'/> 
               <Listing list= 'Other Repairs...'/> 
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.image}>
            <img src="./images/sk3.webp" alt="" />
          </div>
        </div>
      </div>    
      <Footer2/>      
    </div>
  )
}
