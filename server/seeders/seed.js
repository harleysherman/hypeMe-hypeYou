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

    // const achievements = achievementSeeds.map(async (achievement) => {
    //   return await Achievement.create({
    //     ...achievement,
    //     user: users[Math.floor(Math.random() * (users.length - 1))]._id,
    //   });
    // });
    const achievements = achievementSeeds.map((achievement) => ({
      ...achievement, 
      user: users[Math.floor(Math.random() * (users.length - 1))]._id
    }))
    // console.log("achievements ", achievements);
    const newAchievements = await Achievement.create(achievements);
    // console.log(newAchievements);

    users.map(async (user) => {
      // console.log("filter ", newAchievements
      //   .filter((achievement) => {
      //     // console.log("This is is achievement in filter ", achievement);
      //     // console.log("user ", user);
      //     return achievement.user == user._id ? true : false
      //   })
      //   .map((achievement) => {
      //     // console.log("This is is achievement in map ", achievement);
      //     return achievement._id;
      //   })
        // );
        const temp = newAchievements
        .filter((achievement) => {
          // console.log("This is is achievement in filter ", achievement);
          // console.log("user ", user);
          return achievement.user == user._id ? true : false
        })
        .map((achievement) => {
          // console.log("This is is achievement in map ", achievement);
          return achievement._id;
        });
        if (temp) {
          return await User.findOneAndUpdate({
            _id: user._id,
          },
          {
            achievements: temp,
          },
          {
            new: true
          })
        }
      // return await User.findOneAndUpdate(
      //   {
      //     _id: user._id,
      //   },
      //   {
      //     achievements: newAchievements
      //       .filter(async (achievement) => {
      //         // console.log("This is is achievement in filter ", achievement);
      //         return await achievement.user == user._id;
      //       })
      //       .map((achievement) => {
      //         // console.log("This is is achievement in map ", achievement);
      //         return achievement._id;
      //       }),
      //   },
      //   {
      //     new: true,
      //   }
      // );
    });

    // await Community.create(communitySeeds);

    // console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
