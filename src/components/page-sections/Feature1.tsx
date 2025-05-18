"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ConsultingFeatureBlock = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

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
        <div className="row space-y-8">
          <div className="col-lg-12">
            <ConsultingFeatureBlock>
              <div className="consulting_features_item d-flex align-items-center gap-4">
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
                <div>
                  <img
                    className="w-[20rem] mix-blend-darken"
                    data-parallax='{"y": 30}'
                    src="/images/tools.jpg"
                    alt=""
                  />
                </div>
              </div>
            </ConsultingFeatureBlock>
          </div>

          <div className="col-lg-7 col-md-6">
            <ConsultingFeatureBlock>
              <div className="consulting_features_item two d-flex gap-4">
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
                    style={{ borderRadius: "20px", scale: ".9" }}
                    src="/images/onC2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </ConsultingFeatureBlock>
          </div>

          <div className="col-lg-5 col-md-6">
            <ConsultingFeatureBlock>
              <div className="consulting_features_item two d-flex gap-4">
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
                  <img src="/images/onC.jpg" alt="" />
                </div>
              </div>
            </ConsultingFeatureBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingFeaturesArea;
