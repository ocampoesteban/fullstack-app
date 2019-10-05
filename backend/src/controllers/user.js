import models from '../models';
import mongoose from 'mongoose';
import config from "../../config/config";

const UserController = {};

/**
 * Get users.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
UserController.getUsers = async (req, res) => {
	try {
		const users = await models.User.find();
		res.status(200).send({ 
		  statusCode:200,
		  message: 'Users ' + config.messages.found,
		  users: users
		});
	}catch (e) {
		res.status(500).send({ 
		  statusCode:500,
		  message: config.messages.ISE,
      users: users
		});
	}
}


/**
 * Add user
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
UserController.addUser =  async (req, res) => {
  try {
    const user = await models.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    });
    const token = await user.generateAuthToken(user);
    if (user) {
      res.status(201).send({
        statusCode:201,
        token: token,
        message: 'User ' + config.messages.success
      })
    }
  }catch (e) {
    console.log('ISE '+ e);
    res.status(500).send({
      statusCode:500, 
      message: config.messages.ISE
    })
  }
}

/**
 * Get user by id
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
UserController.getUserById = async (req, res) => {
  try {
    const user = await models.User.findById(req.params.userId);
    if (user) { 
      res.status(200).send({ 
        statusCode:200,
        message: 'User ' + config.messages.found,
        user: user
      });
    }
  }catch (e) {
	res.status(404).send({
	    statusCode:404, 
    	message: 'User ' + config.messages.missing
  	})
  }
}

/**
 * Update user by id
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
UserController.updateUserById =  async (req, res) => {
  try {
    const user = await models.User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },)
    if (user) {
      res.status(200).send({
        statusCode:200, 
        message: 'User ' + config.messages.updated
      })
    }
  }catch (e) {
    res.status(404).send({
      statusCode:404, 
      	message: 'User ' + config.messages.missing
    });
  }
}

/**
 * Delete user by id
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
UserController.deleteUserById = async (req, res) => {
  try {
    const user = await models.User.findById(req.params.userId);
    let result = null;
    if (user) {
      	result = await user.remove();
    }
    if (result) {
		res.status(200).send({
			statusCode:200, 
			message: 'User ' + config.messages.deleted
		})
    }
  }catch (e) {
  	res.status(404).send({
    	statusCode:404, 
      	message: 'User ' + config.messages.missing
    });
  }
}

/**
 * Login
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
UserController.login = async(req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body
    console.log('Soydhjaskdhsak '+email +' - '+ password)
    const user = await User.findByCredentials(email, password)
    console.log('Soydhjaskdhsak '+email +' - '+ password)
    if (!user) {
        return res.status(401).send({error: 'Login failed! Check authentication credentials'})
    }
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (error) {
    console.log(error)
      res.status(400).send(error)
  }
}





export default UserController;
