import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloating from "./components/layout/WhatsAppFloating";

export default function App() {
  return (
    <div className="min-h-screen bg-nb-cream text-nb-ink">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
