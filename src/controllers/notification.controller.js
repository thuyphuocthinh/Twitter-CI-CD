import mongoose from "mongoose";
import Notification from "../models/notification.model.js";

export const getNotification = async (req, res) => {
  try {
    const userId = req.user._id;

    await Notification.updateMany(
      { to: userId },
      {
        read: true,
      }
    );

    const notifications = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImage",
    });

    return res.status(200).json(notifications);
  } catch (error) {
    console.log(">>> Error in getUserProfile: ", error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    await Notification.deleteMany({ to: userId });
    return res
      .status(200)
      .json({ message: "Notification deleted successfully" });
  } catch (error) {
    console.log(">>> Error in getUserProfile: ", error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const userId = req.user._id;
    const notificationId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(notificationId)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }

    if (notification.to.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ error: "You are not allowed to delete this notification" });
    }

    await Notification.findByIdAndDelete(notificationId);

    return res
      .status(200)
      .json({ message: "Notification deleted successfully" });
  } catch (error) {
    console.log(">>> Error in getUserProfile: ", error.message);
    return res.status(500).json({ error: error.message });
  }
};
