import { UserRepo } from '@repositories/user.repository';

const userRepo = UserRepo.getInstance();

export const createUser = async (req: any, res: any) => {
  try {
    const user = await userRepo.create(req.body);
    res.success(user);
  } catch (error: any) {
    res.error(error.name, error.message, error.statusCode);
  }
};
