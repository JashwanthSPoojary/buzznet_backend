"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const usersRoute_1 = require("./routes/usersRoute");
const workspaceRoute_1 = require("./routes/workspaceRoute");
const chatbotRoute_1 = require("./routes/chatbotRoute");
const config_1 = require("./utils/config");
require("./utils/passport");
const config_2 = require("./utils/config");
const websocketHandler_1 = require("./websocketHandler");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "..", "uploads")));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: config_2.FRONTEND_URL,
}));
app.use(passport_1.default.initialize());
app.use("/user", usersRoute_1.userRouter);
app.use("/workspace", workspaceRoute_1.workspaceRouter);
app.use("/chatbot", chatbotRoute_1.chatbotRouter);
(0, websocketHandler_1.initializeWebSocketServer)(server);
server.listen(config_1.PORT, () => {
    console.log("Server is running on port", config_1.PORT);
});
