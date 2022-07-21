import app from './app';
import config from './config';

app.listen(3333, () => {
  console.log(`🚀 Server started on port ${config.port}!`);
});
