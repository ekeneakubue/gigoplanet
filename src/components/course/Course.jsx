import React from 'react'
import style from './Course.module.css'
import Navbar2 from '../navbar2/Navbar2'
import Footer2 from '../footer2/Footer2'
import Listing from '../listings/Listing'

export default function Course(props) {
  return (
    <div>
        <Navbar2/>
        <div className={style.course_container}>
          <div className={style.left}>
            <div className={style.details}>
              <div className={style.course_title}>                
                <div>{props.CourseTitle}</div>                
              </div>   
              <h4>What to Learn</h4>
              <div className={style.learn_obj}>
                <Listing/> 
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.image}>
              <img src={props.image_url} alt="" />
            </div>
          </div>
        </div>    
        <Footer2/>    
    </div>
  )
}



{/* 
               
          
          <div className={style.price}>{props.price}</div> */}