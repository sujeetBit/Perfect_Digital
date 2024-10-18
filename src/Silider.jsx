import React from 'react'


const Silider = () => {
  return (
    <>

        
<section ClassName="slider_section ">
      <div ClassName="slider_bg_box">
        <img src="images/slider-bg.jpg" alt=""/>
      </div>
      <div id="customCarousel1" ClassName="carousel slide" data-ride="carousel">
        <div ClassName="carousel-inner">
          <div ClassName="carousel-item active">
            <div ClassName="container ">
              <div ClassName="row">
                <div ClassName="col-md-7 ">
                  <div ClassName="detail-box">
                    <h1>
                      We Provide best 
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div ClassName="btn-box">
                      <a href="" ClassName="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ClassName="carousel-item">
            <div ClassName="container ">
              <div ClassName="row">
                <div ClassName="col-md-7 ">
                  <div ClassName="detail-box">
                    <h1>
                      We Provide best 
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div ClassName="btn-box">
                      <a href="" ClassName="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ClassName="carousel-item">
            <div ClassName="container ">
              <div ClassName="row">
                <div ClassName="col-md-7 ">
                  <div ClassName="detail-box">
                    <h1>
                      We Provide best 
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div ClassName="btn-box">
                      <a href="" ClassName="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol ClassName="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" ClassName="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>

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

export default Silider