import { config } from 'dotenv';
config();

const productionEnv = {
  mongoDbUrl: process.env.MONGO_URI_PRODUCTION || '',
  jwtSecret: process.env.JWT_SECRET_PRODUCTION || '',
  host: process.env.HOST_PRODUCTIOn || 8080,
  whitelist: '*',
};

export default productionEnv;
