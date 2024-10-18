import React from 'react'

const Service = () => {
  return (
    <>
    
  {/* service section */}

  <section className="service_section layout_padding">
    <div className="service_container">
      <div className="container ">
        <div className="heading_container">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
          Social Media Domination: The Secret to Perfect Digital to Engage Audiences on All Platforms
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="Temp/images/wordpress.png" alt=""></img>
              </div>
              <div className="detail-box">
                <h5>
                  WordPress
                </h5>
                <p>
                WordPress: Powerful, user-friendly platform for building websites and managing content.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="Temp/images/php.png" alt=""></img>
              </div>
              <div className="detail-box">
                <h5>
                  Php
                </h5>
                <p>
                PHP Server-side scripting language for dynamic web development and applications.


                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="Temp/images/react.png" alt=""></img>
              </div>
              <div className="detail-box">
                <h5>
                  react
                </h5>
                <p>
                React: JavaScript library for building efficient, interactive user interfaces.


                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="Temp/images/wix.png" alt=""></img>
              </div>
              <div className="detail-box">
                <h5>
                  wix
                </h5>
                <p>
                Wix: User-friendly website builder with drag-and-drop interface and templates.


                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* end service section */}

    </>
  )
}

export default Service