const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadMiddleware = require('../middlewares/upload.middleware');
const uploadController = require('../controllers/file.controller');

const limit = multer({
    storage: multer.MemoryStorage,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})

router.post('/upload', limit.array('file'), uploadMiddleware.upload, uploadController.uplaod);

module.exports = router;
