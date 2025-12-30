import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Instagram, Menu as MenuIcon, MessageCircleMore, ArrowRight, MapPin } from "lucide-react";

const navClass = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive ? "text-nb-burgundy" : "text-nb-ink/80 hover:text-nb-burgundy"
  }`;

const mobileItemClass = ({ isActive }) =>
  `group flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition ${
    isActive
      ? "border-nb-burgundy bg-nb-burgundy/5 text-nb-burgundy"
      : "border-black/10 bg-white text-nb-ink/80 hover:bg-nb-cream/50"
  }`;

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // ✅ cierra el menú automáticamente al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Natural Blends" className="h-9 w-9 rounded-xl" />
          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight">Natural Blends</span>
            <span className="block text-xs text-nb-ink/60">Healthy • Fresh • Delicious</span>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navClass}>Inicio</NavLink>
          <NavLink to="/menu" className={navClass}>Menú</NavLink>
          <NavLink to="/contacto" className={navClass}>Contacto</NavLink>
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-2 md:flex">
          <a href="https://www.instagram.com/naturalblendscol" target="_blank" rel="noreferrer">
            <Button variant="outline" className="gap-2">
              <Instagram className="h-4 w-4" />
              Instagram
            </Button>
          </a>

          <a href="https://wa.me/573174604451" target="_blank" rel="noreferrer">
            <Button className="bg-nb-burgundy hover:bg-nb-burgundy/90 gap-2">
              <MessageCircleMore className="h-4 w-4" />
              Pedir
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Abrir menú"
                className="rounded-xl"
              >
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[340px] p-0">
              {/* Header premium */}
              <div className="relative border-b px-5 py-5">
                <div className="absolute -inset-10 -z-10 bg-gradient-to-br from-nb-burgundy/10 via-emerald-200/20 to-amber-200/20 blur-2xl" />
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-3">
                    <img src={logo} alt="Natural Blends" className="h-10 w-10 rounded-xl" />
                    <div className="leading-tight">
                      <div className="text-base font-semibold">Natural Blends</div>
                      <div className="text-xs text-nb-ink/60">Comer rico y saludable sí se puede 💚</div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border bg-white/70 px-3 py-1 text-xs text-nb-ink/70">
                    📍 Calle 52N # 5B - 138
                  </span>
                  <span className="rounded-full border bg-white/70 px-3 py-1 text-xs text-nb-ink/70">
                    🕒 10:00 – 21:00
                  </span>
                </div>
              </div>

              <div className="px-5 py-5">
                {/* Links */}
                <div className="flex flex-col gap-3">
                  <NavLink to="/" className={mobileItemClass} onClick={() => setOpen(false)}>
                    <span>Inicio</span>
                    <ArrowRight className="h-4 w-4 opacity-50 transition group-hover:opacity-100" />
                  </NavLink>

                  <NavLink to="/menu" className={mobileItemClass} onClick={() => setOpen(false)}>
                    <span>Menú</span>
                    <ArrowRight className="h-4 w-4 opacity-50 transition group-hover:opacity-100" />
                  </NavLink>

                  <NavLink to="/contacto" className={mobileItemClass} onClick={() => setOpen(false)}>
                    <span>Contacto</span>
                    <ArrowRight className="h-4 w-4 opacity-50 transition group-hover:opacity-100" />
                  </NavLink>
                </div>

                {/* CTA */}
                <div className="mt-5 grid gap-2">
                  <a href="https://wa.me/573174604451" target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-2xl bg-nb-burgundy hover:bg-nb-burgundy/90 gap-2">
                      <MessageCircleMore className="h-4 w-4" />
                      Pedir por WhatsApp
                    </Button>
                  </a>

                  <a href="https://www.instagram.com/naturalblendscol" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="w-full rounded-2xl gap-2">
                      <Instagram className="h-4 w-4" />
                      Ver Instagram
                    </Button>
                  </a>

                  <a href="https://maps.app.goo.gl/PM3jzKexgLFQER3w6" target="_blank" rel="noreferrer">
                    <Button variant="secondary" className="w-full rounded-2xl gap-2">
                      <MapPin className="h-4 w-4" />
                      Abrir ubicación
                    </Button>
                  </a>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
