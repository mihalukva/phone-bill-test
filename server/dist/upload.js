"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const parseBill_1 = __importDefault(require("./lib/parseBill"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".csv");
    },
});
const upload = multer_1.default({ storage: storage });
router.put("/upload", upload.single("phoneBill"), function (req, res, next) {
    console.log("upload file", req.file);
    const uploadFile = fs_1.default.readFileSync(req.file.path, "utf-8");
    console.log("data from file:\n", uploadFile);
    const callList = parseBill_1.default(uploadFile);
    console.log("totalCost : ", callList.totalCost(), "cents");
    const dataForClient = {
        totalCallList: callList.totalCallList, totalCost: callList.totalCost()
    };
    res.send(JSON.stringify(dataForClient));
});
exports.default = router;
//# sourceMappingURL=upload.js.map