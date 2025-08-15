import React from 'react'
import style from './coursePaths.module.css'
import Navbar2 from '../../components/navbar2/Navbar2'
import Footer2 from '../../components/footer2/Footer2'
import Listing from '../../components/listings/Listing'

export default function Office() {
  return (
    <div>
      <Navbar2/>
      <div className={style.course_container}>
        <div className={style.left}>
          <div className={style.details}>
            <div className={style.course_title}>                
              <div>Microsoft Office Tools</div>                
            </div>   
            <h4>What to Learn</h4>
            <div className={style.learn_obj}>
              <Listing list= 'Installation of MS Office'/> 
              <Listing list= 'MS Word 2016 or Higher'/> 
              <Listing list= 'MS Excel 2016 or Higher'/> 
              <Listing list= 'MS PowerPoint 2016 or Higher'/> 
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.image}>
            <img src="./images/office.jpeg" alt="" />
          </div>
        </div>
      </div>    
      <Footer2/>
    </div>
  )
}
