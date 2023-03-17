const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const path = require("path");

// app.use(express.static(path.join(__dirname, "..", "build")));

//これを追加（全てをindex.htmlにリダイレクト。いわゆるrewrite設定）
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log("message: " + message);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});
