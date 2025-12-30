import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { formatCOP } from "../../lib/format";
import { buildSingleProductUrl } from "../../lib/whatsapp";

export default function ProductDialog({ open, onOpenChange, product }) {
  if (!product) return null;

  const priceLabel = formatCOP(product.price);
  const whatsappUrl = buildSingleProductUrl({ ...product, priceLabel });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between gap-3">
            <span>{product.name}</span>
            <span className="text-sm font-semibold text-nb-burgundy">{priceLabel}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <p className="text-sm text-nb-ink/80">{product.desc}</p>

          <div className="flex flex-wrap gap-2">
            {product.isVeggie && (
              <Badge className="bg-nb-mint text-nb-ink hover:bg-nb-mint/90">Veggie</Badge>
            )}
            {(product.tags || []).map((t) => (
              <Badge key={t} variant="outline">{t}</Badge>
            ))}
          </div>

          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block">
            <Button className="w-full bg-nb-burgundy hover:bg-nb-burgundy/90">
              Pedir por WhatsApp
            </Button>
          </a>

          <p className="text-xs text-nb-ink/60">
            Tip: agrega una nota en WhatsApp (sin azúcar, extra topping, etc.) ✅
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
