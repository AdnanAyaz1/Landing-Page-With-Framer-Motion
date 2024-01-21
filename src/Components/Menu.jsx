import { menuData } from "../data";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";

const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;
  return (
    <section className="min-h-[780px] mt-[-130px]" id='menu'>
      <div className="bg-menu h-[780px] absolute w-full">
        {/* text */}
        <div className="relative top-72 lg:top-52">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="container mx-auto flex flex-col items-center justify-center text-center max-w-[450px]"
          >
            <motion.h1
              variants={fadeIn("down", 0.2, 1.1)}
              initial="hidden"
              whileInView={"show"}
              className="h2 capitalize text-white "
            >
              {title}
            </motion.h1>
            <motion.h1
              variants={fadeIn("down", 0.3, 1.1)}
              initial="hidden"
              whileInView={"show"}
              className="text-white mb-6"
            >
              {subtitle}
            </motion.h1>
            <motion.div
              variants={fadeIn("down", 0.4, 1.1)}
              initial="hidden"
              whileInView={"show"}
            >
              <img src={modelImg} alt="" />
            </motion.div>
          </motion.div>
        </div>
        {/* gallary */}
      
        
      </div>
    </section>
  );
};

export default Menu;
