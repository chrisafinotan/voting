export class Controller {
   constructor(server) {
      this.server = server;
      this.initialize();
   }
   initialize() {
      this.server.on('connection', (socket) => {
         socket.on('countupdate', (payload) => {
            const { count } = payload;
            console.log(count);
         });
      });
   }
}
