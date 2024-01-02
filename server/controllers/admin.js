import Hero from "../models/hero.js";
import About from "../models/about.js";
import Skills from "../models/skills.js";
import Experience from "../models/experience.js";
import Project from "../models/project.js";

import multer from "multer";

const imageStorage = multer.memoryStorage();
const imageUpload = multer({ storage: imageStorage });

const logoStorage = multer.memoryStorage();
const logoUpload = multer({ storage: logoStorage });

const skillsStorage = multer.memoryStorage();
const skillsUpload = multer({ storage: skillsStorage });

const projectStorage = multer.memoryStorage();
const projectUpload = multer({ storage: projectStorage });

// Create a new hero
export const hero = async (req, res) => {
  try {
    const newHero = await Hero.create(req.body);
    res.status(201).json(newHero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get hero
export const getHero = async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    console.error("Error getting heroes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// // Update hero
// export const updateHero = async (req, res) => {
//   try {

//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

// Create About
export const about = [
  imageUpload.single("image"),

  async (req, res, next) => {
    try {
      const about = await About.create({
        image: {
          data: req.file.buffer.toString("base64"),
          originalname: req.file.originalname,
        },
        paragraph: req.body.paragraph,
      });

      res.status(201).json(about);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
];

// Get About
export const getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (error) {
    console.error("Error getting heroes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create Experience
export const experience = [
  logoUpload.single("logo"),
  async (req, res) => {
    try {
      const skills = await Experience.create({
        title: req.body.title,
        institution: req.body.institution,
        logo: {
          data: req.file.buffer.toString("base64"),
          originalname: req.file.originalname,
        },
        iconBg: req.body.iconBg,
        date: req.body.date,
        points: req.body.points,
      });
      res.status(201).json(skills);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

export const getExperience = async (req, res) => {
  try {
    const exp = await Experience.find();
    res.json(exp);
  } catch (error) {
    console.error("Error getting heroes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create Skills
export const skills = [
  skillsUpload.single("icon"),
  async (req, res) => {
    try {
      const skills = await Skills.create({
        name: req.body.name,
        icon: {
          data: req.file.buffer.toString("base64"),
          originalname: req.file.originalname,
        },
      });
      res.status(201).json(skills);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

export const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (error) {
    console.error("Error getting heroes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create Project
export const project = [
  projectUpload.single("img"),
  async (req, res) => {
    try {
      const project = await Project.create({
        name: req.body.name,
        platform: req.body.platform,
        img: {
          data: req.file.buffer.toString("base64"),
          originalname: req.file.originalname,
        },
        src: req.body.src,
        github: req.body.github,
        tech: req.body.tech,
      });
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

export const getProject = async (req, res) => {
  try {
    const skills = await Project.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (error) {
    console.error("Error getting heroes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
