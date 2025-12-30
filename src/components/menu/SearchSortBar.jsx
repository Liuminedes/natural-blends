import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";

export default function SearchSortBar({ query, setQuery, sort, setSort }) {
  const hasQuery = query.trim().length > 0;

  return (
    <div className="grid gap-3 md:grid-cols-[1fr_220px] md:items-center">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-nb-ink/40" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar… (ej: bowl, atún, veggie, café)"
          className="h-11 pl-10 pr-12 rounded-xl"
        />
        {hasQuery && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setQuery("")}
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-nb-burgundy/30"
      >
        <option value="featured">Destacados</option>
        <option value="price_asc">Precio: menor a mayor</option>
        <option value="price_desc">Precio: mayor a menor</option>
        <option value="name_asc">Nombre: A → Z</option>
      </select>
    </div>
  );
}
