const express = require("express");
const router = express.Router();

const routes_guilherme = require("./routes-guilherme");
const routes_jh = require("./routes-jh");

router.use("/", routes_guilherme);
router.use("/", routes_jh);

module.exports = router;
