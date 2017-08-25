var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Schema.ObjectId, ref: 'Role', required: true}
});

// Virtual for book's URL
UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);