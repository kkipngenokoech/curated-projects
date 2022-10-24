const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  uuid: { type: String },
  organization_id: { type: String }
})

let User;

module.exports = User = mongoose.model('user', userSchema)