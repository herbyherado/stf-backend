var express = require('express');
var router = express.Router();
const {createLeader,showLeader} = require('../controllers/leaderboard');

router.post('/players-point', createLeader);
router.get('/players-point', showLeader);



module.exports = router;
