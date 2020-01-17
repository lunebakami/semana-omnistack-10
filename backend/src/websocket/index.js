import socketio from 'socket.io';
import parseStringAsArray from '../utils/parseStringAsArray';
import calculateDistance from '../utils/calculateDistance';

const connections = [];
let io;

class WebSocket {
  setupWebSocket(serverWebSocket) {
    io = socketio(serverWebSocket);

    io.on('connection', socket => {
      const { latitude, longitude, techs } = socket.handshake.query;

      const connection = {
        id: socket.id,
        coordinates: {
          latitude: Number(latitude),
          longitude: Number(longitude),
        },
        techs: parseStringAsArray(techs),
      };
      connections.push(connection);
    });
  }

  findConnections(coordinates, techs) {
    const result = connections.filter(con => {
      return (
        calculateDistance(coordinates, con.coordinates) < 10 &&
        con.techs.some(item => techs.includes(item))
      );
    });

    return result;
  }

  sendMessage(to, message, data) {
    to.forEach(connection => {
      io.to(connection.id).emit(message, data);
    });
  }
}

export default new WebSocket();
