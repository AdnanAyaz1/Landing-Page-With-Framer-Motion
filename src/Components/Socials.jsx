import { socialData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Socials = () => {
  return (
    <div className="lg:flex hidden gap-2 ">
      {socialData.map((item, index) => {
        const delay = index * 0.2;
        return (
          <motion.div
            key={item.icon}
            className="border-2 rounded-full p-2 hover:cursor-pointer group hover:border-accent"
            variants={fadeIn("down", delay, 0.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <item.icon className="group-hover:text-accent" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Socials;
