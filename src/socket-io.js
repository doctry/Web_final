import { io } from 'socket.io-client';

const socket = io.connect('ws://localhost:4000');

export default socket;