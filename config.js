const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  DBuser: process.env.USERNAME,
  DBpassword: process.env.PASSWORD
};