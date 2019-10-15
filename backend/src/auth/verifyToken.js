import jwt from 'jsonwebtoken';
import config from "../../config/config";

const verifyToken = (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'Auth token is not supplied.' });
  
  jwt.verify(token, config.JWT, function(err, decoded) {      
  if (err) 
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    
  
  req.userId = decoded.id;
  next();
  });
}

export default verifyToken;