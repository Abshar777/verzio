
const testimonials = [
  {
    id: 1,
    name: "Julias Dien",
    position: "CEO / Creative IT",
    text: "Easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”",
  },
  {
    id: 2,
    name: "Darnell Burtin",
    position: "Web Developer",
    text: "I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content.”",
  },
  {
    id: 3,
    name: "Julias Dien",
    position: "CEO / Creative IT",
    text: "Easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”",
  },
];

const Testimonials = () => {
  return (
    <section className="agency_testimonial_area_two">
      <img className="shap" src="img/home-6/testimonial_bg.png" alt="" />
      <img className="shap two" src="img/agency/lines.png" alt="" />
      <div className="container custom_container">
        <h2 className="agency_title_two w_color text-center wow fadeInUp" data-wow-delay="0.1s">
          Let’s hear what the students<br /> say about us
        </h2>
        <div className="testimonial-inner testimonial-inner-white">
          <div className="testimonial-slider-two">
            {testimonials.map((testimonial) => (
              <div className="single-slider" key={testimonial.id}>
                <ul className="star-list">
                  {[...Array(5)].map((_, index) => (
                    <li key={index}><i className="fa fa-star"></i></li>
                  ))}
                </ul>
                <p>{testimonial.text}</p>
                <div className="t-info">
                  <div className="t-left">
                    <h2>{testimonial.name} <span>{testimonial.position}</span></h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
