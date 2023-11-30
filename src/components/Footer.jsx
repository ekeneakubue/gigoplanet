import './footer.css';

export default function Footer() {
  return (
    <div className='container-fluid bg-dark'>
        <div className="footer">
            <div className="container">
                <div className="row text-light">
                    <div className="col-md-4">
                        <div className="f-col">
                            <img src="images/logo2.png" alt="footer-logo" />
                            <p>Subscribe to our Newsletter</p>
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>     
                            <div className='btn btn-outline-light'>Submit</div>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="f-col">
                            <p className='text-light'>Company</p>
                            <p>Goals & Vision</p>
                            <p>Products & Services</p>
                            <p>Bootcamps</p>
                            <p>Partners & Clients</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="f-col">
                            <p className='text-light'>Community</p>
                            <p>News</p>
                            <p>Blog</p>
                            <p>Tech Hangout</p>                        
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="f-col">
                            <p className='text-light'>Contacts</p>
                            <div className='foot-aside'>
                                <i class="bi bi-geo-alt text-danger"></i>
                                <p>University of Nigeria, Nsukka. Enugu State, Nigeria.</p>
                            </div>
                            <div className='foot-aside'>
                                <i class="bi bi-telephone text-danger"></i>
                                <p>+234 8032744865</p>
                            </div>
                            <div className='foot-aside'>
                                <i class="bi bi-envelope text-danger"></i>
                                <p>ekeneakubue@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="col-md-12"><hr className='bg-secondary'/>
                        <div className='copy'>Copyright 2023 &copy; Gigoplanet Services Ltd. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
