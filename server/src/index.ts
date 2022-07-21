import app from './app';
import config from './config';
import logger from './config/winston';

app.listen(config.port, () => {
  logger.log({
    message: `Server started on port ${config.port}!`,
    level: 'info',
  });
});
