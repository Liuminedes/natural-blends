import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/573174604451"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-nb-burgundy text-white shadow-lg hover:opacity-90"
      aria-label="Pedir por WhatsApp"
      title="Pedir por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
