import { footerData } from "../data";

import { motion } from "framer-motion";

import { newsletterData } from "../data";
import Socials from "./Socials";
import { fadeIn } from "../variants";

const Footer = () => {
  const { title, subtitle } = newsletterData;
  return (
    <motion.section
      id='footer'
      className=" lg:bg-footer bg-dark min-h-[700px] bg-cover  "
      variants={fadeIn("up", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
    >
      {/* newsletter */}
      <div className="lg:bg-newsletter h-[250px] xl:bg-auto bg-cover bg-none bg-center  bg-no-repeat  max-w-[1200px] mx-auto p-12 flex items-center ">
        <div className="flex lg:flex-row flex-col gap-6 justify-between items-center  w-full mt-20 lg:mt-0">
          <div>
            <h1 className="h2 text-white text-3xl capitalize">{title}</h1>
            <h1>{subtitle}</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              className="rounded-full px-20 py-3 lg:py-0 outline-none focus:ring-accent bg-transparent border border-grey focus:border-none focus:ring-2"
              placeholder="Subscribe To Our Email"
            />
            <button className="btn capitalize ">Subscribe Now</button>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex justify-between lg:items-center items-start gap-8 mt-16 px-6 lg:flex-row flex-col">
        {/* contact */}
        <div className=" mt-12 flex flex-col gap-2">
          <h1 className="capitalize text-3xl text-white">
            {footerData.contact.title}
          </h1>
          <h1 className="text-grey max-w-[200px] text-xl">
            {footerData.contact.address}
          </h1>
          <h1 className="text-grey text-xl">{footerData.contact.phone}</h1>
        </div>
        {/* working hours */}
        <div>
          <h1 className="capitalize text-3xl text-white mb-4">
            {footerData.hours.title}
          </h1>

          <div className="flex gap-10">
            {footerData.hours.program.map((plan) => {
              return (
                <div key={plan}>
                  <h1 className="capitalize font-semibold">{plan.days}</h1>
                  <h1 className="text-accent font-semibold text-xl">
                    {plan.hours}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-16">
        <Socials />
      </div>
    </motion.section>
  );
};

export default Footer;
