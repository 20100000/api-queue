import 'dotenv/config';

const redis = {
  HOST: process.env.REDIS_HOST,
  PORT: process.env.REDIS_PORT,
  HOST_PORT: 'redis://127.0.0.1:6379'
}

const mySql = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  PASSWORD: process.env.DB_PASSWORD,
  USER: process.env.DB_USERNAME,
  DATABASE: process.env.DB_DATABASE
}

module.exports = {
  redis,
  mySql
}
