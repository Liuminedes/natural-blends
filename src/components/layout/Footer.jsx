export default function Footer() {
  return (
    <footer className="mt-14 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-nb-ink/70">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Natural Blends.</p>
          <p>Hecho para convertir clicks en pedidos. 😄</p>
        </div>
      </div>
    </footer>
  );
}
