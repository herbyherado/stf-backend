const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
  name: String,
  point: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
module.exports = Leaderboard
