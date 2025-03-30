const approaches = [
  {
    id: 1,
    title: "Interactive Training",
    description: "Real-world communication exercises.",
  },
  {
    id: 2,
    title: "Technology Integration",
    description: "Effective use of online environment.",
  },
  {
    id: 3,
    title: "Fluency Reinforcement",
    description: "Echo Chamber approach for daily practice.",
  },
  {
    id: 4,
    title: "Balanced Practice Sessions",
    description: "Vocabulary building, Articulation, and Scripting.",
  },
  {
    id: 5,
    title: "Faculty Dynamation",
    description: "Training teachers to be future-ready mentors.",
  },
];

const ApproachSection = () => {
  return (
    <section className="agency_service_area">
      <div className="container custom_container">
        <h2 className="agency_title_two text-center">Our Approach</h2>
        <div style={{ gap: "0px" }} className="row">
          {approaches.map((approach, index) => (
            <div
              key={approach.id}
              style={{ scale: "0.9" }}
              className="col-lg-4  col-sm-6 agency_service_item wow fadeInUp"
              data-wow-delay={`${0.1 * (index + 1)}s`}
            >
              <a href="#">
                <h3>{approach.title}</h3>
              </a>
              <p>{approach.description}</p>
              <a href="#" className="agency_service_btn">
                Get Started <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
