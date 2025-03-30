const OurVission = () => {
  return (
    <section className="agency_features_area_two">
      <div className="container custom_container">
        <div className="row agency_features_item agency_features_item_four align-items-center">
          <div className="col-lg-6">
            <div
              className="agency_features_content ps-5 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h2 className="agency_title_two text-start">Our Vision</h2>
              <p>
                To revolutionize education by empowering teachers with advanced
                communication skills, bridging the gap between regional
                languages and English, and fostering a more interactive and
                future-ready classroom environment.
              </p>
              <div className="agency_contact_list">
                <a href="mailto:info.calmor@support.com">
                  info.calmor@support.com
                </a>
                <a href="tel:441793123456">+44 1793 123 456</a>
              </div>
              <a
                href="#"
                className="theme_btn_two hover_effect border-radius-none"
              >
                Let’s Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="agency_features_img wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <img
                style={{ borderRadius: "15px" }}
                src="/img/home-7/business_img.jpg"
                alt="Business"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVission;
