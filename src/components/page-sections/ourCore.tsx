const OurCore = () => {
  return (
    <section className="agency_features_area consulting_features_area_two">
      <div className="container custom_container">
        <div className="row agency_features_item agency_features_item_three flex-row-reverse align-items-center">
          <div className="col-lg-6">
            <div className="agency_features_img text-center">
              <img
                className="img_border_radius"
                src="/img/home9/man.png"
                alt=""
              />
              <img
                className="shape bottom"
                data-parallax='{"x": 0, "y": 50, "rotateZ": 0}'
                src="/img/home9/line.png"
                alt=""
              />
              <img
                data-parallax='{"y": -70}'
                className="shape left"
                src="/img/home9/text.png"
                alt=""
              />
              <img
                data-parallax='{"y": 40}'
                className="shape right"
                src="/img/home9/round.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="agency_features_content pe-5">
              <h2 className="agency_title_two text-start">Our Core Values</h2>
              <div className="features_list">
                <div className="f_list_item">
                  <h4>English Communication Program</h4>
                  <p>Strengthen grammar, vocabulary, and fluency.</p>
                </div>
                <div className="f_list_item">
                  <h4>Faculty Dynamation </h4>
                  <p>
                    Transform teaching skills through leadership & presentation
                    training.
                  </p>
                </div>
                <div className="f_list_item">
                  <h4>Innovative Learning Approach </h4>
                  <p>
                    Interactive sessions, real-time practice & reinforcement.
                  </p>
                </div>
                <div className="f_list_item">
                  <h4>Flexible Learning </h4>
                  <p>Online & offline training tailored as per requirement</p>
                </div>
              </div>
              <a href="#" className="theme_btn_two hover_effect">
                Get Certified Today!{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCore;
