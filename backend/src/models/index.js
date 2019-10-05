import mongoose from 'mongoose';
import config from "../../config/config";

import User from './user';
import Message from './message';

const connectDb = () => {
  return mongoose.connect(config.DBUrl, { 
  	useNewUrlParser: true,
	useCreateIndex: true,
  	useFindAndModify: false 
  });
};

const models = { User, Message };

export { connectDb };

export default models;
