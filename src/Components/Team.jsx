import { teamData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Team = () => {
  const {
    pretitle,
    title,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    chefImg,
  } = teamData;
  return (
    <section className="  min-h-[720px] max-w-[1440px] mx-auto flex lg:flex-row flex-col py-16  px-6 gap-8 " id='team'>
      {/* text */}
      <motion.div
        className=" text-center md:text-left"
        variants={fadeIn("down", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <div>
          <h1 className="pretitle text-2xl font-semibold">{pretitle}</h1>
          <h1 className="h2 capitalize">{title}</h1>
          <p className="max-w-[650px]">{sub1}</p>
        </div>
        <div className="mt-16">
          <p className="mb-4 max-w-[650px]"> {sub2}</p>
          <h1 className="capitalize text-2xl text-accent font-bold">{name}</h1>
          <h1 className="capitalize mb-6">{occupation}</h1>
          <img src={signatureImg} alt="" className="mx-auto mb-8 md:mx-0" />
        </div>
      </motion.div>
      {/* image */}
      <motion.div
        variants={fadeIn("up", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="xl:ml-[200px]"
      >
        <img src={chefImg} alt="" />
      </motion.div>
    </section>
  );
};

export default Team;
