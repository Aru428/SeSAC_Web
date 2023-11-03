const express = require("express");
const app = express(); // 서버 객체
const PORT = 8000;

app.get("/", function(req, res) {
    res.send("hello expresssssssss");
    // send : 값을 보냄
})

app.listen(PORT, function() { // 서버를 연다
    console.log(`Sever Open: ${PORT}`);
})