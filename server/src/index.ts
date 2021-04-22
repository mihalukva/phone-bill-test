import express from "express";
import router from "./upload";
import path from "path"
const app = express();

app.use(express.static(path.join(__dirname,"../../build")));
app.use("/", router);
app.listen(4000, () => {
  console.log("listen 4000 port");
});
