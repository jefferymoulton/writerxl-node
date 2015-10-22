var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync();

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email:              { type: String, index: { unique: true } },
    first_name:         String,
    last_name:          String,
    hashed_password:    String,
    active:             Boolean,
    date_created:       Date
});

UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.hashed_password = bcrypt.hashSync(password, salt);
    })
    .get(function() { return this._password });

module.exports = User = mongoose.model('User', UserSchema);