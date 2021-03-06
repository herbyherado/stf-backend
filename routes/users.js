var express = require('express');
var router = express.Router();
const multer = require('multer');
const {createLeader,showLeader} = require('../controllers/leaderboard');
const uploadMiddleware = require('../middlewares/upload.middleware');
const tokenMiddleware = require('../middlewares/token.middleware');
const uploadController = require('../controllers/file.controller');
const userController = require('../controllers/user.controller');
const leaderboardPhoto = require('../routes/leaderboardPhotos.route')

const limit = multer({
    storage: multer.MemoryStorage,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})

router.post('/players-point', createLeader);
router.get('/players-point', showLeader);
router.post('/signin', userController.signin);
router.post('/upload', tokenMiddleware.verify, limit.array('file'), uploadMiddleware.upload, uploadController.uplaod);
router.get('/getprofile', tokenMiddleware.verify, userController.getprofile);

router.get('/file', uploadController.findAll);

router.use('/', leaderboardPhoto)


module.exports = router;
