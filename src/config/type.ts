export type Environment = {
  mongoDbUrl: string;
  jwtSecret: string;
  host: string | number;
  whitelist: string;
};
