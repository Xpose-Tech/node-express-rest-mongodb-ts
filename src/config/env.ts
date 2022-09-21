import developmentEnv from './env/development';
import stagingEnv from './env/staging';
import productionEnv from './env/production';
import { Environment } from './type';
import { ENV } from '@constants/env.constant';

const loadConfig = (): Environment => {
  let keys: Environment;
  if (process.env.NODE_ENV === ENV.PRODUCTION) keys = productionEnv;
  else if (process.env.NODE_ENV === ENV.STAGING) keys = stagingEnv;
  else keys = developmentEnv;

  return keys;
};

export const env = loadConfig();
