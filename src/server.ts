import express, { NextFunction, Request, Response, response } from "express";
import { prismaClient } from "./database";

const app = express();
app.use(express.json());

const port = process.env.PORT ?? 4000;

app.post("/leads", async (request: Request, response: Response) => {
  const {
    name,
    email,
    phone,
    state,
    patrimony,
    totalDonationCost,
    totalInventoryCost,
    whatsappUrl,
  } = request.body;
  const lead = await prismaClient.lead.create({
    data: {
      name,
      email,
      phone,
      state,
      patrimony,
      totalDonationCost,
      totalInventoryCost,
      whatsappUrl,
    },
  });
  return response.json(lead);
});

app.listen(port, () => console.log("Server is running on port ", port));
