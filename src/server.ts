import express, { Application } from "express";
import { createServer } from "http";
import { AddressInfo } from "net";
import { leadsRouter } from "./routes/leads";

const app: Application = express();
app.use(express.json());

const port = process.env.PORT || 4000;

async function bootstrap() {
  app.use("/", leadsRouter);

  app.listen(port, () => console.log("Server is running on port", port));
}

bootstrap();
