
import carsol1 from "./carsol1.png";
import carsol2 from "./carsol2.png";
import carsol3 from "./carsol3.png";
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>


            <div className="container-fluid">
                <div className="slider-area">
                    

                    <Carousel fade interval={500}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carsol3}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h1>fashion<br />changing<br />always</h1>
                                <Link to="Shop" className="border-btn">Shop Now</Link>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carsol2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h1>fashion<br />changing<br />always</h1>
                                <Link to="Shop" className="border-btn">Shop Now</Link>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carsol1}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h1>fashion<br />changing<br />always</h1>
                                <Link to="Shop" className="border-btn">Shop Now</Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>






                <div className="new-arrival">
                    <div className="container p-auto">
                        {/* Section title */}
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="section-tittle mb-60 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <h2>new<br />arrival</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Product 1 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                    <div className="popular-img">
                                        <img src="assets/img/gallery/arrival1.png" alt="" />
                                        <div className="favorit-items">
                                            <img src="assets/img/gallery/favorit-card.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                        <div className="rating mb-10">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span>$ 30.00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <div className="popular-img">
                                        <img src="assets/img/gallery/arrival2.png" alt="" />
                                        <div className="favorit-items">
                                            <img src="assets/img/gallery/favorit-card.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                        <div className="rating mb-10">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span>$ 30.00</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Product 3 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="popular-img">
                                        <img src="assets/img/gallery/arrival3.png" alt="" />
                                        <div className="favorit-items">
                                            <img src="assets/img/gallery/favorit-card.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                        <div className="rating mb-10">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span>$ 30.00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product 4 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div className="popular-img">
                                        <img src="assets/img/gallery/arrival4.png" alt="" />
                                        <div className="favorit-items">
                                            <img src="assets/img/gallery/favorit-card.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                        <div className="rating mb-10">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span>$ 30.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second row */}
            <div className="container m-auto">
                    <div className="row">
                        {/* Product 1 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                <div className="popular-img">
                                    <img src="assets/img/gallery/arrival5.png" alt="" />
                                    <div className="favorit-items">
                                        <img src="assets/img/gallery/favorit-card.png" alt="" />
                                    </div>
                                </div>
                                <div className="popular-caption">
                                    <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                    <div className="rating mb-10">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span>$ 30.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <div className="popular-img">
                                    <img src="assets/img/gallery/arrival6.png" alt="" />
                                    <div className="favorit-items">
                                        <img src="assets/img/gallery/favorit-card.png" alt="" />
                                    </div>
                                </div>
                                <div className="popular-caption">
                                    <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                    <div className="rating mb-10">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span>$ 30.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="popular-img">
                                    <img src="assets/img/gallery/arrival7.png" alt="" />
                                    <div className="favorit-items">
                                        <img src="assets/img/gallery/favorit-card.png" alt="" />
                                    </div>
                                </div>
                                <div className="popular-caption">
                                    <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                    <div className="rating mb-10">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span>$ 30.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="popular-img">
                                    <img src="assets/img/gallery/arrival8.png" alt="" />
                                    <div className="favorit-items">
                                        <img src="assets/img/gallery/favorit-card.png" alt="" />
                                    </div>
                                </div>
                                <div className="popular-caption">
                                    <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                    <div className="rating mb-10">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span>$ 30.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className=" ">
                        <a href="catagori.html" className="border-btn">Browse More</a>
                    </div>
                </div>
               
                </div>     
                {/* 4th section */}

                <section className="collection section-bg2 section-padding30 section-over1 ms-5 me-5 pb-5" style={{ background: `url('assets/img/gallery/section_bg01.png') center center/cover no-repeat` }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="single-question text-center">
              <h2 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">collection houses our first-ever</h2>
              <a href="about.html" className="border-btn wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>

                {/* 5th section */}




             

                <div className="popular-product pt-50">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single-product mb-50 ">
              <div className="location-img">
                <img src="assets/img/gallery/popular-imtes1.png" alt="" />
              </div>
              <div className="location-details">
                <p>Established fact that by the<br/> readable content</p>
                <a href="product_details.html" className="border-btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single-product mb-50">
              <div className="location-img">
                <img src="assets/img/gallery/popular-imtes2.png" alt="" />
              </div>
              <div className="location-details">
                <p>Established fact that by the<br/> readable content</p>
                <a href="product_details.html" className="border-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




            </div>
        </>
    );
}

export default Home;
