import React from 'react'

export default function Footer() {
  return (
    <footer>
    {/* footer-top-start */}
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-top-menu bb-2">
              <nav>
                <ul>
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">Enable Cookies</a>
                  </li>
                  <li>
                    <a href="#">Privacy and Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#">contact us</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer-top-start */}
    {/* footer-mid-start */}
    <div className="footer-mid ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="single-footer br-2 xs-mb">
                  <div className="footer-title mb-20">
                    <h3>Products</h3>
                  </div>
                  <div className="footer-mid-menu">
                    <ul>
                      <li>
                        <a href="about.html">About us</a>
                      </li>
                      <li>
                        <a href="#">Prices drop </a>
                      </li>
                      <li>
                        <a href="#">New products</a>
                      </li>
                      <li>
                        <a href="#">Best sales</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="single-footer br-2 xs-mb">
                  <div className="footer-title mb-20">
                    <h3>Our company</h3>
                  </div>
                  <div className="footer-mid-menu">
                    <ul>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                      <li>
                        <a href="#">Stores</a>
                      </li>
                      <li>
                        <a href="register.html">My account </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="single-footer br-2 xs-mb">
                  <div className="footer-title mb-20">
                    <h3>Your account</h3>
                  </div>
                  <div className="footer-mid-menu">
                    <ul>
                      <li>
                        <a href="contact.html">Addresses</a>
                      </li>
                      <li>
                        <a href="#">Credit slips </a>
                      </li>
                      <li>
                        <a href="#"> Orders</a>
                      </li>
                      <li>
                        <a href="#">Personal info</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="single-footer mrg-sm">
              <div className="footer-title mb-20">
                <h3>STORE INFORMATION</h3>
              </div>
              <div className="footer-contact">
                <p className="adress">
                  <span>My Company</span>
                  Your address goes here.
                </p>
                <p>
                  <span>Call us now:</span> 0123456789
                </p>
                <p>
                  <span>Email:</span> demo@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer-mid-end */}
    {/* footer-bottom-start */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row bt-2">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="copy-right-area">
              <p>
                © 2022 <strong> Koparion </strong> Mede with ❤️ by{" "}
                <a href="https://hasthemes.com/" target="_blank">
                  <strong>HasThemes</strong>
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="payment-img text-end">
              <a href="#">
                <img src="img/1.png" alt="payment" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer-bottom-end */}
  </footer>
  )
}
