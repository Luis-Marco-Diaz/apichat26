const { Router } = require("express");
const {
  createConversation,
} = require("../controllers/conversations.controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

// validadores
router.post("/conversations", authenticate, createConversation);

module.exports = router;
