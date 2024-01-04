import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

import { technologies } from "../constants/index";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/variants";

const Tech = () => {
  const backend =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_URL_LOCAL
      : import.meta.env.VITE_API_URL;

  const [tech, setTech] = useState();

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const tools = await axios.get(`${backend}/admin/get-skills`);

        setTech(tools.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchExp();
  }, []);
  return (
    <div
      id="tech"
      className="bg-black flex flex-col items-center justify-center h-[600px] md:h-[800px] lg:h-screen"
    >
      <div className="front h-[300px] md:h-[500px] w-[82%]">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-start items-center text-white text-5xl md:text-8xl mb-2 md:mb-10"
        >
          <h1>Skills</h1>
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gradient text-2xl max-w-sm mb-16"
        >
          Embark on a tech stack-powered adventure, where limitless creativity
          awaits.
        </motion.p>

        <Marquee speed={55} style={{ width: "100%", height: "150px" }}>
          <div className="flex justify-center">
            {tech?.length > 0
              ? tech.map((technology, index) => (
                  <div
                    className="flex justify-center p-1 w-18 md:w-44"
                    key={index}
                  >
                    <img
                      src={`data:image/png;base64,${technology.icon.data}`}
                      alt={`${technology.name}`}
                      className="h-12 md:h-16"
                    />
                  </div>
                ))
              : technologies?.map((technology, index) => (
                  <div
                    className="flex justify-center p-1 w-18 md:w-44"
                    key={index}
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-12 md:h-16"
                    />
                  </div>
                ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Tech;
