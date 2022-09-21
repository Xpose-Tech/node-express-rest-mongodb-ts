import { Environment } from '@config/type';
import { config } from 'dotenv';
config();

const developmentEnv: Environment = {
  mongoDbUrl: process.env.MONGO_URI_DEVELOPMENT || '',
  jwtSecret: process.env.JWT_SECRET_DEVELOPMENT || '',
  host: `localhost:${process.env.PORT}` || 8080,
  whitelist: '*',
};

export default developmentEnv;
