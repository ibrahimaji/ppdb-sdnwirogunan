// WhatsAppButton.tsx
import React from "react";
import { Phone } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  contactName: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  contactName,
}) => {
  const openWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(
      "Halo, saya ingin bertanya tentang PPDB UPT SDN Wirogunan Kota Pasuruan",
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={openWhatsAppChat}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
    >
      <Phone className="mr-2" />
      {contactName}
    </button>
  );
};

export default WhatsAppButton;
