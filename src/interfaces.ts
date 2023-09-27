export interface LeadResponseModel {
  name: string;
  email: string;
  phone: number;
  state: string;
  patrimony: number;
  totalDonationCost: number;
  totalInventoryCost: number;
}

export interface LeadModel extends LeadResponseModel {
  whatsappUrl: string;
}
