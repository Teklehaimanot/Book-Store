import express, { Application } from "express";
require("dotenv/config");

const app: Application = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("we are on home page");
});

app.use("/user", require("./route/userRoute"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
