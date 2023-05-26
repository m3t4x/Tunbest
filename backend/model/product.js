var mongoose = require('mongoose');
var Schema = mongoose.Schema;

movieSchema = new Schema( {
	name: String,
	desc: String,
	image: String,
	user_id: Schema.ObjectId,
	is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }
}),
movie = mongoose.model('movie', movieSchema);

module.exports = movie;