const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  organization_name: { type: String, required: true},
  uuid: { type: String, required: true}
})

let Admin;

module.exports = Admin = mongoose.model('admin', adminSchema)