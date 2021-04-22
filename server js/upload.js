const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + ".csv")
    }
})

const upload = multer({ storage: storage })

router.put('/upload', upload.single('phoneBill'), function (req, res, next) {
    console.log("upload file");
})

module.exports = router;