const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/public/:filename", (req, res) => {
  const file = req.params.filename;
  res.sendFile(__dirname + "/public/" + file);
});

app.get("/public/assets/:filename", (req, res) => {
  const file = req.params.filename;
  res.sendFile(__dirname + "/public/assets/" + file);
});

app.get("/style/:filename", (req, res) => {
  const file = req.params.filename;
  res.sendFile(__dirname + "/style/" + file);
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});
