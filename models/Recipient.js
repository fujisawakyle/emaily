const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

//export to make a subdocument relationship with Survey
module.exports = recipientSchema;
