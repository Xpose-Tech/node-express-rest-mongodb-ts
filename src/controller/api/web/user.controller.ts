import { Request, Response } from 'express';

import { UserRepo } from '@repositories/user.repository';
import { UserDoc } from '@model/docs/user.doc';

const userRepo = UserRepo.getInstance();

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: UserDoc = await userRepo.create(req.body);
    res.success(user);
  } catch (error: any) {
    res.error(error.name, error.message, error.statusCode);
  }
};
