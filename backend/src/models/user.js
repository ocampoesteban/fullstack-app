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
  },
  tokens: [{
      token: {
          type: String,
          required: true
      }
  }]
} , {
    timestamps: true
});

// Generate an auth token for the user
userSchema.methods.generateAuthToken = async (user)  => {
    const localUser = user;
    const token = jsonwebtoken.sign({_id: localUser._id}, process.env.JWT_KEY);
    localUser.tokens = localUser.tokens.concat({token});
    await localUser.save();
    return token;
}

// trying to hash the password before saving the object
userSchema.methods.findByCredentials = async function(email, password) {
  console.log(',,m,m '+email +' - '+ password)
    // Search for a user by email and password.
    const user = await User.findOne({ email} );
    console.log('ds;l,sdkladsl;kads '+user);
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    return user;
}

// Hash the password before saving the user model
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

userSchema.pre('remove', async function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;