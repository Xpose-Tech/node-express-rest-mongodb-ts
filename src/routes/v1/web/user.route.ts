import { Router } from 'express';

import * as userWebFunctions from '@controller/api/web/user.controller';

const userRouter = Router({ mergeParams: true });

userRouter.post('/sellers', userWebFunctions.createUser);

export default userRouter;
