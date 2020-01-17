import app from './app';
import WebSocket from './websocket';

WebSocket.setupWebSocket(app);

app.listen(3333);
