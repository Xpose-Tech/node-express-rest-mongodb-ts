import { Environment } from '@config/type';
import { config } from 'dotenv';
config();

const productionEnv: Environment = {
  mongoDbUrl: process.env.MONGO_URI_PRODUCTION || '',
  jwtSecret: process.env.JWT_SECRET_PRODUCTION || '',
  host: process.env.HOST_PRODUCTION || 8080,
  whitelist: '*',
};

export default productionEnv;
