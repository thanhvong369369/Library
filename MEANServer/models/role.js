var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoleSchema = Schema({
    name: {type: String, required: true},
    description: {type: String}
});

// Virtual for book's URL
RoleSchema
.virtual('url')
.get(function () {
  return '/role/' + this._id;
});

//Export model
module.exports = mongoose.model('Role', RoleSchema);