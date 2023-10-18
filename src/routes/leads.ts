import { Router, Request, Response } from "express";
import { prismaClient } from "../database";
import { createWhatsappUrl, setCreatedAtToBrazilTimeZone } from "../utils";
import { LeadModel, LeadResponseModel } from "../interfaces";

const router: Router = Router();

router.get("/leads", async (request: Request, response: Response) => {
  const leads = await prismaClient.lead.findMany();
  return response.json(leads);
});

router.post("/leads", async (request: Request, response: Response) => {
  try {
    const {
      name,
      email,
      phone,
      state,
      rentalProperty,
      equityAmount,
      rent,
      age,
      hasChildren,
      privacy,
      totalDonationCost,
      totalInventoryCost,
      totalHoldingSaving,
      createdAt,
    } = request.body as LeadResponseModel;

    const timeZoneDate = setCreatedAtToBrazilTimeZone(createdAt);

    const leadData: LeadModel = {
      name,
      email,
      phone,
      state,
      rentalProperty,
      equityAmount,
      rent,
      age,
      hasChildren,
      privacy,
      totalDonationCost,
      totalInventoryCost,
      totalHoldingSaving,
      createdAt: timeZoneDate,
      whatsappUrl: createWhatsappUrl(Number(phone), totalHoldingSaving),
    };

    const createdLead = await prismaClient.lead.create({
      data: leadData,
    });

    if (createdLead) {
      return response.status(201).json(createdLead);
    } else {
      return response.status(500).json({ error: "Erro ao criar o lead" });
    }
  } catch (error: any) {
    console.error("Erro na rota /leads:", error);
    if (error.meta?.target?.includes("EMAIL")) {
      return response.status(400).json({
        error: "Esse e-mail já foi cadastrado em nossa base de dados.",
      });
    }
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

export { router as leadsRouter };
