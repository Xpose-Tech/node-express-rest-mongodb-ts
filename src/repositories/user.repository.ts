import { UserInterface } from '@model/docs/user.doc';
import UserModel from '@model/user.model';
import { BaseRepository } from './base.repository';

export class UserRepo extends BaseRepository<UserInterface> {
  private static instance: UserRepo;

  private constructor() {
    super();
    this.model = UserModel;
  }

  public static getInstance(): UserRepo {
    if (!UserRepo.instance) {
      UserRepo.instance = new UserRepo();
    }

    return UserRepo.instance;
  }
}
