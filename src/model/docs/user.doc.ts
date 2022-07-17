import mongoose from 'mongoose';

export interface UserInterface extends mongoose.Document {
  user_name: string;
  first_name?: string;
  last_name?: string;
  birthday: Date;
  address: object;
  email?: string;
  phone: string;
  verify_information: object;
  password: string;
  avatar_url?: string;
  created_at: Date;
  updated_at: Date;
}
