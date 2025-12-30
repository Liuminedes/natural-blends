// src/pages/Contact.jsx
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Instagram, MapPin, Clock, Mail, Phone, MessageCircleMore } from "lucide-react";

const CONTACT = {
  whatsapp: "https://wa.me/573174604451",
  phoneDisplay: "+57 317 460 4451",
  instagram: "https://www.instagram.com/naturalblendscol",
  maps: "https://maps.app.goo.gl/PM3jzKexgLFQER3w6",
  email: "naturalblendscolombia@gmail.com",
  address: "Calle 52N # 5B - 138",
  hours: "10:00 – 21:00",
  days: "Todos los días",
};

export default function Contact() {
  return (
    <section className="py-10">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-nb-burgundy text-white hover:bg-nb-burgundy/90">
              Natural Blends
            </Badge>
            <Badge variant="outline">Contacto</Badge>
          </div>

          <h1 className="text-2xl font-semibold">Hablemos 👋</h1>
          <p className="text-sm text-nb-ink/70">
            ¿Pedido, dudas o cómo llegar? Aquí tienes todo en un solo lugar.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="secondary">📍 {CONTACT.address}</Badge>
            <Badge variant="secondary">🕒 {CONTACT.hours} • {CONTACT.days}</Badge>
            <Badge variant="secondary">⚡ Respuesta rápida por WhatsApp</Badge>
          </div>
        </div>

        {/* Cards: WhatsApp + Instagram */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircleMore className="h-5 w-5 text-nb-burgundy" />
                Pedidos por WhatsApp
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-nb-ink/70">
              Es la forma más rápida. Te confirmamos disponibilidad y tiempos al toque.
              <div className="flex flex-col gap-2 sm:flex-row">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="w-full">
                  <Button className="w-full bg-nb-burgundy hover:bg-nb-burgundy/90">
                    Abrir WhatsApp
                  </Button>
                </a>
                <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    Cómo llegar
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Badge variant="secondary" className="gap-2">
                  <Phone className="h-4 w-4" />
                  {CONTACT.phoneDisplay}
                </Badge>
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

            <CardContent className="space-y-3 text-sm text-nb-ink/70">
              Mira promos, novedades y contenido del día.
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

        {/* Ubicación + Horarios + Contacto + Mapa */}
        <Card className="overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-nb-burgundy" />
              Ubicación & Horarios
            </CardTitle>
            <p className="text-sm text-nb-ink/70">Llega fácil — abre el mapa y listo.</p>
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
                  <p className="mt-1 text-sm text-nb-ink/70">{CONTACT.email}</p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-2">
                      <Phone className="h-4 w-4" />
                      {CONTACT.phoneDisplay}
                    </Badge>
                  </div>
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

              <p className="text-xs text-nb-ink/60">
                Tip: si vas a recoger, escribe “Para recoger” y la hora aproximada ✅
              </p>
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
