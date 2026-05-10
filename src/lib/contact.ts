export const business = {
  name: 'LF Airport Transfers',
  phoneDisplay: '+44 7543 354410',
  whatsappNumber: '447543354410',
  email: 'contact@lfairporttransfers.co.uk',
  bookingsEmail: 'bookings@lfairporttransfers.co.uk',
  supportEmail: 'support@lfairporttransfers.co.uk',
  adminEmail: 'admin@lfairporttransfers.co.uk',
  infoEmail: 'info@lfairporttransfers.co.uk',
  companyNumber: '07543354410',
  founded: 'October 2022',
  linkedin: 'https://www.linkedin.com/company/lfairporttransfers/',
  instagram: '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://lfairporttransfers.co.uk',
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultBookingMessage =
  "Hello, I'd like to request a private chauffeur transfer with LF Airport Transfers.";
