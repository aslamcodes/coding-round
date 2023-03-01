import express from "express";
import router from "./routes/index.js";
const app = express();

import { createServer } from "http";
const server = createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use("/api", router);

let requests = [];

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("new request", (data) => {
    requests.push(data);
    io.emit("change", requests);
  });

  socket.on("request fullfil", (requestId) => {
    requests.filter((request) => request.id != requestId);
    socket.emit("change", requests);
  });
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});
