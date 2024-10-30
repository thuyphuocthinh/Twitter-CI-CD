import express from "express";
import * as authController from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/signup", authController.signUp);
router.get("/login", authController.logIn);
router.get("/logout", authController.logOut);
// router.get("/refreshToken", )

export default router;
