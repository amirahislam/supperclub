const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const patronSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  userType: { type: String, required: true },
  password: { type: String, required: true },
  img: { type: String },
  date: { type: Date, default: Date.now },
  following: []
});

patronSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
};

patronSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
});

const Patron = mongoose.model("Patron", patronSchema);

module.exports = Patron;