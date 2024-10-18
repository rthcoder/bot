const { Router } = require("express");
const bot = require("../commands/main.js");

const router = Router();

router.post('/api/bot', bot.BOT);

module.exports = router;
