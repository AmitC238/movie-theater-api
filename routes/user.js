const express = require("express");
const router = express.Router();
const { User } = require("../models/index");
// const { Show } = require("../models/index");

// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  console.log("Before findAll");
  const users = await User.findAll();
  console.log("After findAll");
  console.log("Users:", users);
  res.json(users);
});

// router.get("/:id", async (req, res) => {
//   const userId = req.params.id;
//   const user = await User.findByPk(userId);

//   res.json(user);
// });

// router.get("/:id/watched", async (req, res) => {
//   const userId = req.params.id;
//   const user = await User.findByPk(userId);

//   const watchedShows = await user.getShows();
//   res.json(watchedShows);
// });

// router.put("/:id/watched", async (req, res) => {
//   const userId = req.params.id;
//   const user = await User.findByPk(userId);

//   if (!user) {
//     res.status(404).json({ error: "User not found" });
//     return;
//   }

//   const { showId } = req.body;

//   if (!showId) {
//     res.status(400).json({ error: "Show ID is required in the request body" });
//     return;
//   }
//   const hasWatched = await user.hasShow(showId);

//   if (!hasWatched) {
//     // If the show is not in the user's watched list, add it
//     await user.addShow(showId);
//   }

//   // Get the updated watched shows list
//   const updatedWatchedShows = await user.getShows();
//   res.json(updatedWatchedShows);
// });

module.exports = router;
