import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { Controller } from './controller.js';

const app = express();
const httpServer = createServer(app);
const serverPort = 3001;
const serverSettings = {
    cors: {
        origin: (true || process.env.CORS_ORIGIN )?? `http://localhost:${serverPort}`,
        methods: ["GET", "POST"],
      },
};

const io = new Server(httpServer);
const controller = new Controller(io);

httpServer.listen(serverPort, () => {
    console.log('listening');
});