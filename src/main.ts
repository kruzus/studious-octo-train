import express, { Application } from "express";
import { router } from "./routes/";

const app: Application = express();

app.use(router);

app.listen(5000, () => {
  console.log("Live.");
});
