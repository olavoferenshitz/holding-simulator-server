import { Router, Request, Response } from "express";
import { prismaClient } from "../database";
import { createWhatsappUrl } from "../utils";
import { LeadModel, LeadResponseModel } from "../interfaces";

const router: Router = Router();

router.post("/leads", async (request: Request, response: Response) => {
  try {
    const {
      name,
      email,
      phone,
      state,
      patrimony,
      totalDonationCost,
      totalInventoryCost,
    } = request.body as LeadResponseModel;

    const leadData: LeadModel = {
      name,
      email,
      phone,
      state,
      patrimony,
      totalDonationCost,
      totalInventoryCost,
      whatsappUrl: createWhatsappUrl(phone),
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
