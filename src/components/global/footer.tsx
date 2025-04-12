import React from "react";

const pages = [
  "📌  Kozhikode, Kerala, India",
  "📞 +91 999200190",
  "📧 verzio@mib.com",
  "📱 +91 9895000000",
  "Personal Finance",
];

const socialLinks = ["facebook", "twitter", "linkedin", "instagram", "youtube"];

const Footer: React.FC = () => {
  return (
    <footer className="footer_area_white">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container custom_container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              {/* Footer About */}
              <div className="single-widget footer-about widget">
                <a className="logo d-flex align-items-center"  href="index.html">
                  <div style={{width: "100px"}} className="logo-img  logo-black">
                    <img
                      style={{ scale: 0.7 }}
                      src="/svg/logo-black.svg"
                      alt="logo"
                    />
                  </div>
                  <h1>Verzio</h1>
                </a>
                <p>
                  Let’s Connect & Transform Education!
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* Footer Links */}
              <div className="single-widget f-link-two widget">
                <h3 className="widget-title">Physical Presence</h3>
                <ul>
                  {pages.map((page, index) => (
                    <li key={index}>
                      <a href="#">{page}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* Footer News */}
              <div className="single-widget f-link-two widget">
                <h3 className="widget-title">Virtual presence </h3>
                <ul>
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Footer Contact */}
              <div className="single-widget f-link-two widget">
                <h3 className="widget-title">Contact</h3>
                <ul>
                  <li className="footer-mobile-number">
                    <a href="mailto:verzio@mib.com">verzio@mib.com</a>
                  </li>
                  <li className="footer-mobile-number">
                    Kozhikode, Kerala, India
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border_bottom"></div>
        </div>
      </div>
      {/* Copyright */}
      <div className="copyright">
        <div className="container custom_container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright-content text-md-start text-center">
                <p>
                  © <a href="#">Abshar777</a> 2025. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <a href="#" className="back_btn">
                Back to top <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
