import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Instagram, Menu as MenuIcon, MessageCircleMore } from "lucide-react";

const navClass = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive ? "text-nb-burgundy" : "text-nb-ink/80 hover:text-nb-burgundy"
  }`;

export default function Navbar() {
  const location = useLocation();

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

        {/* Actions */}
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menú">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src={logo} alt="Natural Blends" className="h-8 w-8 rounded-lg" />
                  Natural Blends
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3 text-sm font-medium ${
                      isActive ? "border-nb-burgundy text-nb-burgundy" : "text-nb-ink/80"
                    }`
                  }
                >
                  Inicio
                </NavLink>

                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3 text-sm font-medium ${
                      isActive ? "border-nb-burgundy text-nb-burgundy" : "text-nb-ink/80"
                    }`
                  }
                >
                  Menú
                </NavLink>

                <NavLink
                  to="/contacto"
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3 text-sm font-medium ${
                      isActive ? "border-nb-burgundy text-nb-burgundy" : "text-nb-ink/80"
                    }`
                  }
                >
                  Contacto
                </NavLink>

                <div className="pt-2">
                  <a href="https://wa.me/573174604451" target="_blank" rel="noreferrer">
                    <Button className="w-full bg-nb-burgundy hover:bg-nb-burgundy/90 gap-2">
                      <MessageCircleMore className="h-4 w-4" />
                      Pedir por WhatsApp
                    </Button>
                  </a>
                </div>

                <a href="https://www.instagram.com/naturalblendscol" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full gap-2">
                    <Instagram className="h-4 w-4" />
                    Ver Instagram
                  </Button>
                </a>

                <div className="pt-4 text-xs text-nb-ink/60">
                  Estás en: <b>{location.pathname}</b>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
