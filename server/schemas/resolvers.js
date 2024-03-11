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
      return await Achievement.find({}).populate("comments").populate('user')
    },
    // comments: async () => {
    //   return await Comment.find({});
    // },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate("achievements");
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
    addCommunity: async (parent, { communityName }, context) => {
      if (context.user) {
        const addedCommunity = await Community.create({
          communityName,
        });

        return addedCommunity;
      }
      throw AuthenticationError;
    },
    addAchievement: async (_, { userID, titleAchievement }, context) => {
      if (context.user) {
        const addedAchievement = await Achievement.create({
          titleAchievement,
          user: context.user._id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { achievements: addedAchievement._id } }
        );
        return addedAchievement;
      }
      throw AuthenticationError;
    },
    addComment: async (_, { achievementId, commentBody }, context) => {
      if (context.user) {
        return Achievement.findOneAndUpdate(
          { _id: achievementId },
          {
            $addToSet: {
              comments: commentBody,
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
