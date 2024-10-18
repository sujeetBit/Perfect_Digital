import React from 'react'
import Client from './Client'

const About = () => {
  return (
    <>
     {/* about section */}

  <section className="about_section layout_padding-bottom">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About <span>Us</span>
              </h2>
            </div>
            <p>
            Perfect Digital is your trusted partner in navigating the digital landscape. We specialize in comprehensive digital solutions, from web design and development to SEO and social media marketing. Our expert team is committed to providing innovative strategies that drive growth, enhance online presence and maximize ROI. With Perfect Digital, the digital success of your business is our priority.
            </p>
        
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="img-box">
            <img src="Temp/images/about-img.avif" alt=""></img>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* end about section */}
  

    </>
  )
}

export default About