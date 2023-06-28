const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const peer = require("peer");

app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
  });

  socket.on("message", (message) => {
    socket.to(roomId).broadcast.emit("message", message);
  });
});

peer.on("connection", (peer) => {
  peer.on("message", (data) => {
    io.emit("message", data);
  });
});

http.listen(3000, () => {
  console.log("Server is running on port 3000");
});
