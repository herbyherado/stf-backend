const Leaderboard = require('../models/leaderboard')

module.exports = {
  createLeader: function (req, res) {
    const leader = new Leaderboard()
        leader.name = req.body.name,
        leader.point = req.body.point,
        leader.save().then(data_leader => {
          console.log(data_leader);
          res.status(201).json({
            message: 'new leader was created',
            data_leader
          })
        }).catch(err => {
          res.status(500).json({
            message: 'error'
          })
        })
  },

  showLeader: function (req, res) {
    Leaderboard.find().exec().then(data_leader => {
      console.log(data_leader);
      res.status(201).json({
        message: 'Now Leaderboard',
        data: data_leader
      })
    }).catch(err => {
      res.status(500).json({
        message: 'something`s wrong'
      })
    })
  }


}
