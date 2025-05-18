import React from "react";

const teamMembers = [
  {
    name: "ANAGHA K [M.A., B.Ed.] ",
    role: "FLUENCY ARCHITECT",
    img: "/images/anaga.jpeg",
  },
  {
    name: "NAJILA HAWADHA [M.A, B.Ed.] ",
    role: "CHAIR OF EXPERSSION",
    img: "/images/najila.jpeg",
  },
  {
    name: "BASHEER PA [M.A., B.Ed.] ",
    role: "impact Strategist & Coach",
    img: "/images/basheer.jpeg",
  },
  {
    name: "Nafila Shareefa MI",
    role: "Counsellor & Concept Developer",
    img: "/images/nafila.jpeg",
  },
  {
    name: "JINSH SHAJI  [M.A., B.Ed.] ",
    role: "LINGUISTIC NAVIGATOR",
    img: "/images/jinsh.jpeg",
  },
  {
    name: "ARATHI  ",
    role: "REACH AMBASSADOR",
    img: "/images/arathi.jpeg",
  },
  {
    name: "AKASH  ",
    role: "ONLINE PRESCENCE INNOVATOR",
    img: "/images/akash.jpeg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team section-space">
      <div className="container">
        <h2
          className="agency_title_two text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          Meet the Experts Behind VERZIO
        </h2>
      </div>
      <div className="agency-team-slider wow fadeInUp" data-wow-delay="0.2s">
        {teamMembers.map((member, index) => (
          <div key={index} className="single-slider">
            <div style={{ borderRadius: "15px" }} className="single-team">
              <div style={{ borderRadius: "15px" }} className="team-head">
                <img
                  style={{ borderRadius: "15px" }}
                  src={member.img}
                  alt={member.name}
                />
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="t-content">
                <div className="content-inner">
                  <h4 className="name">
                    <a href="#">{member.name}</a>
                  </h4>
                  <span className="designation">{member.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
