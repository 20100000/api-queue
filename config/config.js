
const redis = {
  REDIS_HOST_PORT: process.env.REDIS_URL,
  DELAY: 5000
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
