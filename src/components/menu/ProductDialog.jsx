import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { formatCOP } from "../../lib/format";
import { buildSingleProductUrl } from "../../lib/whatsapp";

// ✅ Reutilizamos SmartImage para fallback limpio
import SmartImage from "../common/SmartImage";

function FallbackHero({ name }) {
  const initial = (name || "NB").slice(0, 2).toUpperCase();

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-nb-cream to-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#8B1E2D_0,transparent_55%)]" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border text-sm font-semibold text-nb-burgundy">
          {initial}
        </div>
        <span className="text-xs text-nb-ink/70">Natural Blends</span>
      </div>
    </div>
  );
}

export default function ProductDialog({ open, onOpenChange, product }) {
  if (!product) return null;

  const priceLabel = formatCOP(product.price);
  const whatsappUrl = buildSingleProductUrl({ ...product, priceLabel });
  const hasImg = Boolean(product.img);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden">
        {/* ✅ HERO: imagen completa */}
        <div className="relative h-72 w-full bg-white">
          {hasImg ? (
            <SmartImage
              src={product.img}
              alt={product.name}
              name={product.name}
              className="h-full w-full object-contain bg-white"
            />
          ) : (
            <FallbackHero name={product.name} />
          )}
        </div>

        <div className="p-6 space-y-4">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-xl font-semibold leading-tight">
              {product.name}
            </DialogTitle>

            {/* ✅ Precio: más grande y mejor ubicado */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-extrabold text-nb-burgundy tracking-tight">
                {priceLabel}
              </span>
              <div className="flex flex-wrap gap-2 justify-end">
                {product.isVeggie && (
                  <Badge className="bg-nb-mint text-nb-ink hover:bg-nb-mint/90">Veggie</Badge>
                )}
                {(product.tags || []).map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </DialogHeader>

          <p className="text-sm text-nb-ink/80">{product.desc}</p>

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
