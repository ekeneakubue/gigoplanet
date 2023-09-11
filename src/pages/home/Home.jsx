import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="home-left">
              <h1>Transforming your business with our Technology Solutions</h1>
              <p>We are a Multi-Competency, Enterprise Transformation & Technology Consulting Firm. We combine expertise and capabilities across many industries and business functions to deliver superior value to our clients.</p>
              <br/>
              <Link to = "/about"><div className="btn btn-danger">Read More <i class="bi bi-caret-right-fill"></i> </div></Link>
            </div>
          </div>
          <div className="col-md-7">
            <img src="images/img1.png" alt="img1"  className='img-fluid'/>
          </div>
        </div>
      </div>
    </div>
  )
}
