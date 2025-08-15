import React from 'react'
import style from './coursePaths.module.css'
import Navbar2 from '../../components/navbar2/Navbar2'
import Footer2 from '../../components/footer2/Footer2'
import Listing from '../../components/listings/Listing'

export default function Appreciation() {
  return (
    <div>
        <Navbar2/>
        <div className={style.course_container}>
          <div className={style.left}>
            <div className={style.details}>
              <div className={style.course_title}>                
                <div>Computer Appreciation</div>                
              </div>   
              <h4>What to Learn</h4>
              <div className={style.learn_obj}>
                <Listing list= 'HTML sndds ssdsds ssds ss'/> 
                <Listing list= 'CSS ssds sdssmss ssss'/> 
                <Listing list= 'HTML'/> 
                <Listing list= 'CSS'/> 
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.image}>
              <img src="./images/appreciation.jpg" alt="" />
            </div>
          </div>
        </div>    
        <Footer2/>
    </div>
  )
}
