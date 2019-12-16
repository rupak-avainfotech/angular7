
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Config = require('../Config');

let Admins = new Schema({
    name: { type: String, trim: true, index: true, default: null, sparse: true },
    email: { type: String, trim: true, unique: true, index: true },
    accessToken: { type: String, trim: true, index: true, sparse: true, default: null },
    password: { type: String, required: true },
    passwordResetToken: { type: String, trim: true, unique: true, sparse: true },
    registrationDate: { type: Date, default: Date.now, required: true },
    superAdmin: { type: Boolean },
    roles: { type: [Number] },
});

module.exports = mongoose.model('Admins', Admins);