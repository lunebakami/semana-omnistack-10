import express from 'express';
import cors from 'cors';
import http from 'http';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.serverWebSocket = http.Server(this.server);

    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }
}

export default new App().serverWebSocket;
