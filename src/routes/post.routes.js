import express from "express";
import * as postController from "../controllers/post.controller.js";
import { proctedRoute } from "../middlewares/protectedRoute.middleware.js";
const router = express.Router();

router.use(proctedRoute);

router.get("/all", postController.getAll);
router.get("/likes", postController.getLikedPosts);
router.get("/following", postController.getFollowingPosts);
router.get("/user/:username", postController.getUserPosts);
router.post("/create", postController.create);
router.post("/like/:id", postController.like);
router.post("/comment/:id", postController.comment);
router.delete("/delete/:id", postController.deletePost);

export default router;
