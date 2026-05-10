export const business = {
  name: 'LF Airport Transfers',
  phoneDisplay: '+44 7541 494500',
  whatsappNumber: '447541494500',
  email: 'info@lfairporttransfers.co.uk',
  instagram: 'https://instagram.com/lfairporttransfers',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://lfairporttransfers.co.uk',
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultBookingMessage =
  "Hello, I'd like to request a private chauffeur transfer with LF Airport Transfers.";

