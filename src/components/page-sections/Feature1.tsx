const ConsultingFeaturesArea = () => {
  return (
    <section className="consulting_features_area">
      <div className="container">
        <div className="section_title mb-5 text-center">
          <h2 className="agency_title_two text-center">
            Empowering Teachers with <br /> Digital Learning
          </h2>
          <p>
            At VERZIO, we go beyond traditional training by integrating digital
            learning solutions to enhance teaching methodologies and classroom
            engagement.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="consulting_features_item d-flex align-items-center">
              <div className="app_features_text">
                <h3>Interactive Digital Tools</h3>
                <p>
                  technology-driven teaching methods
                  <br />
                  for engaging lessons.
                </p>
                <a href="#" className="text_btn">
                  Learn More
                </a>
              </div>
              <div className="consulting_features_img">
                <img
                  data-parallax='{"y": 30}'
                  src="/img/home9/card1.png"
                  alt=""
                />
                <img
                  data-parallax='{"y": -30}'
                  src="/img/home9/card2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="consulting_features_item two d-flex">
              <div className="app_features_text">
                <h3>Online Resource Library</h3>
                <p>
                  lesson plans, communication exercises, and fluency-building
                  activities.
                </p>
                <a href="#" className="text_btn">
                  Learn More
                </a>
              </div>
              <div className="consulting_features_img">
                <img
                  data-parallax='{"x": 30}'
                  style={{borderRadius:"20px", scale:".9"}}
                    src="/images/onC2.jpg"
                  alt=""
                  
            
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="consulting_features_item two d-flex">
              <div className="app_features_text">
                <h3>Global Teaching Community </h3>
                <p>
                  network of educators sharing best practices and innovative
                  techniques.
                </p>
                <a href="#" className="text_btn">
                  Learn More
                </a>
              </div>
              <div className="consulting_features_img">
                <img
                  data-parallax='{"x": 30}'
                  src="/images/onC.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingFeaturesArea;
