import { navData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Nav = ({setNav}) => {
  return (
    <div className="flex flex-col gap-6 text-center">
      {navData.map((nav, index) => {
        const delay = index * 0.1;
        return (
          <motion.a
           href={nav.href}
            className="text-2xl font-primary capitalize hover:cursor-pointer hover:text-grey "
            key={nav.name}
            variants={fadeIn("right", delay, 0.3)}
            initial="hidden"
            whileInView={"show"}
            onClick={()=>setNav(false)}
          >
            {nav.name}
          </motion.a>
          
        );
      })}
    </div>
  );
};

export default Nav;
