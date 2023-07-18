import MessageResponse from "./interfaces/MessageResponse";
import express, { Request, Response } from "express";

const app = express();

app.get<{}, MessageResponse>("/", (req: Request, res: Response) => {
  res.json({
    message: "Adarsh is cool",
  });
});

app.listen(3000);
