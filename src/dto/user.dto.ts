import { BaseDTO } from './base.dto';
export class UserDTO extends BaseDTO {
  protected obj;
  protected fillable = [
    '_id',
    'user_name',
    'first_name',
    'last_name',
    'birthday',
    'address',
    'phone',
    'email',
    'verify_information',
    'password',
    'avatar_url',
    'created_at',
    'updated_at',
  ];
  protected fillableDB = [
    '_id',
    'user_name',
    'first_name',
    'last_name',
    'birthday',
    'address',
    'phone',
    'email',
    'verify_information',
    'password',
    'avatar_url',
    'created_at',
    'updated_at',
  ];

  constructor(dto) {
    super();
    this.obj = dto;
  }

  toSimpleJSON = () => {
    return this.toJSON([
      '_id',
      'user_name',
      'first_name',
      'last_name',
      'birthday',
      'address',
      'phone',
      'email',
      'verify_information',
      'password',
      'avatar_url',
      'created_at',
      'updated_at',
    ]);
  };
}
