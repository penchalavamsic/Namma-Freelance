const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { authRouter } = require("./routes/auth.routes");
const { profileRouter } = require("./routes/profile.routes");
const { serviceRouter } = require("./routes/services.routes");

const app = express();
const port = 3008;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Connected to Namma Freelancer server");
});
app.use(express.json());
app.use(bodyParser.json());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/",serviceRouter);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
