export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongobd: process.env.MONGODB,
  port: process.env.PORT || 3000,
  default_limit: +process.env.DEFAULT_LIMIT || 7,
});
