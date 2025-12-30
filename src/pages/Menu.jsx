import { useMemo, useState } from "react";
import { CATEGORIES, MENU } from "../data/menu";
import SearchSortBar from "../components/menu/SearchSortBar";
import CategoryTabs from "../components/menu/CategoryTabs";
import ProductCard from "../components/menu/ProductCard";
import ProductDialog from "../components/menu/ProductDialog";

export default function Menu() {
  const [category, setCategory] = useState("all"); // ✅ ahora existe "all"
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const onOpen = (p) => {
    setSelected(p);
    setOpen(true);
  };

  const filteredAll = useMemo(() => {
    const q = query.trim().toLowerCase();

    let items = [...MENU];

    if (q) {
      items = items.filter((p) => {
        const hay = `${p.name} ${p.desc} ${(p.tags || []).join(" ")}`.toLowerCase();
        return hay.includes(q);
      });
    }

    const rank = (p) => ((p.tags || []).includes("Top") ? 0 : 1);

    if (sort === "featured") items.sort((a, b) => rank(a) - rank(b));
    if (sort === "price_asc") items.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") items.sort((a, b) => b.price - a.price);
    if (sort === "name_asc") items.sort((a, b) => a.name.localeCompare(b.name));

    return items;
  }, [query, sort]);

  const groups = useMemo(() => {
    const byCat = new Map();
    for (const c of CATEGORIES) byCat.set(c.id, []);
    for (const p of filteredAll) {
      if (!byCat.has(p.category)) byCat.set(p.category, []);
      byCat.get(p.category).push(p);
    }
    return byCat;
  }, [filteredAll]);

  // ✅ tabs con "Todo"
  const categoriesWithAll = useMemo(
    () => [{ id: "all", name: "Todo", color: "nb.cream" }, ...CATEGORIES],
    []
  );

  const visibleCategories = category === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.id === category);

  return (
    <section className="py-10">
      <div className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Menú</h1>
            <p className="mt-1 text-sm text-nb-ink/70">
              Explora como marketplace: busca, filtra y pide en 1 clic. 🛍️
            </p>
          </div>

          <div className="text-sm text-nb-ink/60">
            {filteredAll.length} productos
          </div>
        </div>

        <CategoryTabs categories={categoriesWithAll} value={category} onChange={setCategory} />

        <SearchSortBar query={query} setQuery={setQuery} sort={sort} setSort={setSort} />

        {/* ✅ Vista por secciones */}
        <div className="space-y-10">
          {visibleCategories.map((c) => {
            const items = groups.get(c.id) || [];
            if (!items.length) return null;

            return (
              <section key={c.id} id={`cat-${c.id}`} className="scroll-mt-24">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{c.name}</h2>
                    <p className="text-sm text-nb-ink/60">{items.length} opciones</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} onOpen={onOpen} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* ✅ Empty state */}
          {filteredAll.length === 0 && (
            <div className="rounded-2xl border bg-white p-8 text-center">
              <p className="text-sm text-nb-ink/70">
                No encontramos nada con “{query}”. Prueba otro término 😅
              </p>
            </div>
          )}
        </div>
      </div>

      <ProductDialog open={open} onOpenChange={setOpen} product={selected} />
    </section>
  );
}
