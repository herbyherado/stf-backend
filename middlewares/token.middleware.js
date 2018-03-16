const jwt = require('jsonwebtoken');

module.exports = {
    generate: (data) => {
        return jwt.sign(data, process.env.SECRET);
    },

    verify: (req, res, next) => {
        if (!req.headers.token) return res.status(401).send({ message: 'User does not have the necessary credentials.'});
        
        try {
            let decode = jwt.verify(req.headers.token, process.env.SECRET);
            req.headers.id = decode.id;
            req.headers.name = decode.name;
            req.headers.email = decode.email;
            console.log('testing123')
            next();
        } catch (error) {
            return res.status(403).send({ message: 'The user might not have the necessary permissions for a resource'})
        }
    }
}