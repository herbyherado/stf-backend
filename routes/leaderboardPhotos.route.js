var express = require('express');
var router = express.Router();
const leaderboard = require('../controllers/leaderboardPhotos.controller')

router
    .get('/photos', leaderboard.viewLeaderboardPhotos)
    // .post('/photos', leaderboard.addLeaderboardPhotos)

module.exports = router;
