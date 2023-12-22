import Aos from "aos";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <header>
        <div className="hdr">
          <div className="container">
            <div className="main-hdr">
              <div className="logo" data-aos="fade-right">
                <div className="image">
                  <Link to="/">
                    <img src="/image/Logo.png" alt="" />
                  </Link>
                </div>
                <div className="image-1">
                  <img src="/image/Logo-1.png" alt="" />
                </div>
              </div>
              <nav class="navbar navbar-expand-sm " data-aos="fade-left">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-target="#navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <Link to="/" class="nav-link">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="bnnr">
          {/* <div className="container"> */}
            <div className="bnr-main">
              <div className="bnnr-main-cntnt">
                <h1 data-aos="zoom-out-up">
                  <span
                    className="cntnt"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                  >
                    Welcome
                  </span>{" "}
                  to <br />
                  The world of
                  <br />
                  Tasty & Fresh Food
                </h1>
                <p
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                  elit sed do eiusmod tempor incididunt ut labore et dolore
                  magna <br /> aliqua
                </p>

                <div className="play-store">
                  <div
                    className="play-store-image"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                  >
                    <img src="/image/Google-play .png" alt="" />
                  </div>

                  <div className="play-store-image"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000">
                    <img src="/image/App.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
      <section className="bnnr-about">
        <div className="about">
          <div className="container">
            <div className="about-cntnt">
              <div className="inner-flx">
                <div className="about-cntnt-left">
                  <h1
                    className="content"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    About us
                  </h1>
                  <p
                    className="about-inner"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <span
                    className="about-down"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                  >
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </div>
                <div
                  className="about-img"
                  data-aos="zoom-in-down"
                  data-aos-duration="1000"
                >
                  <img src="/image/Pizza.png" alt="" />
                </div>
              </div>
              <div className="inner-flx">
                <div
                  className="right-img"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img src="/image/Right-mobile.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bnnr-services">
        <div className="services">
          <div className="container">
            <div className="services-cntnt">
              <div className="service-heading">
                <h1
                  className="content"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Services
                </h1>
                <p
                  className="service-cntnt"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt <br />
                  ut labore et dolore magna aliqua Ut enim ad minim veniam
                </p>
              </div>
              <div className="service-card">
                <div class="card-1" data-aos="zoom-in-down">
                  <div
                    className="card-menu"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <div
                      class="image-container"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <img src="/image/second-1.png" alt="Profile Image" />
                    </div>
                    <div
                      class="content-container"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <h1
                        className="content"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        Lorem ipsum
                      </h1>
                      <p
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                      >
                        Lorem ipsum dolor sit amet dolor consectetur adipiscing
                        elit sed do eiusmod tempor incididunt
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-1" data-aos="zoom-in-down">
                  <div
                    className="card-menu"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <div
                      class="image-container"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <img src="/image/second-2.png" alt="Profile Image" />
                    </div>
                    <div
                      class="content-container"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <h1
                        className="content"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        Lorem ipsum
                      </h1>
                      <p
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                      >
                        Lorem ipsum dolor sit amet dolor consectetur adipiscing
                        elit sed do eiusmod tempor incididunt
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-1" data-aos="zoom-in-down">
                  <div
                    className="card-menu"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <div
                      class="image-container"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <img src="/image/second-3.png" alt="Profile Image" />
                    </div>
                    <div
                      class="content-container"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <h1
                        className="content"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        Lorem ipsum
                      </h1>
                      <p
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                      >
                        Lorem ipsum dolor sit amet dolor consectetur adipiscing
                        elit sed do eiusmod tempor incididunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bnnr-features sm">
        <div className="features">
          <div className="container">
            <div className="features-cntnt">
              <div className="inner-flx">
                <div
                  className="left-img"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img src="/image/Left-mobile.png" alt="" />
                </div>
              </div>
              <div className="inner-flx">
                <div className="features-cntnt-left">
                  <h1
                    className="content"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    Features
                  </h1>
                  <p
                    className="features-inner"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <span
                    className="features-down"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </div>
                <div
                  className="features-img"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img src="/image/Pizza.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="contact">
          <div className="container">
            <div className="contact-cntnt">
              <div className="contact-cntnt-main">
                <div className={`inner-contact-flx `}>
                  <div className="contact-left-content">
                    <div className="contact-hdr">
                      <h3 className="contact-about" data-aos="fade-right">
                        Contact us
                      </h3>
                      <span data-aos="fade-down">
                        Lorem ipsum dolor sit amet, consectetur <br />{" "}
                        adipiscingelit, sed do eiusmod tempor <br /> incididunt
                        ut laboreet dolore magna
                      </span>
                      <div className="contact-address">
                        <ul className="contact-menu">
                          <li className="contact-list" data-aos="fade-up-right">
                            <div className="contact-content">
                              <div className="contact-icon" data-aos="fade-up" data-aos-duration="1000">
                                <i class="bi bi-geo-alt"></i>
                              </div>
                              <div
                                className="contact-cnontent-flx"
                                data-aos="fade-down"
                              >
                                <span>Akshya Nagar, Bangalore-560016</span>
                              </div>
                            </div>
                          </li>
                          <li
                            className="contact-list"
                            data-aos="fade-down-right"
                          >
                            <div className="contact-content">
                              <div
                                className="contact-icon"
                                data-aos="fade-down"
                                data-aos-duration="1000"
                              >
                                <i class="bi bi-telephone"></i>
                              </div>
                              <div
                                className="contact-cnontent-flx"
                                fade-up-right
                              >
                                <span>+91 98765 32104</span>
                              </div>
                            </div>
                          </li>
                          <li className="contact-list" data-aos="fade-up-left">
                            <div className="contact-content">
                              <div
                                className="contact-icon"
                                data-aos="fade-down"
                                data-aos-duration="1000"
                              >
                                <i class="bi bi-envelope"></i>
                              </div>
                              <div
                                className="contact-cnontent-flx"
                                fade-up-right
                              >
                                <span>loremipsum@gmail.com</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner-contact-flx-form ">
                  <div>
                    <h3
                      className="contact-about"
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                    >
                      Leave a message
                    </h3>
                  </div>
                  <form action="#" method="post">
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        pattern="[0-9]{10}"
                        required
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                    />
                    <textarea
                      placeholder="Message"
                      name="message"
                      rows="4"
                      required
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                    ></textarea>
                  </form>
                  <div className="button">
                    <button
                      className="btn bttn "
                      data-aos="zoom-in-down"
                      data-aos-duration="1000"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="footer">
              <div className="footer-left-content">
                <span>Copyright © 2022 | All rights reserved </span>
              </div>
              <div className="footer-right-content">
                <span>Terms & Conditions | Privacy Policy </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
