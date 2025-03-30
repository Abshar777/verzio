import React from "react";

const verzioPrograms = [

  {
    title: "3-Month Program",
    price: "$299",
    delay: "0.2s",
    features: [
      "Grammar & Usage",
      "Vocabulary Enhancement",
      "Speaking & Listening Skills",
      "Translation Exercises",
      "Certification Included",
    ],
  },
  {
    title: "6-Month Program",
    price: "$499",
    delay: "0.3s",
    features: [
      "Advanced Grammar & Usage",
      "Interactive Debates",
      "Presentation Skills",
      "Classroom Engagement Strategies",
      "Certification Included",
    ],
  },
  {
    title: "1-Year Program",
    price: "$899",
    delay: "0.4s",
    features: [
      "Leadership & Vision Building",
      "Capacity Enhancement Sessions",
      "Real-life Conversation Practice",
      "Customizable for Schools",
      "Certification Included",
    ],
  },
];

const CourseSection: React.FC = () => {
  return (
    <section className="agency_pricing_area">
      <div className="container custom_container">
        <h2
          className="agency_title agency_title_two text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          VERZIO English Communication Programs
        </h2>
        <div className="row">
          {verzioPrograms.map((program, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div
                className="pricing_item wow fadeInUp"
                data-wow-delay={program.delay}
              >
                <h3 className="price_title">{program.title}</h3>
                {/* <div className="price">
                  {program.price}
                  <sub>/one-time</sub>
                </div> */}
                <ul className="list-unstyled">
                  {program.features.map((feature, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-circle-check"></i>{feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="theme_btn_two hover_effect border-radius-none"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;