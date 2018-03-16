const FB = require('fb');
const User = require('../models/user.model');
const token = require('../middlewares/token.middleware');

module.exports = {
    signin: (req, res) => {
        if (!req.headers.access_token) res.status(404).send({ message: 'no access token' });
        
        FB.api('me', { fields: ['name', 'email'], access_token: req.headers.access_token }, (data) => {
            if (data.error) return res.status(500).send({ message: data.error });

            User.findOne({ email: data.email }, (err, user) => {
                if (data.error) return res.status(500).send({ message: data.error });
                
                if (!user) {
                    let new_user = new User({
                        name: data.name,
                        email: data.email,
                    });
                    
                    new_user.save(err => {
                        if (err) return res.status(500).send({ message: err });
                        return res.status(201).send({
                            message: 'signin success',
                            token: token.generate({ id: new_user._id, name: new_user.name, email: new_user.email })
                        });
                    })
                } else {
                    return res.status(200).send({
                        message: 'signin success',
                        token: token.generate({ id: user._id, name: user.name, email: user.email })
                    });
                }
            });
        });
    },
    getprofile: (req, res) => {
        User.findById(req.headers.id)
            .populate('File')
            .then(data => {
                res.status(200).
                    send(data)
            })
            .catch(err => {
                res.status(400).
                    send(err)
            })
    }
};