const { Schema, model } = require('mongoose');

const communitySchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  category: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 1,
    maxLength: 16,
  }
});

const Community = model('Community', communitySchema);

module.exports = Community;
