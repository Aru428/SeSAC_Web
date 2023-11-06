const express = require("express");
const app = express();
const PORT = 8000;

// view engine 설정을 ejs로 변경
app.set("view engine", "ejs");

// body-parser : 요청의 body를 해석해서 req.body 객체로 받을 수 있게 해줌
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ejs 랜더링
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/get", function (req, res) {
  console.log("get: ", req.query);
  res.send("get 요청 성공");
});

app.post("/post", function (req, res) {
  console.log("post: ", req.body);
  res.send("post 요청 성공");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
