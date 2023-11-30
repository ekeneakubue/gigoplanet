import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './home.css';
// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='home'>
      <div className="container">
        <div className="row myrow">
          <div className="col-md-5">
            <div className="home-left" data-aos="fade-right" data-aos-duration="3000">
              <h1>Transforming your business with our Technology Solutions</h1>
              <p>We are a Multi-Competency, Enterprise Transformation & Technology Consulting Firm. We combine expertise and capabilities across many industries and business functions to deliver superior value to our clients.</p>
              
              <Link to = "/about"><div className="btn btn-danger">Read more <i class="bi bi-caret-right-fill"></i> </div></Link>
              <br/><br/>
            </div>
          </div>
          <div className="col-md-7">
            <div className="home-right" data-aos="fade-left" data-aos-duration="3000">
              <img src="images/img1.png" alt="img1"  className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="sec1">
          <p>
            GigoPlanet is a Technology Consulting Services company in Africa. 
            We focus on custumers satisfaction and provide best solutions for your business. 
          </p>
          <div>Ekene Akubue, CEO Gigoplanet Group</div>
        </div>
      </section>
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="top-header" >Our Services</div>
        <div className="row">          
          <div className="col-md-4">
            <div className="s-card">              
              <div className="title">
                <i class="bi bi-brightness-alt-low-fill"></i>               
                <div>Advisory</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
              <hr/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="s-card">              
              <div className="title">
                <i class="bi bi-brightness-alt-low-fill"></i>               
                <div>Information Technology</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
              <hr/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="s-card">              
              <div className="title">
                <i class="bi bi-brightness-alt-low-fill"></i>               
                <div>Managed Services</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
              <hr/>
            </div>
          </div>
        </div>
        <div className="s-btn"><Link to = '/products'><button>Read more <i class="bi bi-caret-right-fill"></i></button></Link></div>
      </div>

      <section className="s-partners">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="top-header">Our Products & Services</div>
          <div className="row">            

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><img src='images/test-img.jpg' alt='test' /></div>
                <div className="title">Quiz-App</div>  
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><img src='images/campus-img.jpg' alt='test' /></div>
                <div className="title">Campus-Links</div>  
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><img src='images/school-img.jpg' alt='test' /></div>
                <div className="title">School Portal</div>  
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><img src='images/result-img.jpg' alt='test' /></div>
                <div className="title">Result-App</div>  
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><i class="bi bi-clouds text-danger"></i></div>
                <div className="title">Web Design</div>  
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><i class="bi bi-cloud-upload text-danger"></i></div>
                <div className="title">Cloud Computing</div>  
              </div>
            </div>          

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><i class="bi bi-bezier text-danger"></i></div>
                <div className="title">Link-to-Market</div>  
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-card">
                <div className="logo"><i class="bi bi-code-slash text-danger"></i></div>
                <div className="title">Tech-Skill-Up</div>  
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-left" data-aos-duration="500">
        <div className="top-header">Our Partners</div>
        <div className="row">                  
          <div className="col-md-4"> 
            <div className="partner-card">
              <img src="images/decode-logo.png" alt="hwl" /> Decode Investing  
            </div>           
          </div>
          <div className="col-md-4">
            <div className="partner-card">
              <img src="images/kinmat-logo.png" alt="hwl" /> Kinmatech  
            </div> 
          </div>
          <div className="col-md-4">
            <div className="partner-card">
              <img src="images/hwl-logo.png" alt="hwl" /> Highdrostom  
            </div> 
          </div>          
        </div>
      </div>

      <div className="container" data-aos="flip-right" data-aos-duration="500">
        <div className="top-header">Our Clients</div>
          <div className="row">
            <div className="col-md-3"> 
              <div className="partner-card">
                <img src="images/unn-logo.jpg" alt="unn" /> University of Nigeria  
              </div>           
            </div>

            <div className="col-md-3"> 
              <div className="partner-card">
                <img src="images/decode-logo.png" alt="hwl" /> PSRRG  
              </div>           
            </div>

            <div className="col-md-3"> 
              <div className="partner-card">
                <img src="images/agro-logo.jpg" alt="hwl" /> OgAgro  
              </div>           
            </div>

            <div className="col-md-3"> 
              <div className="partner-card">
                <img src="images/decode-logo.png" alt="hwl" /> Code City  
              </div>           
            </div>
          </div>
      </div>
    </div>
  )
}
