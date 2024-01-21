import { menuData } from "../data";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";


const Gallery = () => {
    const { title, subtitle, modelImg, menuItems, btnText } = menuData;
  return (
    <motion.div
    className=" mx-auto container z-[30] mt-[-250px] relative"
    variants={fadeIn("up", 0.2, 1.2)}
    initial="hidden"
    whileInView={"show"}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {menuItems.map((item, index) => {
        const { image, name, price, description } = item;
        return (
          <div key={index}>
            <div
              className={`flex flex-row ${
                index > 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* image */}
              <div className={`lg:w-[400px]  `}>
                <img src={image} alt="" className="min-h-[300px] object-cover"/>
              </div>
              {/* text */}
              <div className="bg-[#fff3e4] flex flex-col justify-center p-6 lg:w-[385px]">
                <div className="text-xl font-semibold text-dark xl:text-2xl">
                  {name}
                </div>
                <div className="my-1 lg:my-6 text-[20px] lg:text-[40px] text-accent font-semibold">
                  {price}
                </div>
                <div className="">{description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <button className="btn capitalize my-16 mx-auto">{btnText}</button>
  </motion.div>
  )
}

export default Gallery