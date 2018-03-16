var express = require('express');
var router = express.Router();
const {createLeader,showLeader} = require('../controllers/leaderboard');
const { signin } = require('../controllers/user.controller');

router.post('/players-point', createLeader);
router.get('/players-point', showLeader);
router.post('/signin', signin);



module.exports = router;
