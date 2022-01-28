import 'reflect-metadata';
import { app } from './setup/serverSetup';
import { log } from 'console';

(() => {
  app.listen(8080);
  log('Server running on http://localhost:8080/graphql');
})();
