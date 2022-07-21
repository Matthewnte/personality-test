import 'dotenv/config';

export default {
  port: process.env.PORT || 3000,
  opt: process.env.OPT || './opt/logs',
};
