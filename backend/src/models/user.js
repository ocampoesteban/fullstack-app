import mongoose from 'mongoose';
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

// It triggers when a user is deleted
// Remove message related to user.id
userSchema.pre('remove', async function(next) {
    this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;