import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { container_variants, item_variants } from "@/constants/framer-motion";
const AgencyBanner = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Animate the image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
        }
      );
    }

    // Animate the button
    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 1,
          ease: "power2.out",
        }
      );
    }
  }, []);
  return (
    <section className="agency_banner_area_two">
      <div className="container custom_container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="agency_banner_content_two">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {"Empowering Teachers, Transforming Classrooms"
                  .split(" ")
                  .map((word, idx) => (
                    <motion.span
                      key={idx}
                      className="inline-block mr-2"
                      variants={item_variants}
                    >
                      {word}
                    </motion.span>
                  ))}
              </motion.h2>
              <motion.p variants={container_variants}>
                {" Welcome to VERZIO – The Language Chamber, where we redefine English communication and teaching excellence for educators."
                  .split(" ")
                  .map((word, idx) => (
                    <motion.span
                      key={idx}
                      className="inline-block mr-2"
                      variants={item_variants}
                      initial="hidden"
                      animate="visible"
                    >
                      {word}
                    </motion.span>
                  ))}
              </motion.p>
              <motion.a
                initial="hidden"
                animate="visible"
                variants={item_variants}
                href="#"
                className="theme_btn hover_effect wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Join us
                <i className="fa-solid fa-arrow-right-long"></i>
              </motion.a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              ref={imageRef}
              className="agency_banner_img_two text-end wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <img className="img" src="/img/home-7/business_img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
