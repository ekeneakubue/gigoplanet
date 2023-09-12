import './contacts.css'
import React from 'react'

export default function Contacts() {
  return (
    <div className='main'>
      <div className="container">
        <div className="row">
          <div className="banner">
            <img src="images/contact-banner.jpg" alt="banner" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="c-left">
              <form>
                <div class="form-group">
                  <label for="exampleInputName">Name<span className='text-danger steris'>*</span></label>
                  <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Email address<span className='text-danger steris'>*</span></label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Example textarea<span className='text-danger steris'>*</span></label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                             
                <button type="submit" class="btn btn-outline-secondary s-btn">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-3">
            <div className="c-right">
              <h5>Our Contacts</h5>
              <div className='c-aside'>
                <i class="bi bi-geo-alt text-danger"></i>
                <p>University of Nigeria, Nsukka. Enugu State, Nigeria.</p>
              </div><hr />

              <div className='c-aside'>
                <i class="bi bi-envelope text-danger"></i>
                <p>ekeneakubue@gmail.com</p>
              </div><hr />

              <div className='c-aside'>
                <i class="bi bi-telephone text-danger"></i>
                <p>+234 8032744865</p>
              </div><hr />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
