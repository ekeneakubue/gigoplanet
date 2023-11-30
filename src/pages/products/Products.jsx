import './products.css'
import React, {useEffect} from 'react';
// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Products() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="container" data-aos="fade-up" data-aos-duration="3000">
        <div className="services-header" >Our <span>Services</span></div>
        <div className='pro-txt'>How we can serve you</div >
        <div className="row">          
          <div className="col-md-4">
            <div className="s-card">              
              <div className="title">
                <i class="bi bi-brightness-alt-low-fill"></i>               
                <div>Advisory</div><hr />
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>              
            </div>
          </div>

          <div className="col-md-4">
            <div className="s-card">              
              <div className="title">
                <i class="bi bi-brightness-alt-low-fill"></i>               
                <div>Information Technology</div><hr />
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="s-card">              
              <div className="title">
                <i class="bi bi-brightness-alt-low-fill"></i>               
                <div>Managed Services</div><hr />
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-duration="3000">
        <div className="products-header" >Our <span>Products</span></div>
        <div className='pro-txt'>Solutions Developed by GigoPlanet</div >
        <div className="row">          
          <div className="col-md-6">
            <div className="p-card">              
              <div className="title">
                <i class="bi bi-boxes text-danger"></i>
                <div>School Management System</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-card">              
              <div className="title">
                <i class="bi bi-text-indent-left text-danger"></i>             
                <div>Result Management Systems</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-card">              
              <div className="title">
                <i class="bi bi-rocket text-danger"></i>              
                <div>Biometrics Capture</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-card">              
              <div className="title">
                <i class="bi bi-hdd-network-fill text-danger"></i>               
                <div>Network Integration</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-card">              
              <div className="title">
                <i class="bi bi-award-fill text-danger"></i>              
                <div>Quiz App</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-card">              
              <div className="title">
                <i class="bi bi-file-earmark-richtext text-danger"></i>              
                <div>Document Digitization</div>
              </div>
              <div className="body">
                We Help deliver beter-quality business performance
              </div>            
            </div>
          </div>

        </div>
      </div>

      <div className="oem">
        <div className="container" data-aos="fade-up" data-aos-duration="3000">
          <div className="products-header" >Other <span>Products</span></div>
          <div className='pro-txt'>Partner Solutions we offer</div >
          <div className="row">          
            <div className="col-md-6">
              <div className="oem-card">              
                <div className="title">
                  <i class="bi bi-xbox text-danger"></i>
                  <div>Software</div>
                </div>
                <div className="body">
                  Blade system, Hyperscale servers, Rack and tower servers, 
                  Small and medium business servers, SPARC, x86, Blade, Netra
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="oem-card">              
                <div className="title">
                  <i class="bi bi-door-open-fill text-danger"></i>
                  <div>Applications</div>
                </div>
                <div className="body">
                  Customer Experience Applications, Enterprise Performance Management, 
                  Applications Product Lines, Industry Applications
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="oem-card">              
                <div className="title">
                  <i class="bi bi-virus text-danger"></i>
                  <div>Security Products</div>
                </div>
                <div className="body">
                  Application Security, Data Security and Encryption, Network Security, 
                  Security Information and Event Management, Authentication solutions
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="oem-card">              
                <div className="title">
                  <i class="bi bi-database-fill-up text-danger"></i>
                  <div>Storage</div>
                </div>
                <div className="body">
                  Disk systems, Flash systems, Tape systems, Storage software, 
                  Storage area networks, Network attached storage, Storage for SMEs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
