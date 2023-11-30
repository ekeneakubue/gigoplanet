import './about.css'
import React, {useEffect} from 'react';
// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="about-banner" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
              <img src="images/about-banner.jpg" alt="banner" />
            </div>
          </div>
        </div>  
    </div>
  )
}
