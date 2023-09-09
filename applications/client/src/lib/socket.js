import { io } from 'socket.io-client';

export const socket = io(process.env.WSS_URL || 'http://localhost:3001', {
   transports: ['websocket'],
});
