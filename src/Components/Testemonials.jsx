import { motion } from "framer-motion";

import { testimonialData } from "../data";

import TestimonialsCarousel from "./TestimonialsCarousel";
import { fadeIn, staggerContainer } from "../variants";

const Testemonials = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <motion.section
      id="testimonials"
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      whileInView={"show"}
      className="h-[800px] bg-menu mt-[-100px]"
    >
      <motion.div
        variants={fadeIn("down", 0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="text-center relative top-32"
      >
        <h1 className="h2 text-white capitalize">{title}</h1>
        <h1 className="text-white capitalize text-xl mb-8">{subtitle}</h1>
        <img src={modelImg} alt="" className="mx-auto" />
      </motion.div>
      <div className="relative top-44 max-w-[1440px] mx-auto">
        <TestimonialsCarousel slider={slider} />
      </div>
    </motion.section>
  );
};

export default Testemonials;
