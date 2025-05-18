const WhoWeAre = () => {
  return (
    <section className="agency_features_area consulting_features_area_three">
      <div className="container custom_container">
        <div className="row agency_features_item agency_features_item_three align-items-center">
          <div className="col-lg-6">
            <div className="agency_features_img text-start">
              <img
                className="img_border_radius"
                src="/img/home9/card_img.png"
                alt=""
              />
              {/* <img
                className="shape right"
                data-parallax='{"y": -60}'
                src="/img/home9/card-2.png"
                alt=""
              /> */}
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="agency_features_content">
              <h2 className="agency_title_two text-start">Who We Are</h2>
              <p>
                At VERZIO – The Language Chamber, we empower teachers with
                strong English skills and dynamic teaching techniques to create
                engaging, future-ready classrooms.
              </p>
              <div className="features_list">
                <div className="f_list_item">
                  <div className="icon">
                    <img src="/img/home9/dashboard-icon.png" alt="" />
                  </div>
                  <div className="text">
                    <h4>English Communication Program</h4>
                    <p>Strengthen grammar, vocabulary, and fluency.</p>
                  </div>
                </div>
                <div className="f_list_item">
                  <div className="icon">
                    <img src="/img/home9/sync-icon.png" alt="" />
                  </div>
                  <div className="text">
                    <h4>Faculty Dynamation</h4>
                    <p>Transform teaching skills through leadership & presentation training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
