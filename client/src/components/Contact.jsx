import { useState } from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/variants";
import SatelliteCanvas from "./canvas/Satellite";

const Contact = () => {
  const backend = import.meta.env.VITE_API_URL;
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation
    let isValidForm = true;

    if (
      !formDetails.firstName ||
      !formDetails.lastName ||
      !formDetails.email ||
      !formDetails.phone ||
      !formDetails.message
    ) {
      setStatus({
        success: false,
        message: "Please fill in all fields with valid data.",
      });
      isValidForm = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(formDetails.email);

    if (!isValidEmail) {
      setStatus({
        success: false,
        message: "Invalid email",
      });
      isValidForm = false;
    }

    if (!isValidForm) {
      return; // Don't proceed with form submission
    }

    setButtonText("Sending...");
    try {
      let response = await fetch(`${backend}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");

      let result = await response.json();

      if (result.code === 200) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: result.status,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-20 h-screen bg-black flex items-center" id="contact">
      <div className="front container mx-auto w-[82%]">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center relative"
          >
            <div className="absolute -z-10 h-[200px] top-0 right-0">
              <SatelliteCanvas />
            </div>
            <div>
              <h4 className="text-gradient-contact text-sm md:text-xl uppercase font-medium mb-2">
                Get in touch with me
              </h4>
              <h2 className="text-white text-[50px] md:text-[70px] lg:text-[90px] leading-none mb-12">
                Let&apos;s make something amazing!
              </h2>
            </div>
          </motion.div>
          {/* form  */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-md  flex flex-col gap-y-6 p-6 items-start text-white mb-28 md:mb-16"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              value={formDetails.email}
              placeholder="Your email"
              onChange={(e) => onFormUpdate("email", e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="tel"
              value={formDetails.phone}
              placeholder="Contact Number"
              onChange={(e) => onFormUpdate("phone", e.target.value)}
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              value={formDetails.message}
              placeholder="Your message"
              onChange={(e) => onFormUpdate("message", e.target.value)}
            ></textarea>
            <div className="flex justify-start items-center gap-4">
              <button type="submit">
                <div className="bg-gradient-x hover:bg-gradient-to-r from-white to-white inline-block rounded-lg p-px group cursor-pointer w-28 md:w-full">
                  <span className="text-white bg-black group-hover:text-black group-hover:bg-white text-xs md:text-base px-6 py-4 leading-4 font-medium tracking-wide inline-block rounded-lg whitespace-nowrap transition-color duration-200 w-full text-center">
                    {buttonText}
                  </span>
                </div>
              </button>
              <div>
                {status.message && (
                  <p
                    className={
                      status.success === false
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
