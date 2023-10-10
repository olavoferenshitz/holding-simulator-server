export function createWhatsappUrl(phoneNumber: number, holdingSaving: string): string {

  const salvingNumber: number = formatCurrencyToNumber(holdingSaving)

  if(salvingNumber >= 100000) {
    return `https://wa.me/${phoneNumber}?text=Oi,%20vimos%20que%20utilizou%20nosso%20Simulador%20Legado80%20e%20deu%20resultado%20positivo%20para%20Holding%20Familiar.`;
  }
  return `https://wa.me/${phoneNumber}?text=Oi,%20vimos%20que%20utilizou%20nosso%20Simulador%20Legado80%20e%20deu%20resultado%20positivo%20para%20um%20possível%20testamento%20em%20vida%20com%20reserva%20de%20usufruto,%20doação%20em%20vida,%20seguro%20de%20vida%20ou%20um%20plano%20de%20previdência%20privada%20específico.`;
}

export function formatCurrencyToNumber(currencyValue: string) {
  return Number(currencyValue.substring(0, currencyValue.length  - 3).replace(/\D/g, ''))
}
