import { Router } from 'express';
import cntrl from "../controllers/";
import verifyToken from '../auth/verifyToken';

const router = Router();

router
  .route('/users')
  .get(verifyToken,cntrl.UserController.getUsers);

router
  .route('/user')
  .post(verifyToken, cntrl.UserController.addUser);

router
  .route('/user/:userId')
  .get(verifyToken, cntrl.UserController.getUserById)
  .delete(verifyToken, cntrl.UserController.deleteUserById)
  .put(verifyToken, cntrl.UserController.updateUserById);

export default router;