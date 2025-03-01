import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/** Users */
router.get("/", memberController.goHome);

router
.get("/login", memberController.getLogin)
.post("/login", memberController.processLogin);

router.get("/signup", memberController.getSignup)
.post("/signup", memberController.processSignup);

/** Books */

export default router;
