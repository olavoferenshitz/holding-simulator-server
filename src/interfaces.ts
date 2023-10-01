export interface LeadResponseModel {
  name: string;
  email: string;
  phone: number;
  state: string;
  rentalProperty: string;
  equityAmount: string;
  rent: string;
  age: number;
  hasChildren: string;
  privacy: string;
  contact: string;
  createdAt: Date;
  totalDonationCost: string;
  totalInventoryCost: string;
}

export interface LeadModel extends LeadResponseModel {
  whatsappUrl: string;
}
