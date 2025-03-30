const AgencyBanner = () => {
  return (
    <section className="agency_banner_area_two">
      <div className="container custom_container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="agency_banner_content_two">
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Empowering Teachers, Transforming Classrooms
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                Welcome to VERZIO – The Language Chamber, where we redefine
                English communication and teaching excellence for educators.
              </p>
              <a
                href="#"
                className="theme_btn hover_effect wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Join us
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
              <div
                className="customer_ratting d-flex wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="support_item">
                  <div className="author_img">
                    <img src="/img/home-6/author_one.jpg" alt="" />
                    <img src="/img/home-6/author_two.jpg" alt="" />
                    <img src="/img/home-6/author_three.jpg" alt="" />
                  </div>
                  <div className="author_text">
                    <span className="numbers">38,482</span>
                    <p>Happy Customer</p>
                  </div>
                </div>
                <div className="support_item">
                  <div className="author_text">
                    <div className="numbers">4.8/5 </div>
                    <div className="rating">
                      <img src="/img/home-6/Stars.png" alt="" />
                      <p> Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="agency_banner_img_two text-end wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <img className="img" src="/img/home-7/business_img.jpg" alt="" />
              {/* <img
                className="shap one"
                data-parallax='{"x": -10, "y": -50}'
                src="/img/home-6/graph-1.png"
                alt=""
              />
              <img
                className="shap two"
                data-parallax='{"x": 0, "y": 80}'
                src="/img/home-6/graph-2.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
