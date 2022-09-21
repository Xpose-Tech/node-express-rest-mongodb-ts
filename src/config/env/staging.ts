import { Environment } from '@config/type';
import { config } from 'dotenv';
config();

const stagingEnv: Environment = {
  mongoDbUrl: process.env.MONGO_URI_STAGING || '',
  jwtSecret: process.env.JWT_SECRET_STAGING || '',
  host: process.env.HOST_STAGING || 8080,
  whitelist: '*',
};

export default stagingEnv;
