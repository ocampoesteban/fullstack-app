import jwt from 'jsonwebtoken';
import config from "../../config/config";

const verifyToken = (req, res, next) => {
  var token = req.headers['x-access-token'];
    if (!token) 
      return res.status(403).send({statusCode: 403, auth: false, message: 'Unauthorised.' });
    
    jwt.verify(token, config.JWT, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ statusCode: 500, auth: false, message: 'Failed to authenticate token.' });    
    
    req.userId = decoded.id;
    next();
  });
}
export default verifyToken;