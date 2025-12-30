import { Button } from "../components/ui/button";

export default function Contact() {
  return (
    <section className="py-10 space-y-4">
      <h1 className="text-2xl font-semibold">Contacto</h1>

      <div className="rounded-2xl border bg-white p-6 space-y-2">
        <p><b>Dirección:</b> Calle 52N # 5B - 138</p>
        <p><b>Horario:</b> 10:00 – 21:00 (todos los días)</p>
        <p><b>Correo:</b> naturalblendscolombia@gmail.com</p>

        <div className="pt-3 flex flex-col gap-2 sm:flex-row">
          <a className="w-full" href="https://wa.me/573174604451" target="_blank" rel="noreferrer">
            <Button className="w-full bg-nb-burgundy hover:bg-nb-burgundy/90">Escribir por WhatsApp</Button>
          </a>
          <a className="w-full" href="https://maps.app.goo.gl/PM3jzKexgLFQER3w6" target="_blank" rel="noreferrer">
            <Button variant="outline" className="w-full">Cómo llegar</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
