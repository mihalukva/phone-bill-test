const express = require("express");
const app = express();
const upload = require('./upload')

app.use(express.static('build'))
app.use("/", upload)
app.listen(3000, () => {
  console.log("listen 3000 port");
});
