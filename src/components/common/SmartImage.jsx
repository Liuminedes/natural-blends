import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export default function SmartImage({
  src,
  alt = "Producto",
  name = "",
  className = "",
}) {
  const [broken, setBroken] = useState(false);

  // Si cambia src, resetear error
  useEffect(() => {
    setBroken(false);
  }, [src]);

  if (!src || broken) {
    return (
      <div
        className={`grid place-items-center rounded-xl bg-nb-cream/60 text-nb-ink/60 border border-nb-ink/10 ${className}`}
      >
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <ImageIcon className="h-7 w-7 opacity-70" />
          <p className="text-sm font-semibold text-nb-ink/80 line-clamp-2">
            {name || alt}
          </p>
          <p className="text-xs text-nb-ink/50">Imagen no disponible</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}
