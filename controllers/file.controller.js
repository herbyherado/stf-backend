const File = require('../models/file.model');

module.exports = {
    uplaod: (req, res) => {
        req.files.forEach(file => {
            let new_file = new File({
                name: file.originalname,
                url: file.cloudStoragePublicUrl,
                like: 0
            });

            new_file.save(err => {
                if (err) return res.status(500).send({ message: err });
            });
        });

        return res.status(201).send({
            message: 'upload success',
            url: req.files.map(file => {
                return file.cloudStoragePublicUrl
            })
        });
    }
};