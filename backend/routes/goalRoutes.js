const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Get goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ msg: "Set new goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ msg: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ msg: `Delete goal ${req.params.id}` });
});

module.exports = router;
