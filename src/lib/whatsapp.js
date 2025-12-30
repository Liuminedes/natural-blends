const WHATSAPP_BASE = "https://wa.me/573174604451";

export const buildWhatsAppUrl = ({ items = [], note = "" }) => {
  const lines = [
    "Hola Natural Blends 👋",
    "Quiero hacer un pedido:",
    "",
    ...items.map((it, idx) => `${idx + 1}. ${it.name} — ${it.priceLabel}`),
    note ? "" : null,
    note ? `Nota: ${note}` : null,
    "",
    "¿Me confirmas disponibilidad y tiempo de preparación? ✅",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `${WHATSAPP_BASE}?text=${text}`;
};

export const buildSingleProductUrl = (product) => {
  const text = encodeURIComponent(
    `Hola Natural Blends 👋\nQuiero pedir: ${product.name} (${product.priceLabel})\nNota: `
  );
  return `${WHATSAPP_BASE}?text=${text}`;
};
