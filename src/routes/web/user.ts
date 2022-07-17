import { Router } from 'express';
import * as userWebFunctions from '@controller/api/web/user.controller';

const userRouter = Router({ mergeParams: true });

userRouter.post('/create-seller', userWebFunctions.createUser);

export default userRouter;
