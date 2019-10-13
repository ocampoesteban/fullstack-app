import { Router } from 'express';
import cntrl from "../controllers/";
import verifyToken from '../auth/verifyToken';

const router = Router();

router
  .route('/register')
  .post(cntrl.AuthenticationController.register)
  .post(cntrl.AuthenticationController.login);

router
  .route('/login')
  .post(cntrl.AuthenticationController.login);

router
  .route('/me')
  .get(cntrl.AuthenticationController.me);


export default router;