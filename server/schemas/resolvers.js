const { User, Achievement, Community, Comment } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("achievements");
      // community?
    },
    communities: async () => {
      return await Community.find({}).populate("users");
      // populate achievements?
    },
    achievements: async () => {
      return await Achievement.find({}).populate("comments").populate("user");
    },
    // comments: async () => {
    //   return await Comment.find({});
    // },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate("achievements");
    },
    me: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("achievements");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addCommunity: async (parent, { category }, context) => {
      if (!context.user) {
        const addedCommunity = await Community.create({
          category,
        });

        return addedCommunity;
      }
      throw AuthenticationError;
    },
    addAchievement: async (_, { titleAchievement, body }, context) => {
      // if (context.user) {
        const addedAchievement = await Achievement.create({
          titleAchievement,
          user: context.user._id,
          body,
        });
        await User.findOneAndUpdate(
          // { _id: context.user._id },
          {_id: "65ef5bca1cfc09f7bd371739" },
          { $addToSet: { achievements: addedAchievement._id } }
        );
        return addedAchievement;
      // }
      // throw AuthenticationError;
    },
    addComment: async (_, { achievementId, commentBody }, context) => {
      if (context.user) {
        return Achievement.findOneAndUpdate(
          { _id: achievementId },
          {
            $addToSet: {
              comment: commentBody,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeAchievement: async (_, { achievementId }, context) => {
      if (context.user) {
        const Achievement = Achievement.findOneAndDelete({
          _id: achievementId,
        });
        await User.findOneAndUpdate(
          {
            id: context.user._id,
          },
          {
            $pull: { achievements: achievementId },
          }
        );
        return Achievement;
      }
      throw AuthenticationError;
    },
    removeComment: async (_, { commentId, achievementId }, context) => {
      if (context.user) {
        return Achievement.findOneAndUpdate(
          { _id: achievementId },
          {
            $pull: {
              comment: {
                _id: commentId,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    addProfilePic: async (_, { profilePic }, context) => {
      //if (context.user) {
        return User.findOneAndUpdate(
          //{ _id: context.user._id },
          { _id: "65ef5bca1cfc09f7bd371734" },
          { profilePic },
          { new: true }
        );
      //}
      //throw AuthenticationError;
    },
    addAchievementPhoto: async (_, { achievementId, url }, context) => {
      //if (context.user) {
        return Achievement.findOneAndUpdate(
          { _id: achievementId },
          { url },
          { new: true }
        );
      //}
      //throw AuthenticationError;
    },
  },
};

// const { Profile } = require('../models');

// const resolvers = {
//   Query: {
//     profiles: async () => {
//       return Profile.find();
//     },

//     profile: async (parent, { profileId }) => {
//       return Profile.findOne({ _id: profileId });
//     },
//   },

//   Mutation: {
//     addProfile: async (parent, { name }) => {
//       return Profile.create({ name });
//     },
//     addSkill: async (parent, { profileId, skill }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         {
//           $addToSet: { skills: skill },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeProfile: async (parent, { profileId }) => {
//       return Profile.findOneAndDelete({ _id: profileId });
//     },
//     removeSkill: async (parent, { profileId, skill }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         { $pull: { skills: skill } },
//         { new: true }
//       );
//     },
//   },
// };

module.exports = resolvers;
