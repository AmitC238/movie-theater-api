const app = require("./src/app");
const { db } = require("./db/connection");
const port = 3000;

app.listen(port, () => {
  db.sync();
  console.log(`Your server is listening on port http://localhost:${port}`);
});
