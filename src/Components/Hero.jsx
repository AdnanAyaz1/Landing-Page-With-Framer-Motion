import { heroData } from "../data.js";

import Header from "./Header.jsx";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../variants.js";

const Hero = () => {
  const { pretitle, subtitle, title, btnText } = heroData;

  return (
    <div className="bg-hero bg-cover min-h-[980px] bg-right ">
      {/* header */}
      <Header />
      {/* text */}
      <motion.div
        variants={staggerContainer(0.3,1)}
        initial="hidden"
        whileInView={"show"}
        className="flex items-center justify-center min-h-screen container mx-auto flex-col"
      >
        <motion.h1
          variants={fadeIn("down", 0.2,1.1)}
          className="text-white text-[24px] lg:text-[28px] font-primary lg-font-medium mb-1"
        >
          {pretitle}
        </motion.h1>
        <motion.h1 variants={fadeIn("down", 0.3,1.1)} className="h1 mb-5">
          {title}
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.4,1.1)}
          className="text-white mb-8 max-w-[540px]"
        >
          {subtitle}
        </motion.p>
        <motion.div variants={fadeIn("down", 0.5,1.1)}>
          <button className="btn">{btnText}</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
