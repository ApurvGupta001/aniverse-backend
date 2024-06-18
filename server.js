import 'dotenv/config';

import app from "./app.js";
import runDbMigrations from './db/migrations/index.js';

async function start() {
  await runDbMigrations();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`😎😇 Running on port ${port} 😇😎`);
  });
}

start();