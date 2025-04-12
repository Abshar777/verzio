const Header = () => {
  return (
    <header className="header header_absolute header_blue border-none">
      <div className="middle-header">
        <div className="container custom_container">
          <div className="row">
            <div className="col-12">
              <div className="middle-inner">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-md-2 col-12">
                    <div className="logo">
                      <div className=" mt-0 menu_white nav main-menu menu navbar-nav menu_white">
                        <a href="/" className="d-flex align-items-center">
                          <div  className="logo-img logo-white">
                            <img
                              style={{ scale: 0.7 }}
                              src="/svg/logo.svg"
                              alt="logo"
                            />
                          </div>
                          <div  className="logo-img d-none logo-black">
                            <img
                              style={{ scale: 0.7 }}
                              src="/svg/logo-black.svg"
                              alt="logo"
                            />
                          </div>
                          <h1 className="header-text text-white">Verzio</h1>
                        </a>
                      </div>
                    </div>
                    <div className="mobile-nav"></div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-12">
                    <div className="menu-area">
                      <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">
                          <div className="nav-inner">
                            <div className="menu-home-menu-container">
                              <ul
                                id="nav"
                                className="nav main-menu menu navbar-nav menu_white"
                              >
                                <li className="">
                                  <a href="#">Home</a>
                                </li>
                                <li className="">
                                  <a href="#">About</a>
                                </li>

                                <li>
                                  <a href="/contact.html">Contact Us</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </nav>
                      <div className="right-button d-flex align-items-center">
                        <a
                          href="/contact.html"
                          className="theme_btn hover_effect btn_yellow"
                        >
                          Start for Free
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
