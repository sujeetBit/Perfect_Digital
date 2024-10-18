import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     {/* info section */}

  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Mumbai Goregaon
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +91 9594387349
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  Sujeetvishwakarma9594@gmaol.com
                </span>
              </a>
            </div>
          </div>
      
        </div>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_detail">
            <h4>
              Info
            </h4>
            <p>
            Shaping your brand's future: Perfect Digital's innovative approach to digital transformation
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto info_col">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <Link className="active" to="/">
                
                Home
                </Link>
              <Link className="" to="/about">
               
                About
                </Link>
              <Link className="" to="/service">
                
                Services
                </Link>
              <Link className="" to="/contact">
                
                Contact Us
                </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* end info section */}

  {/* footer section */}
  <section className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/"> Perfect Digital</a>
      </p>
    </div>
  </section>
    </>
  )
}

export default Footer