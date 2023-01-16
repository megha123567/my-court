import React from "react";
import './Home.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';



function Home() {
  return (
    <>
      <div className='home1'>
        <div className='humm'>
          <nav className="navbar navbar-expand-sm">
            <div className="container">
              <a className="navbar-brand text-light" href="/home">My<span id="us">Court</span></a>
              <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
                  <li className="nav-item regLink">
                    <Link to={'/auth/login'} ><button className='btn loginButton' id="btnLogin">Login</button></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='homeData'><h1>Free Legal Advice Online
            <div className='text'>From Top Rated Lawyers  </div> </h1></div>

          <Link to={'/auth/register'} ><button className='btn' id="homeButton">REGISTER HERE</button></Link>
        </div>
        <div className="carausal">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-flex img"
                src="https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The power of the lawyer is in the uncertainty of the law</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex img"
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>If you argue RIGHT, you're never WRONG</h3>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex img"
                src="https://images.pexels.com/photos/6077181/pexels-photo-6077181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Lawyers are the only persons in whom ignorance of the law is not punished</h3>
               
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="home3">
      <div className="container-fluid py-5 space">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5" id="space">
                    <img className="img-fluid rounded" id="aboutImg" src="https://images.pexels.com/photos/7781900/pexels-photo-7781900.jpeg" alt=""/>
                </div>
                <div className="col-lg-7 mt-4 mt-lg-0">
                    <h2 className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block" id="h">25 Years Experience</h2>
                    <h6 className="text-uppercase">Learn About Us</h6>
                    <h1 className="mb-4">We Provide Reliable And Effective Legal Services</h1>
                    <p>We approach legal problems by first trying to resolve them amicably without going through the time-consuming and expensive process of litigation. But if your case is one that warrants litigation, remember that we are trial lawyers who are not afraid to fight for you and we’ll be with you every step of the way. Our goal is to be the best lawyer for your matter and to go the distance to help you reach your goals.</p>
                    <Link to={'/about'} className="btn btn-dark mt-2 ">About Us</Link>
                </div>
            </div>
        </div>
    </div>
      </div>

<div className="home4">
<div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6" id="main">
                    <div className="position-relative h-100 rounded overflow-hidden">
                        <img className="image" src="https://lirp.cdn-website.com/e79bc49a/dms3rep/multi/opt/414688-PD6SRO-18-a5d58fb6-640w.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5" id="box">
                    <div className="feature-text bg-white rounded p-lg-5"id="box1">
                        <h6 className="text-uppercase">Our Features</h6>
                        <h1 className="mb-4">Why Choose Us</h1>
                        <div className="d-flex mb-4">
                            <div className="btn-primary btn-lg-square px-3" id="border" >
                                <h5 className="text-secondary m-0">01</h5>
                            </div>
                            <div className="ml-4">
                                <h5>Best Law Practices</h5>
                                <p className="m-0">If you’re looking for the best law attorneys in India, you’re in the right place.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="btn-primary btn-lg-square px-3" id="border">
                                <h5 className="text-secondary m-0">02</h5>
                            </div>
                            <div className="ml-4">
                                <h5>Efficiency & Trust</h5>
                                <p className="m-0">We are committed to your growth, and we promise to practice law for you creatively and with empathy.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="btn-primary btn-lg-square px-3" id="border">
                                <h5 className="text-secondary m-0">03</h5>
                            </div>
                            <div className="ml-4">
                                <h5>Results You Deserve</h5>
                                <p className="m-0">No matter what you have been through, our philosophies and values remain constant.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      <div className="home2">
        <div className="container">
          <CDBFooter className="shadow text-light ">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
              <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                <CDBBox>
                  <a href="/home" className="d-flex align-items-center p-0" id="ok">

                    <span className="ml-3 h5 font-weight-bold text-black" >MyCourt</span>
                  </a>
                  <p className="my-3" style={{ width: '250px', color:'black' }}>
                    We are trying our level best for users to find for a lawyer
                    and register for cases thus making their jobs easier.
                  </p>
                  <CDBBox display="flex" className="mt-4">
                    <CDBBtn flat color="dark">
                      <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3">
                      <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                      <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                  </CDBBox>
                </CDBBox>
                <CDBBox>
                  <p className="h5 mb-4" style={{ fontWeight: '600', color:'black' }}>
                    Help
                  </p>
                  <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                    <CDBFooterLink href="/">Resources</CDBFooterLink>
                    <CDBFooterLink href="/">Contact</CDBFooterLink>
                    <CDBFooterLink href="/">Blog</CDBFooterLink>
                  </CDBBox>
                </CDBBox>
              
                <CDBBox>
                  <p className="h5 mb-4" style={{ fontWeight: '600', color:'black' }}>
                    About Us
                  </p>
                  <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                    <CDBFooterLink href="/about">Aim</CDBFooterLink>
                    <CDBFooterLink href="/about">Vision</CDBFooterLink>
                    <CDBFooterLink href="/about">Testimonials</CDBFooterLink>
                  </CDBBox>
                </CDBBox>
                <CDBBox>
                  <p className="h5 mb-4" style={{ fontWeight: '600', color:'black' }}>
                    Reach Us
                  </p>
                  <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                    <CDBFooterLink href="/">+91 8078068893</CDBFooterLink>
                    <CDBFooterLink href="/">mycourt@gmail.com</CDBFooterLink>
                    <CDBFooterLink href="/">mycourt@outlook.com</CDBFooterLink>
                  </CDBBox>
                </CDBBox>
              </CDBBox>
              <small className="text-center mt-5">&copy; myCourt, 2022. All rights reserved.</small>
            </CDBBox>
          </CDBFooter>
        </div>
      </div>

    </>
  );
}

export default Home;
