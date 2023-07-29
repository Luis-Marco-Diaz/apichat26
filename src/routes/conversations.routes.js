const { Router } = require("express");
const {
  createConversation,
  deleteConversation,
} = require("../controllers/conversations.controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

// validadores
router.post("/conversations", createConversation);

router.delete("/conversations/:id", deleteConversation);

module.exports = router;
