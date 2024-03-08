// SCHEMA ONLY
const { Schema, Types } = require("mongoose");

// Schema for what makes up a comment
const commentSchema = new Schema(
  {
    achievementID: { 
      type: Schema.Types.ObjectId, 
      default: new Types.ObjectId() 
    },
    commentBody: { 
      type: String, 
      required: true, 
      maximum: 280 
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
      get: function (date) {
        console.log(date);
        return `${new Date(date).getDate()}/${
          new Date(date).getMonth() + 1
        }/${new Date(date).getFullYear()}`;
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = commentSchema;
