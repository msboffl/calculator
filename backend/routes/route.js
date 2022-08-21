const express = require('express');
const router = express.Router();
const path = require('path');

const publicDir = path.join(__dirname, "../..", "/frontend")

router.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, "views/index.html"))
})



module.exports = router;