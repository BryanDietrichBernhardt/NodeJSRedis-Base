const router = require("express").Router();

// routers
router.route("/").get(async (req, res) => {
  return res.status(200).json({ msg: "All done! :D" });
});

module.exports = router;
