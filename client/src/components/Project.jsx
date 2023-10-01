import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/variants";

import {
  supfly,
  dalle,
  homeAlong,
  progress,
  donationApp,
} from "../assets/project/index.js";

import { GoMarkGithub } from "react-icons/go";
import {
  IoRocketSharp,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io5";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const projects = [
  {
    name: "HomeAlong.",
    platform: "Web",
    img: homeAlong,
    src: "https://home-along.vercel.app/",
    github: "",
    tech: [
      <SiMongodb />,
      <SiExpress />,
      <IoLogoReact />,
      <IoLogoNodejs />,
      <SiTailwindcss />,
    ],
  },
  {
    name: "Dalle Clone",
    platform: "Web",
    img: dalle,
    src: "https://dalle-e-seven.vercel.app/",
    github: "https://github.com/Arvie420X/dalle-e",
    tech: [
      <SiMongodb />,
      <SiExpress />,
      <IoLogoReact />,
      <IoLogoNodejs />,
      <SiTailwindcss />,
    ],
  },
  // {
  //   name: 'Supfly',
  //   img: supfly,
  //   src: 'https://arvie420x.github.io/',
  //   github: 'https://github.com/Arvie420X/Arvie420X.github.io',
  //   tech: [<IoLogoHtml5 />, <IoLogoCss3 />, <SiJavascript />]
  // },
  {
    name: "Donation App",
    platform: "Mobile",
    img: donationApp,
    src: "https://dalle-e-seven.vercel.app/",
    github: "https://github.com/Arvie420X/dalle-e",
    tech: [<TbBrandReactNative />],
  },
  {
    name: "Loading...",
    platform: "",
    img: progress,
    src: "",
    github: "",
    tech: [
      <SiMongodb />,
      <SiExpress />,
      <IoLogoReact />,
      <IoLogoNodejs />,
      <SiTailwindcss />,
    ],
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="bg-black text-white min-h-screen h-auto py-10"
    >
      <div className="container mx-auto w-[82%]">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="front flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* Text */}
            <div className="flex justify-end">
              <div>
                <motion.h2
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-5xl md:text-8xl mb-2 md:mb-10"
                >
                  Projects
                </motion.h2>
                <motion.p
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-gradient text-2xl max-w-sm mb-16"
                >
                  Step into a realm of creativity and inspiration with my recent
                  projects.
                </motion.p>
                {/* button */}
                {/* <button className=''>
                    <div className="bg-gradient-x hover:bg-gradient-to-r from-white to-white inline-block rounded-lg p-px group cursor-pointer w-28 md:w-full">
                      <span className="text-white bg-black group-hover:text-black group-hover:bg-white text-xs md:text-base px-6 py-4 leading-4 font-medium tracking-wide inline-block rounded-lg whitespace-nowrap transition-color duration-200 w-full text-center">
                        View all
                      </span>
                    </div>
                  </button> */}
              </div>
            </div>

            {/* Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  className="w-full md:w-[300px] lg:w-[400px] h-[250px] group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
                  key={index}
                >
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="w-full h-full group-hover:scale-150 transition-all duration-500"
                    src={project.img}
                    alt={project.img}
                  />
                  {/* github live */}
                  <div className="flex absolute -bottom-full left-56 lg:left-80 gap-2 group-hover:bottom-52 transition-all duration-500 z-50">
                    <a href={project.github}>
                      <div className="text-xl">
                        <GoMarkGithub />
                      </div>
                    </a>
                    <a href={project.src}>
                      <div className="text-xl">
                        <IoRocketSharp />
                      </div>
                    </a>
                  </div>
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-16 lg:left-28 group-hover:bottom-32 transition-all duration-500 z-50">
                    <span className="text-xl">
                      {project.platform
                        ? `${project.platform} Development`
                        : null}
                    </span>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-16 lg:left-28 group-hover:bottom-20 transition-all duration-700 z-50">
                    <span className="text-gradient text-4xl">
                      {project.name}
                    </span>
                  </div>
                  {/* texh stack */}
                  <div className="absolute -bottom-full left-6 group-hover:bottom-5 transition-all duration-700 z-50 flex flex-row gap-x-2">
                    {project.tech.map((tech, index) => (
                      <span className="text-xl" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
