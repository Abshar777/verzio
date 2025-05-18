import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurCore = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effects
  const videoY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const shapeBottomY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  // const shapeLeftY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const shapeRightY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Staggered animation for list items
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={sectionRef} className="agency_features_area consulting_features_area_two">
      <div className="container custom_container">
        <div className="row agency_features_item agency_features_item_three flex-row-reverse align-items-center">
          <div className="col-lg-6">
            <motion.div 
              ref={videoRef}
              className="agency_features_img text-center"
              style={{ y: videoY }}
            >
              <motion.video
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                style={{ width: "25rem", borderRadius: "20px" }}
                src="/videos/2.mp4"
                autoPlay
                muted
                loop
              />
              <motion.img
                className="shape bottom"
                style={{ y: shapeBottomY }}
                src="/img/home9/line.png"
                alt=""
              />
              {/* <motion.img
                className="shape left"
                style={{ y: shapeLeftY }}
                src="/img/home9/text.png"
                alt=""
              /> */}
              <motion.img
                className="shape right"
                style={{ y: shapeRightY }}
                src="/img/home9/round.png"
                alt=""
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              ref={contentRef}
              className="agency_features_content pe-5"
              style={{ y: contentY, opacity: contentOpacity }}
            >
              <motion.h2 
                className="agency_title_two text-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Core Compitance
              </motion.h2>
              <div className="features_list">
                {[
                  {
                    title: "English Communication Program",
                    desc: "Strengthen grammar, vocabulary, and fluency."
                  },
                  {
                    title: "Faculty Dinamation",
                    desc: "Transform teaching skills through leadership & presentation training."
                  },
                  {
                    title: "Innovative Learning Approach",
                    desc: "Interactive sessions, real-time practice & reinforcement."
                  },
                  {
                    title: "Flexible Learning",
                    desc: "Online & offline training tailored as per requirement"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="f_list_item"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={listVariants}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="#"
                className="theme_btn_two hover_effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Certified Today!{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCore;