import { Request } from 'express';

import { config } from 'dotenv';
import { env } from './env';
import { ENV } from '@constants/env.constant';
config();

let allowList: any;
switch (process.env.NODE_ENV) {
  case ENV.DEVELOPMENT:
    allowList = env.whitelist;
    break;
  case ENV.STAGING:
    allowList = env.whitelist;
    break;
  case ENV.PRODUCTION:
    allowList = env.whitelist;
    break;
  case 'test':
    allowList = env.whitelist;
    break;
  default:
    allowList = '*';
    break;
}

export const corsOptions = function (req: Request, callback) {
  let corsOptions;
  if ((typeof allowList == 'string' && allowList == '*') || allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
