import { reservationData } from "../data";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../variants";

const Reservations = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("10:00");
  return (
    <section id="reservations" className=" py-28 px-10 max-w-[1440px] mx-auto">
      {/* text */}
      <motion.div
        variants={fadeIn("down", 0.3, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <h1 className="h2 capitalize text-center">{title}</h1>
        <p className="text-center mb-8 ">{subtitle}</p>
        <img src={modelImg} alt="" className="mb-8 mx-auto" />
      </motion.div>
      {/* form */}
      <form
        action=""
        className="md:flex flex-wrap justify-between items-center"
      >
        <motion.div
          variants={fadeIn("right", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex gap-2 items-center font-semibold text-dark mb-4 lg">
            <FaCalendar />
            <h1>Choose Date</h1>
          </div>
          <div>
            <DatePicker
              className="input"
              selected={startDate}
              onChange={(data) => setStartDate(data)}
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex gap-2 items-center font-semibold text-dark my-4">
            <FaClock />
            <h1>Choose Time</h1>
          </div>
          <div>
            <input
              type="time"
              className="input"
              value={value}
              onChange={(val) => setValue(val)}
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex gap-2 items-center font-semibold text-dark my-4">
            <FaCalendar />
            <h1>How Many People</h1>
          </div>
          <div>
            <input type="number" className="input" />
          </div>
        </motion.div>
      </form>
      <motion.div
        variants={fadeIn("up", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <button className="btn capitalize mt-8 mx-auto">{btnText}</button>
      </motion.div>
    </section>
  );
};

export default Reservations;
