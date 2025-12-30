import { cn } from "@/lib/utils";

const COLOR_CLASS = {
  "nb.mint": "bg-nb-mint/20 text-nb-ink hover:bg-nb-mint/30",
  "nb.sun": "bg-nb-sun/25 text-nb-ink hover:bg-nb-sun/35",
  "nb.aqua": "bg-nb-aqua/20 text-nb-ink hover:bg-nb-aqua/30",
  "nb.coral": "bg-nb-coral/20 text-nb-ink hover:bg-nb-coral/30",
  "nb.plum": "bg-nb-plum/15 text-nb-ink hover:bg-nb-plum/25",
};

export default function CategoryTabs({ categories = [], value, onChange }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border bg-white p-2">
        {categories.map((c) => {
          const active = value === c.id;

          // ✅ aquí estaba el bug: tu data usa "name"
          const text = c.name ?? c.label ?? c.title ?? String(c.id);

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-burgundy/50",
                active
                  ? "bg-nb-burgundy text-white shadow-sm shadow-nb-burgundy/25"
                  : cn(
                      "border border-transparent",
                      COLOR_CLASS[c.color] ?? "bg-nb-cream/60 text-nb-ink hover:bg-nb-cream"
                    )
              )}
              aria-label={text}
              title={text}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
