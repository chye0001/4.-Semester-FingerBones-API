const express = require("express");
const app = express();

const data = [
  { id: 1, fingerBone: "Distal phalanges" },
  { id: 2, fingerBone: "Intermediate phalanges" },
  { id: 3, fingerBone: "Proximal phalanges" },
];

app.get("/finger-bones", (req, res) => {
  res.send(data);
});

app.get("/finger-bones/:id", (req, res) => {
  const index = Number(req.params.id) - 1;

  if (index < 0 || index >= data.length) {
    res.send({ message: "Invalid id" });
    
  } else {
    const requestData = data[index];
    res.send(requestData);
  }
});

app.listen("8080");
