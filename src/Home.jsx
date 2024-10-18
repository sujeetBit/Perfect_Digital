import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Service from './Service'
import About from './About'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <Header/>
<div className="hero_area">
 
    {/* slider section */}
    <section className="slider_section ">
      <div className="slider_bg_box">
        <img src="Temp/images/slider-bg.AVIF" alt=""></img>
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 ">
                  <div className="detail-box">
                    <h1>
                    Elevate your brand  <br/>
                    with us
                    </h1>
                    <p>
                    Transforming Businesses: How Perfect Digital Revolutionizes Online Presence and Digital Marketing Strategies
                    </p>
                    <div className="btn-box">
                    <Link to="/contact" className="btn1">
                        Get A Quote
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 ">
                  <div className="detail-box">
                    <h1>
                    We improve your digital  <br/>
                    presence
                    </h1>
                    <p>
                    Unlock Your Digital Potential: Perfect Digital's Comprehensive Guide to E-Commerce Success</p>
                    <div className="btn-box">
                    <Link to="/contact" className="btn1">
                        Get A Quote
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 ">
                  <div className="detail-box">
                    <h1>
                    Improving your online <br/>
                    business strategy
                    </h1>
                    <p>
                    Mastering SEO: Perfect Digital's Top Techniques to Increase Your Website's Search Rankings
                    </p>
                    <div className="btn-box">
                      <Link to="/contact" className="btn1">
                        Get A Quote
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>
      </section>
      </div>
 {/* end slider section */}
   
    <Service/>




    
   
 


<About/>
 
  {/* track section */}



  {/* end track section */}

  {/* client section */}



 


  {/* end client section */}

  
 
  <Footer/>
  {/* footer section */}

  {/* jQery */}
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  {/* popper js */}
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
  </script>
  {/* bootstrap js */}
  <script type="text/javascript" src="js/bootstrap.js"></script>
  {/* owl slider */}
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  {/* custom js */}
  <script type="text/javascript" src="js/custom.js"></script>
  {/* Google Map */}
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
  </script>
  {/* End Google Map */}
    </>
  )
}

export default Home