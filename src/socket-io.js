import { io } from 'socket.io-client';

const socket = io.connect(process.env.PORT);

export default socket;