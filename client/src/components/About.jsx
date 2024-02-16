// countup
// import CountUp from 'react-countup'
// intersection observer hook
// import { useInView } from 'react-intersection-observer';
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../utils/variants";

import aboutImg from "../assets/SpaceXCrew.png";

import Experience from "./Experience";

import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const backend =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_URL_LOCAL
      : import.meta.env.VITE_API_URL;

  const [profile, setProfile] = useState();
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const about = await axios.get(`${backend}/admin/get-about`);

        const imageData = `data:image/png;base64,${about.data[0].image.data}`;
        setProfile(imageData);
        setParagraph(about.data[0].paragraph);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchAbout();
  }, []);
  // const [ref, inView] = useInView({
  //   thereshold: 0.5,
  // });
  return (
    <div
      id="about"
      className="bg-black flex flex-col items-center justify-center min-h-screen h-auto"
    >
      <div className="w-full md:w-[82%] min-h-screen h-auto mt-32 md:mt-10">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-start md:justify-end items-center text-white text-5xl md:text-8xl ml-8 md:ml-0 mb-2"
        >
          <h1 className="front">About</h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row text-white mt-24 lg:mt-0 md:space-y-10">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex bg-contain bg-no-repeat h-[450px] md:h-[640px] lg:h-auto w-full lg:w-1/2 mix-blend-lighten"
          >
            <img
              className="h-[400px] md:h-[640px] lg:h-auto w-full p-2 object-cover mix-blend-lighten rounded-3xl"
              src={profile ? profile : aboutImg}
              alt="aboutImage"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center lg:pl-8 lg:w-1/2"
          >
            <h1 className="about front text-center text-gradient lg:text-left text-base px-7 md:text-xl">
              {paragraph === "" ? (
                <>
                  Welcome to my digital universe! I'm Arvidas, a career shifter,
                  navigating the endless possibilities of web and app
                  development. Ever since developing a strong interest in
                  technology through reading and staying updated on the latest
                  tech trends, I am now taking concrete steps towards a career
                  in the tech industry. To bring my dream of becoming a
                  developer to fruition, I pursue my goals through a combination
                  of a bootcamp and independent self-study. Although my stack is
                  centered around React and NodeJs, my tech journey embraces the
                  spirit of exploration. Delving deeper into Python, leveraging
                  its versatility, and learning about NestJS, since exploring
                  diverse technologies, remain thrilling chapters in my ongoing
                  tech adventure.
                </>
              ) : (
                paragraph
              )}
            </h1>
          </motion.div>
        </div>

        <div>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default About;
