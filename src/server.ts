import express, { type Request, type Response } from "express";
import { configDotenv } from "dotenv";

const app = express();

configDotenv();

app.get("/", (_: Request, res: Response) => {
  res.status(200).json({
    msg: "Hello World!",
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running at PORT ${process.env.PORT}`);
});
