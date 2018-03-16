const Storage = require('@google-cloud/storage');

module.exports = {
    upload: (req, res, next) => {
        if (!req.files) return next('Tidak ada file yang di upload');

        const CLOUD_BUCKET = process.env.cloud_bucket;
        const storage = Storage({
            projectId: process.env.priject_id,
            keyFilename: process.env.key_filename
        });

        for (let index = 0; index < req.files.length; index++) {
            const gcsname = Date.now() + '.' + req.files[index].originalname;
            req.files[index].cloudStoragePublicUrl = `https://storage.googleapis.com/${CLOUD_BUCKET}/${gcsname}`;
            const file = storage.bucket(CLOUD_BUCKET).file(gcsname);
            const stream = file.createWriteStream ({
                metadata: {
                    contentType: req.files[index].mimetype
                }
            });
    
            stream.on('error', err => {
                req.files[index].cloudStorageError = err;
                next(err);
            });
            
            stream.on('finish', () => {
                file.makePublic();
            });
            
            stream.end(req.files[index].buffer);
        }
        
        next();
    },
}