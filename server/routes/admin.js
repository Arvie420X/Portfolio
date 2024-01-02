import express from "express";

const router = express.Router();

import * as admin from "../controllers/admin.js";
// import { requireSignIn } from "../middlewares/auth.js";

// get post put delete
router.post("/hero", admin.hero);
router.get("/get-hero", admin.getHero);
// router.patch("/hero", admin.hero);

router.post("/about", admin.about);
router.get("/get-about", admin.getAbout);

router.post("/experience", admin.experience);
router.get("/get-experience", admin.getExperience);

router.post("/skills", admin.skills);
router.get("/get-skills", admin.getSkills);

router.post("/project", admin.project);
router.get("/get-project", admin.getProject);

export default router;
