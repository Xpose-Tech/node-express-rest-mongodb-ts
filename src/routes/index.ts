import { Router, Request, Response } from 'express';

import webRouteV1 from './v1/web';

const router = Router();

router.use('/api/v1/web', webRouteV1);
router.get('/', (req: Request, res: Response) => res.send('Welcome to Project'));

export default router;
