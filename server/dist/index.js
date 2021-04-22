"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("./upload"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, "../../build")));
app.use("/", upload_1.default);
app.listen(4000, () => {
    console.log("listen 4000 port");
});
//# sourceMappingURL=index.js.map