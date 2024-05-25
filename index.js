const express = require("express");
const app = express();
const port = 3000;

// controler
app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my about");
});
app.get("/blog", (req, res) => {
  res.send("Welcome to blog");
});
app.get("/galeri", (req, res) => {
  res.send(
    "<img src='https://th.bing.com/th/id/R.636e921d804ef3bb586fca10e5258c89?rik=KZkLHaDogU8e4g&riu=http%3a%2f%2fjustcoolidea.ru%2fwp-content%2fuploads%2f2015%2f11%2fcofe.jpg&ehk=fid%2bSk4ogr%2bYdJogOQS5SKCTOItPkXNl1rDk%2b37992A%3d&risl=&pid=ImgRaw&r=0'>"
  );
});

// ini untuk server
app.listen(port, () => {
  console.log("sistem sudah berjalan");
});
