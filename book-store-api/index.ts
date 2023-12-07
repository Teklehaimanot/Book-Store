import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome node server");
});

const port = 5000;

app.listen(port, () => console.log(`app running in port${port}`));
