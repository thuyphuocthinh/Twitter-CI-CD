import express from "express";
import { proctedRoute } from "../middlewares/protectedRoute.middleware.js";
import * as notificationController from "../controllers/notification.controller.js";

const router = express.Router();

router.use(proctedRoute);
router.get("/", notificationController.getNotification);
router.delete("/delete/:id", notificationController.deleteNotification);
router.delete("/delete", notificationController.deleteNotifications);

export default router;
