import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TesseractCanvas from "./canvas/Tesseract";
import { RiMoonClearFill, RiMoonClearLine } from "react-icons/ri";

const Hero = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleAudioEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState("");

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const hero = await axios.get("http://localhost:9000/admin/get-hero");
        setPosition(hero.data[0].position);
        setSkills(hero.data[0].skills);
        setResume(hero.data[0].resume);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHero();
  }, []);
  return (
    <div id="home" className="section heroContainer flex justify-center">
      <div className="lg:w-[82%] text-white space-y-3">
        <div className="container mx-auto h-28 w-[82%] lg:w-[100%] flex justify-end pt-6 mb-16">
          <audio
            ref={audioRef}
            src="/Coldplay - A Sky Full Of Stars (Official audio).mp3"
          />
          <button className="front text-3xl" onClick={togglePlayback}>
            {isPlaying ? (
              <RiMoonClearFill className="text-[#34B3F1]" />
            ) : (
              <RiMoonClearLine />
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="front w-full lg:w-3/5 p-5">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center"
            >
              <h1 className="text-gradient text-4xl md:text-7xl">
                Arvidas Lobaton
              </h1>
            </motion.div>

            {/* <div className="h-24 md:h-32 mt-6 md:mt-4 text-9xl ml-1">
                    <div className="h-[115px] text-[100px] cubespinner">
                        <div className="face1 text-gradient">React JavaScript</div>
                        <div className="face2 text-gradient">Node JavaScript</div>
                        <div className="face3 text-gradient">MongoDB</div>
                    </div>
                </div> */}

            <motion.div
              className="h-24 mt-6 md:mt-4 md:h-32 text-8xl md:text-9xl"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="text-6xl md:text-8xl container text-rotation cubespinner">
                {skills?.map((skill, index) => (
                  <div className={`face${index + 1} text-white`} key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-gradient text-3xl md:text-7xl"
              variants={fadeIn("right", 0.7)}
              initial="hidden"
              whileInView={"show"}
            >
              <h1 className="">{position}</h1>
            </motion.div>

            <motion.div
              className="flex md:flex-wrap w-full gap-0 md:gap-6 mt-8 justify-start"
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="w-full sm:w-auto">
                <a target className="mx-auto w-full " href={resume}>
                  <div className="bg-gradient-x hover:bg-gradient-to-r from-white to-white inline-block rounded-lg p-px group cursor-pointer w-28 md:w-full">
                    <span className="text-white bg-black group-hover:text-black group-hover:bg-white text-sm md:text-base px-6 py-4 leading-4 font-medium tracking-wide inline-block rounded-lg whitespace-nowrap transition-color duration-200 w-full text-center">
                      Resumé
                    </span>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-auto">
                <a
                  target
                  className="mx-auto w-full "
                  href="https://drive.google.com/drive/folders/1PWw_oMt5mGhpIEKbIBYDmO8_si8f0_id?usp=sharing"
                >
                  <div className="bg-gradient-x hover:bg-gradient-to-r from-white to-white inline-block rounded-lg p-px group cursor-pointer w-28 md:w-full">
                    <span className="text-white bg-black group-hover:text-black group-hover:bg-white text-sm md:text-base px-6 py-4 leading-4 font-medium tracking-wide inline-block rounded-lg whitespace-nowrap transition-color duration-200 w-full text-center">
                      Certificate
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            className="flex justify-center items-start w-full h-[230px] md:h-[350px] mt-10 lg:mt-0 lg:w-2/5"
          >
            <TesseractCanvas />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
