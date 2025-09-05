const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const sessionId = Math.floor(Math.random() * 100) + 1;
  res.setHeader("Set-Cookie", `sessionid=${sessionId}; Path=/; HttpOnly`);
  res.send(`🍪 Cookie set! Your random session ID is ${sessionId}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});