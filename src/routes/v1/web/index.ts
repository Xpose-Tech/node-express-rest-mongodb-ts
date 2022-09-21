import { Router } from 'express';

import user from './user.route';

const webRouter = Router();

webRouter.use('/users', user);

export default webRouter;
