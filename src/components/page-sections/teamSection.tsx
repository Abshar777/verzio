import React from "react";

const teamMembers = [
  {
    name: "Basheer PA",
    role: "Impact Strategist & Coach",
    img: "/images/avatar.jpg",
  },
  {
    name: "Nafila Shareefa MI",
    role: "Counsellor & Concept Developer",
    img: "/images/avatar.jpg",
  },
  {
    name: "Najila Hawada",
    role: "Content Curator & Language Specialist",
    img: "/images/avatar.jpg",
  },
  {
    name: "Jins Shaji",
    role: "Grammarian & Bilingual Educator",
    img: "/images/avatar.jpg",
  },
  {
    name: "Anagha K",
    role: "Fluency Architect & Conversation Coach",
    img: "/images/avatar.jpg",
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
