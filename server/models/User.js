const { Schema, model } = require("mongoose");
const { Achievement } = require("./Achievement");
const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const commentSchema = require('./Comment.js');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 1,
      maxLength: 280,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: [validateEmail, `Please fill a valid email address`],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        `Please fill a valid email address`,
      ],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 16,
    },
    achievements: [
      {
        type: Schema.Types.ObjectId,
        ref: "Achievement",
      },
    ],
    communities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Community",
      },
    ],
    comments: [commentSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", userSchema);

module.exports = User;
