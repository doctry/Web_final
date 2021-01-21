import { io } from 'socket.io-client';

const socket = io.connect("https://web-final-server.herokuapp.com/");

export default socket;