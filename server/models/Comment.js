// SCHEMA ONLY
const { Schema, Types } = require("mongoose");

// Schema for what makes up a comment
const commentSchema = new Schema(
  {
    commentBody: { 
      type: String, 
      required: true, 
      maximum: 280 
    },
    username: {
        type: String
    },
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
