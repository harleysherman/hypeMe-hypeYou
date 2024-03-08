const db = require("../config/connection");
const { User, Community, Achievement, Comment } = require("../models");
const userSeeds = require("./userSeeds.json");
const achievementSeeds = require("./achievementSeeds.json");
const communitySeeds = require("./communitySeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    // await cleanDB("User", "users");
    // await cleanDB("Achievement", "achievements");
    // await cleanDB("Community", "communities");
    await User.deleteMany();
    await Achievement.deleteMany();
    await Community.deleteMany();

    const users = await User.create(userSeeds);
    const achievements = achievementSeeds.map((achievement) => ({
      ...achievement,
      user: users[Math.floor(Math.random() * (users.length - 1))]._id,
    }));

    const newAchievements = await Achievement.create(achievements);

    const filteredUsers = users.map((user) =>
      newAchievements
        .filter((achievement) => (achievement.user == user._id ? true : false))
        .map((achievement) => achievement._id)
    );

    console.log(filteredUsers);

    const noEmpties = filteredUsers.filter((arr) => arr.length);

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      await User.findOneAndUpdate(
        { _id: user._id },
        { achievements: noEmpties[i] },
        { new: true }
      );
    }

    console.log("noeEmpties ---------------> ", noEmpties);

    // await Community.create(communitySeeds);

    // console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
