import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);         // ✅ specific
router.post("/send/:id", protectRoute, sendMessage);            // ✅ specific
router.get("/:id", protectRoute, getMessages);                  // ✅ least specific

export default router;
