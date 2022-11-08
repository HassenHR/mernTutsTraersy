const asyncHandler = require("express-async-handler");
// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get goals" });
});

// @desc Set goal
// @route Post /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Add text field" });
  }
  res.status(200).json({ msg: "Set new goal" });
});

// @desc Update goal
// @route Update /api/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update goal ${req.params.id}` });
});

// @desc delete goal
// @route delete /api/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
