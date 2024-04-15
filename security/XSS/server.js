const server = require("express");

const app = server();

const PORT_NUMBER = 3001;

app.use((req, res, next) => {
  res.setHeader(
    "content-security-policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline'"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/example2.html");
});

app.listen(PORT_NUMBER, () => {
  console.log(`server starts in the port ${PORT_NUMBER}`);
});
