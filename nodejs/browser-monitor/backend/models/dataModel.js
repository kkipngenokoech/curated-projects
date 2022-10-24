const mongoose = require('mongoose');

const userData = new mongoose.Schema({
  userRef: { type: String, required: true, unique: true },
  data: [{
    day: String,
    logs: [{
      timestamp: String,
      urls: [],
      location: Object,
    }]
  }]
})

let UserData;

module.exports = UserData = mongoose.model('userData', userData)