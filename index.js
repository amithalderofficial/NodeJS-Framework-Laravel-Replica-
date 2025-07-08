const cluster = require('cluster');
const os = require('os');
const express = require('express');
const routes = require('./resources/route');

require('@dotenvx/dotenvx').config();
const app = express();
routes.routes(app);
const PORT = process.env.PORT || 8888;

if(process.env.MULTITHREAD == 1) {
  if (cluster.isMaster) { // or cluster.isPrimary in newer Node.js versions
      console.log(`Master ${process.pid} is running`);

      // Fork workers for each CPU core
      const numCPUs = os.cpus().length;
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      // Handle worker exit events
      cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // Optionally, fork a new worker to replace the dead one
        cluster.fork();
      });
  } else {
      app.listen(PORT, () => {
        console.log(`Worker ${process.pid} started`);
      });
  }
} else {
    app.listen(PORT, () => {
        console.log(`Master Server ${PORT} started`);
    });
}



    