import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid ">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +91 9594387349
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : Sujeetvishwakarma9594@gmai.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location : Mumbai
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <span>
              PERFECT DIGITAL
              </span>
              </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" href="index.html" to='/'>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="service.html" to='/Service'>Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="about.html" to='/About'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="contact.html" to='/Contact'>Contact Us</Link>
                </li>
               
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header