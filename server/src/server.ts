import {keys} from '../key/key'
import app from "./app";
import http from "http";
// import os from "os";
// import cluster from "cluster";

const DEFAULT_PORT: number = keys.PORT_NUMBER;
const PORT: number | string = process.env.PORT || DEFAULT_PORT;
const SERVER = http.createServer(app);

// if (cluster.isPrimary) {
//   const numCPUs = os.cpus().length;
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
// } else {
SERVER.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
// }
