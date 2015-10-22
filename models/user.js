var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync();

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String, index: { unique: true } },
    first_name: { type: String },
    last_name: { type: String },
    hashed_password: { type: String }
});

UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.hashed_password = bcrypt.hashSync(password, salt);
    })
    .get(function() { return this._password });

mongoose.model('User', UserSchema);