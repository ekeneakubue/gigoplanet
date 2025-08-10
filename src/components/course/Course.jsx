import React from 'react'
import style from './Course.module.css'
import Navbar2 from '../navbar2/Navbar2'

export default function Course(props) {
  return (
    <div>
        <Navbar2/>
        <div className={style.course_title}>{props.CourseTitle}</div>
    </div>
  )
}
