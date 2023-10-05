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
  totalDonationCost: string;
  totalInventoryCost: string;
  totalHoldingSaving: string;
  createdAt: Date;
}

export interface LeadModel extends LeadResponseModel {
  whatsappUrl: string;
}
