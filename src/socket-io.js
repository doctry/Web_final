import { io } from 'socket.io-client';

const socket = io.connect(process.ENV.port);

export default socket;