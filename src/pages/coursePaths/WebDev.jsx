import React from 'react'
import style from './coursePaths.module.css'
import Navbar2 from '../../components/navbar2/Navbar2'
import Footer2 from '../../components/footer2/Footer2'
import Listing from '../../components/listings/Listing'

export default function WebDev() {
  return (
    <div>
      <Navbar2/>
        <div className={style.course_container}>
          <div className={style.left}>
            <div className={style.details}>
              <div className={style.course_title}>                
                <div>Web Development for Absolute Beginners</div>     
                <p>
                  Beginner-friendly web development training, covering HTML, CSS, and JavaScript fundamentals, empowering 
                  learners to build responsive, interactive websites with confidence and creativity.
                </p>           
              </div>   
              <h4>What to Learn</h4>
              <div className={style.learn_obj}>
                <Listing list= 'Introduction to Computer' /> 
                <Listing list= 'Installation of Basic Tools' /> 
                <Listing list= 'How the internet works' /> 
                <Listing list= "Use of IDE's (VSCode)" /> 
                <Listing list= 'Basic Git Commands' /> 
                <Listing list= 'HTL5/CSS3' /> 
                <Listing list= 'Tailwind CSS' /> 
                <Listing list= 'Introduction to JavaScript'/>                 
                <Listing list= 'Introduction to ReactJs' /> 
                <Listing list= 'Version Control System (GitHub)' /> 
                <Listing list= 'Vercel Hosting' /> 
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.image}>
              <img src="./images/web2.jpg" alt="" />
            </div>
          </div>
        </div>    
        <Footer2/>
    </div>
  )
}
