import React from "react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: "faq1",
    question: "VERZIO – Communicative English – Residential Program ( 1 Month)",
    answer:
      "Verzio’s One-Month Residential Fluency Program is an immersive 24-hour learning experience designed to transform participants into confident English speakers. Unlike traditional courses, this program offers a unique stay-with-thetrainer approach, ensuring continuous language exposure and real-world practice. Participants are free to travel, engage in daily activities, and interact in various environments, all while being accompanied by a language mentor to guide and correct them in real time. With personalized coaching, live discussions, and interactive sessions, this intensive program guarantees fluency and confidence by the end of the month.",
  },
  {
    id: "faq2",
    question: "Dynamation English Program for Students & Entrepreneurs",
    answer:
      "Verzio introduces the Dynamation English Program tailored for students and entrepreneurs, focusing on practical communication, confidence building, and global networking skills. For students, the program enhances academic and social communication, preparing them for future careers. For entrepreneurs, it sharpens business communication, negotiation skills, and cross-cultural engagement, enabling them to thrive in the global market.",
  },
  {
    id: "faq3",
    question: "Foreign Language Courses",
    answer:
      "In addition to English fluency programs, Verzio offers foreign language courses in French, Japanese, Spanish, German, and more, designed for students, professionals, and travelers. Whether you aim to expand career opportunities, study abroad, or explore new cultures, our expert trainers ensure a seamless and engaging learning experience tailored to your needs.",
  },
];

const MoreCourses: React.FC = () => {
  return (
    <section className="agency-faq-area">
      <div className="container custom_container">
        <h2
          className="agency_title_two text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          Other verticles -more course
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="accordion faq-two wow fadeInUp"
              data-wow-delay="0.3s"
              id="accordion"
              role="tablist"
            >
              {faqs.map((faq, index) => (
                <div className="single-faq" key={faq.id}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="faq-heading"
                    role="tab"
                    id={faq.id}
                  >
                    <h4 className="faq-title">
                      <a
                        className={index === 0 ? "" : "collapsed"}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index + 1}`}
                        href="#"
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index + 1}`}
                      >
                        {faq.question}
                      </a>
                    </h4>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index + 1}`}
                      href="#"
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index + 1}`}
                      className="faq-icon"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </a>
                  </div>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    role="tabpanel"
                    aria-labelledby={faq.id}
                    data-bs-parent="#accordion"
                  >
                    <div className="faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreCourses;
