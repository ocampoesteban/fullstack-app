import { Router } from 'express';
import cntrl from "../controllers/";

const router = Router();

router
  .route('/users')
  .get(cntrl.UserController.getUsers)
  .post(cntrl.UserController.addUser);

router
  .route('/users/:userId')
  .get(cntrl.UserController.getUserById)
  .delete(cntrl.UserController.deleteUserById)
  .put(cntrl.UserController.updateUserById);

 router
  .route('/users/login')
  .post(cntrl.UserController.login);

export default router;