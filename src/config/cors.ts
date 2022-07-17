import { config } from 'dotenv';
import { ENV } from './env';
config();

let allowList: any;
switch (process.env.NODE_ENV) {
  case 'development':
    allowList = ENV.whitelist;
    break;
  case 'staging':
    allowList = ENV.whitelist;
    break;
  case 'production':
    allowList = ENV.whitelist;
    break;
  case 'test':
    allowList = ENV.whitelist;
    break;
  default:
    allowList = '*';
    break;
}

export const corsOptions = function (req, callback) {
  let corsOptions;
  if ((typeof allowList == 'string' && allowList == '*') || allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
