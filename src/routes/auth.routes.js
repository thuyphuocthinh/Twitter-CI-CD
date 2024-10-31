import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { proctedRoute } from "../middlewares/protectedRoute.middleware.js";
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.logIn);
router.post("/logout", authController.logOut);
router.get("/me", proctedRoute, authController.getMe);
// router.get("/refreshToken", )

export default router;
