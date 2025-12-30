import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { formatCOP } from "../../lib/format";
import { buildSingleProductUrl } from "../../lib/whatsapp";
import { Leaf, Flame, Sparkles, ArrowRight } from "lucide-react";

function CategoryBadge({ category }) {
  const map = {
    bowls: { label: "Bowl", icon: <Sparkles className="h-3 w-3" /> },
    ensaladas: { label: "Ensalada", icon: <Leaf className="h-3 w-3" /> },
    sandwiches: { label: "Sándwich", icon: <Flame className="h-3 w-3" /> },
    hamburguesas: { label: "Burger", icon: <Flame className="h-3 w-3" /> },
    batidos: { label: "Batido", icon: <Sparkles className="h-3 w-3" /> },
    bebidas: { label: "Bebida", icon: <Sparkles className="h-3 w-3" /> },
    bowls_fruta: { label: "Bowl Fruta", icon: <Leaf className="h-3 w-3" /> },
  };
  const item = map[category] || { label: "Producto", icon: null };
  return (
    <Badge variant="secondary" className="gap-1 rounded-full">
      {item.icon}
      {item.label}
    </Badge>
  );
}

function FallbackBanner({ name }) {
  const initial = (name || "NB").slice(0, 2).toUpperCase();

  return (
    <div className="h-full w-full bg-gradient-to-br from-nb-cream to-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#8B1E2D_0,transparent_55%)]" />
      <div className="absolute top-3 left-3">
        <Badge variant="secondary" className="rounded-full">Natural Blends</Badge>
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border text-sm font-semibold text-nb-burgundy">
          {initial}
        </div>
        <span className="text-xs text-nb-ink/70">Hecho al momento</span>
      </div>
    </div>
  );
}

export default function ProductCard({ product, onOpen }) {
  const priceLabel = formatCOP(product.price);
  const whatsappUrl = buildSingleProductUrl({ ...product, priceLabel });
  const hasImg = Boolean(product.img);

  return (
    <Card className="group overflow-hidden transition hover:shadow-md">
      {/* Imagen / Banner */}
      <div className="relative h-40 w-full">
        {hasImg ? (
          <img
            src={product.img}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <FallbackBanner name={product.name} />
        )}

        {/* Price pill */}
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-nb-burgundy border">
            {priceLabel}
          </span>
        </div>
      </div>

      <CardContent className="space-y-3 p-4">
        <div className="space-y-1">
          <h3 className="text-base font-semibold leading-tight">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm text-nb-ink/70">
            {product.desc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={product.category} />
          {product.isVeggie && (
            <Badge className="rounded-full bg-nb-mint text-nb-ink hover:bg-nb-mint/90">
              Veggie
            </Badge>
          )}
          {(product.tags || []).slice(0, 2).map((t) => (
            <Badge key={t} variant="outline" className="rounded-full">
              {t}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            variant="outline"
            className="w-full rounded-xl"
            onClick={() => onOpen(product)}
          >
            Ver detalles
          </Button>

          <a className="w-full" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button className="w-full rounded-xl bg-nb-burgundy hover:bg-nb-burgundy/90 gap-2">
              Pedir <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
