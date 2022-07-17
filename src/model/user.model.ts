import mongoose from 'mongoose';
import { E_VERIFY_TYPE } from '@base/variable';
import { databaseValidate } from '@utils/database-validate';
import { UserInterface } from './docs/user.doc';
const paginate = require('./plugins/paginate');
const aggregatePaginate = require('./plugins/aggregate.paginate');

const AddressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, databaseValidate('missing', 'address.name', 'User')],
    },
    country: {
      type: String,
      default: 'Viet Nam',
    },
    state: {
      type: Object,
      required: [true, databaseValidate('missing', 'address.state', 'User')],
    },
    district: {
      type: Object,
      required: [true, databaseValidate('missing', 'address.district', 'User')],
    },
    ward: {
      type: Object,
      required: [true, databaseValidate('missing', 'address.ward', 'User')],
    },
    street: {
      type: String,
    },
  },
  {
    _id: false,
  }
);

const VerifyUserSchema = new mongoose.Schema(
  {
    verified: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: [true, databaseValidate('missing', 'verify_information.type', 'User')],
      enum: {
        values: E_VERIFY_TYPE,
        message: databaseValidate('invalid', 'verify_information.type', 'User'),
      },
    },
    code: {
      type: Number,
    },
    expire: {
      type: Date,
    },
  },
  {
    _id: false,
  }
);

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      index: true,
      unique: true,
      required: [true, databaseValidate('missing', 'user_name', 'User')],
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    birthday: {
      type: Date,
      required: [true, databaseValidate('missing', 'birthday', 'User')],
    },
    address: {
      type: AddressSchema,
      required: [true, databaseValidate('missing', 'address', 'User')],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, databaseValidate('missing', 'phone', 'User')],
    },
    verify_information: {
      type: VerifyUserSchema,
      required: [databaseValidate('missing', 'verify_information', 'User')],
    },
    password: {
      type: String,
      required: [databaseValidate('missing', 'password', 'User')],
    },
    avatar_url: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.plugin(paginate);
UserSchema.plugin(aggregatePaginate);

const UserModel = mongoose.model<UserInterface>('User', UserSchema);
export default UserModel;
