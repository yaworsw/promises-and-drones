var socket = io.connect('ws://localhost:' + (config.websocket && config.websocket.port || 3000));

module.exports = socket;
