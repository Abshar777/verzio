import React from "react";

const ActionAreaTwo: React.FC = () => {
  return (
    <section className="action_area_two text-center">
      <img className="shape_bg" src="img/home-7/action_bg.png" alt="" />
      <img
        className="action_shape one"
        data-parallax='{"x": 80, "y": 20}'
        src="img/home-7/phone.png"
        alt=""
      />
      <img
        className="action_shape two"
        data-parallax='{"x": 0, "y": 50}'
        src="img/home-7/email.png"
        alt=""
      />
      <img
        className="action_shape three"
        data-parallax='{"x": 30, "y": 60}'
        src="img/home-7/plan.png"
        alt=""
      />
      <img src="#" alt="" />
      <div className="container custom_container wow fadeInUp" data-wow-delay="0.3s">
        <h2 className="agency_title_two w_color">Connect With Us</h2>
        <p>Let's get to work</p>
        <a href="#" className="theme_btn_two hover_effect border-radius-none">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default ActionAreaTwo;
