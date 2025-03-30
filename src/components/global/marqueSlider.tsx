import React from "react";

const AgencyMarqueeSlider: React.FC = () => {
  return (
    <section className="agency_marque_slider">
      <div className="marquee yellow marquee_left">
        {Array(6).fill(0).map((_, index) => (
          <div className="slide" key={`yellow-${index}`}>
            <h2>
              <img src="img/home-7/star.png" alt="" />
              Get Certified as a VERZIO Communicative Educator!
            </h2>
          </div>
        ))}
      </div>
      <div className="marquee green marquee_left">
        {Array(6).fill(0).map((_, index) => (
          <div className="slide" key={`green-${index}`}>
            <h2>
              <img src="img/home-7/star.png" alt="" />
              Get Certified as a VERZIO Communicative Educator!
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgencyMarqueeSlider;