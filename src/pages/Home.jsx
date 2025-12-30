import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Instagram, MapPin, Clock, Mail, MessageCircleMore, ArrowRight } from "lucide-react";

const CONTACT = {
  whatsapp: "https://wa.me/573174604451",
  instagram: "https://www.instagram.com/naturalblendscol",
  maps: "https://maps.app.goo.gl/PM3jzKexgLFQER3w6",
  email: "naturalblendscolombia@gmail.com",
  address: "Calle 52N # 5B - 138",
  hours: "10:00 – 21:00",
  days: "Todos los días",
};

const FEATURED = [
  { title: "Natural Bowls", desc: "Arroz integral, proteínas, veggies y salsas de la casa.", tag: "Top", tone: "from-emerald-100 to-emerald-50" },
  { title: "Bowls de Fruta", desc: "Açaí, granola, chia, fruta fresca & toppings.", tag: "Fresh", tone: "from-rose-100 to-rose-50" },
  { title: "Batidos", desc: "Cremosos y frutales. Mezclas únicas para tu día.", tag: "16 oz", tone: "from-violet-100 to-violet-50" },
  { title: "Ensaladas", desc: "Ingredientes siempre frescos + salsas brutales.", tag: "Fit", tone: "from-amber-100 to-amber-50" },
];

export default function Home() {
  return (
    <section className="py-10">
      <div className="space-y-10">
        {/* HERO */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Badge className="bg-nb-burgundy text-white hover:bg-nb-burgundy/90">Natural Blends</Badge>
              <Badge variant="outline">Saludable • Fresco • Delicioso</Badge>
            </div>

            <h1 className="text-4xl font-semibold leading-tight">
              Comer rico y saludable
              <span className="text-nb-burgundy"> sí se puede</span> 💚
            </h1>

            <p className="text-base text-nb-ink/70 max-w-xl">
              Bowls, ensaladas, sándwiches y batidos hechos para tu día.
              Explora el menú como marketplace y pide en 1 clic por WhatsApp.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link to="/menu" className="w-full sm:w-auto">
                <Button className="w-full bg-nb-burgundy hover:bg-nb-burgundy/90">
                  Ver menú <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  Pedir por WhatsApp
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary">📍 {CONTACT.address}</Badge>
              <Badge variant="secondary">🕒 {CONTACT.hours} • {CONTACT.days}</Badge>
              <Badge variant="secondary">⚡ Respuesta rápida por WhatsApp</Badge>
            </div>
          </div>

          {/* Sección 1: Showcase dinámico (sin imágenes del menú) */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-nb-burgundy/10 via-emerald-200/20 to-amber-200/20 blur-2xl" />
            <div className="grid gap-4 sm:grid-cols-2">
              {FEATURED.map((it) => (
                <Card key={it.title} className="overflow-hidden">
                  <div className={`h-2 w-full bg-gradient-to-r ${it.tone}`} />
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{it.title}</CardTitle>
                      <Badge variant="outline">{it.tag}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-nb-ink/70">
                    {it.desc}
                    <div className="mt-3">
                      <Link to="/menu">
                        <Button size="sm" variant="secondary" className="rounded-full">
                          Explorar
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sección 2: Redes / CTA con estética */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircleMore className="h-5 w-5 text-nb-burgundy" />
                Pedidos por WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-nb-ink/70 space-y-3">
              Pide rápido, aclara dudas, y te confirmamos disponibilidad al toque.
              <div className="flex flex-col gap-2 sm:flex-row">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="w-full">
                  <Button className="w-full bg-nb-burgundy hover:bg-nb-burgundy/90">
                    Abrir WhatsApp
                  </Button>
                </a>
                <Link to="/menu" className="w-full">
                  <Button variant="outline" className="w-full">
                    Ver menú
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-nb-burgundy" />
                Instagram oficial
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-nb-ink/70 space-y-3">
              Mira promos, novedades y contenido del día en el perfil.
              <div className="flex items-center gap-2">
                <Badge variant="secondary">@naturalblendscol</Badge>
              </div>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full">
                  Visitar Instagram
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Sección 3: Ubicación + Horarios + Contacto (todo junto) */}
        <Card className="overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-nb-burgundy" />
              Ubicación & Horarios
            </CardTitle>
            <p className="text-sm text-nb-ink/70">
              Llega fácil — abre el mapa y listo.
            </p>
          </CardHeader>

          <CardContent className="grid gap-6 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Clock className="h-4 w-4 text-nb-burgundy" />
                    Horario
                  </div>
                  <p className="mt-1 text-sm text-nb-ink/70">
                    <b>{CONTACT.hours}</b> • {CONTACT.days}
                  </p>
                </div>

                <div className="rounded-2xl border p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="h-4 w-4 text-nb-burgundy" />
                    Dirección
                  </div>
                  <p className="mt-1 text-sm text-nb-ink/70">
                    <b>{CONTACT.address}</b>
                  </p>
                </div>

                <div className="rounded-2xl border p-4 sm:col-span-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Mail className="h-4 w-4 text-nb-burgundy" />
                    Contacto
                  </div>
                  <p className="mt-1 text-sm text-nb-ink/70">
                    {CONTACT.email}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-2 sm:flex-row">
                <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    Abrir en Maps
                  </Button>
                </a>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="w-full">
                  <Button className="w-full bg-nb-burgundy hover:bg-nb-burgundy/90">
                    Pedir por WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.054222103008!2d-76.5160543!3d3.4676118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a898e91e693f%3A0x513e90133d2ba23!2sNatural%20blends!5e0!3m2!1ses-419!2sco!4v1767109942481!5m2!1ses-419!2sco"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Natural Blends - Google Maps"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
