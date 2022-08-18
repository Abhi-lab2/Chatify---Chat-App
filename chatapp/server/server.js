const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/UserRoute");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Server Running!");
// });

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
//   console.log(chats);
// });

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.find((e) => e._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5005;
app.listen(5005, console.log("Server running on port 5005"));
