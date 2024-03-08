const { Schema, model } = require('mongoose');

const achievementSchema = new Schema({
  titleAchievement: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 1,
    maxLength: 280,
  },
  body: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (date) {
      console.log(date);
      return `${new Date(date).getDate()}/${new Date(date).getMonth()+1}/${new Date(date).getFullYear()}`;
    },
  },
  userID: [
    {
      type: Schema.Types.ObjectId,
      ref: '_id',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const Achievement = model('Achievement', achievementSchema);

module.exports = Achievement;
