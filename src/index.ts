import express from "express";
import passport from "passport";
import cors from "cors";
import http from "http";
import path from "path";

import { userRouter } from "./routes/usersRoute";
import { workspaceRouter } from "./routes/workspaceRoute";
import { chatbotRouter } from "./routes/chatbotRoute";

import { PORT } from "./utils/config";
import "./utils/passport";
import { FRONTEND_URL } from "./utils/config";
import { initializeWebSocketServer } from "./websocketHandler";

const app = express();
const server = http.createServer(app);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
  })
);
app.use(passport.initialize());

app.use("/user", userRouter);
app.use("/workspace", workspaceRouter);
app.use("/chatbot", chatbotRouter);

initializeWebSocketServer(server);

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
