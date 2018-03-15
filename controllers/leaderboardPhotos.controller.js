const leaderboardsPhotos = require('../models/leaderboardPhotos.model')

module.exports = {
    viewLeaderboardPhotos (req, res) {
        leaderboardsPhotos.find().then(leadeboardData => {
            res.status(200).json({
                message: 'Leaderboard photo data found!',
                leadeboardData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    // addLeaderboardPhotos (req, res) {
    //     leaderboardsPhotos.create({
    //         photoUrl: req.body.photoUrl,
    //         totalSmash: req.body.totalSmash
    //     }).then(leaderboardsPhotosData => {
    //         res.status(201).json({
    //             message: 'data added!',
    //             leaderboardsPhotosData
    //         })
    //     }).catch(err => {
    //         res.status(500).json({
    //             message: err
    //         })
    //     })
    // }
}