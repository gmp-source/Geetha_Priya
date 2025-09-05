const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const sessionId = Math.floor(Math.random() * 100) + 1;
  res.setHeader("Set-Cookie", `sessionid=${sessionId}; Path=/; HttpOnly`);
  res.send(`Cookie set! Your random session ID is ${sessionId}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
