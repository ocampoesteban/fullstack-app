import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import validator from 'validator';


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
      type: String,
      required: true,
      minLength: 7
  },
  email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: value => {
          if (!validator.isEmail(value)) {
              throw new Error({error: 'Invalid Email address'})
          }
      }
  }
} , {
    timestamps: true
});


// Hash the password before saving the user model
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
})

userSchema.pre('remove', async function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;