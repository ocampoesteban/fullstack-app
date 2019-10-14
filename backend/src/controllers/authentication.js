import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from "../../config/config";
import models from '../models';

const AuthenticationController = {};

/**
 * Register an user
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
AuthenticationController.register =  async (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    try {
        await models.User.create({
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email
        },
        function (err, user) {
          if (err) return res.status(500).send("There was a problem registering the user.")
            const payload = { id: user._id  };
            const options = { expiresIn: 86400 };
            const secret = config.JWT;
            const token = jwt.sign(payload, secret, options);
            res.status(200).send({ auth: true, token: token });
        });
    }catch (e) {
        res.status(500).send({
        statusCode:500, 
        message: e
        })
    }
}

/**
 * Me
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
AuthenticationController.me =  async (req, res) => {
    try {
        models.User.findById(req.userId, { password: 0 },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!user) return res.status(404).send("User not found.");
            
            res.status(200).send(user);
        });
    }catch (e) {
        res.status(500).send({
          statusCode:500, 
          message: e
        })
    }
}

/**
 * Login
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
AuthenticationController.login =  async (req, res) => {
    try {
        await models.User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('User not found.');
        
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({ id: user._id }, config.JWT, {
            expiresIn: 86400 // expires in 24 hours
        });
        
        res.status(200).send({ auth: true, token: token });
        });
    }catch (e) {
        res.status(500).send({
          statusCode:500, 
          message: e
        })
    }
    
};

export default AuthenticationController;