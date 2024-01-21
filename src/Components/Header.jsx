import { useState, useEffect } from "react";

import Nav from "./Nav";
import Socials from "./Socials";

import logoWhite from "../assets/img/header/logo-white.png";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../variants";

const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

const newVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  show: {
    clipPath: "circle(130% at 50% 0)",
    opacity: 1,
    transition: {
      type: "spring",
      duration:1.5
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <motion.div
      className="w-full py-4 fixed z-[50]"
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "show" : ""}
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto text-white flex justify-between items-center relative px-4 "
      >
        {/* menu */}
        <motion.div
          variants={fadeIn("down", 0.2, 1.4)}
          initial="hidden"
          whileInView={"show"}
          onClick={() => setNav(!nav)}
          className={`flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none border-2 rounded-full hover:cursor-pointer ${
            nav ? "gap-y-0" : "gap-y-2"
          }`}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
            className="bg-white h-[2px] w-full"
          ></motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: nav ? 45 : 0 }}
            className="bg-white h-[2px] w-full"
          ></motion.div>
        </motion.div>
        {/* logo */}
        <motion.div
          variants={fadeIn("down", 0.3, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <img
            src={logoWhite}
            className={`${
              isActive ? "h-[90px] w-[90px]" : "h-[107px] w-[107px]"
            }`}
            alt=""
          />
        </motion.div>
        {/* socials */}
        <div>
          <Socials />
        </div>
        {/* nav */}
        <motion.div
          variants={newVariants}
          initial="hidden"
          animate={nav ? "show" : ""}
          className="absolute bg-accent lg:w-[310px] w-[280px] right-0 lg:left-0 h-[50vh] top-[120px] z-[50] rounded-lg p-6"
        >
          <Nav setNav={setNav} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
