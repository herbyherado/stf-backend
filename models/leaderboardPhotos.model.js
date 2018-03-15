const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leaderboardPhotosSchema = new Schema({
    uploaderName: { type: Schema.Types.ObjectId, ref: 'user'},
    photoUrl: { type: Schema.Types.ObjectId, ref: 'player'},
    totalSmash: { type: Schema.Types.ObjectId, ref: 'player'}
})

module.exports = mongoose.model('leaderboardPhotos', leaderboardPhotosSchema)