import express from "express";
import * as usersController from "../controllers/users.controller.js";
import { proctedRoute } from "../middlewares/protectedRoute.middleware.js";
const router = express.Router();

router.use(proctedRoute);

router.get("/profile/:username", usersController.getProfile);
router.get("/suggested", usersController.getSuggestedUsers);
router.post("/follow/:id", usersController.followUnfollowUser);
router.patch("/update", usersController.updateUser);

export default router;
