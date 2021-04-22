import express from "express";
import multer from "multer";
import fs from "fs";
import parseBill from "./lib/parseBill";
import { CallList } from "./lib/callList";

const dir = "./uploads";
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".csv");
  },
});

const upload = multer({ storage: storage });

router.put("/upload", upload.single("phoneBill"), function (req, res, next) {
  console.log("upload file", req.file);
  const uploadFile = fs.readFileSync(req.file.path, "utf-8");
  console.log("data from file:\n", uploadFile);
  const callList: CallList = parseBill(uploadFile);
  console.log("totalCost : ", callList.totalCost(), "cents");

  const dataForClient = {
    totalCallList: callList.totalCallList,
    totalCost: callList.totalCost(),
  };
  res.send(JSON.stringify(dataForClient));
});

export default router;
