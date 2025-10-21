import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KainTech",
  description: "Sınav takip, konu ilerleme, timer ve haftalık program uygulaması.",
  metadataBase: new URL("https://kaintech-site.example"), // Vercel domain gelince güncelle
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-slate-950 text-slate-100">
        <header className="border-b border-white/10 sticky top-0 bg-slate-950/70 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
            <a href="/" className="font-semibold">KainTech</a>
            <a href="/features" className="text-slate-300 hover:text-white">Özellikler</a>
            <a href="/screenshots" className="text-slate-300 hover:text-white">Görseller</a>
            <a href="/privacy" className="text-slate-300 hover:text-white">Gizlilik</a>
            <a href="/contact" className="ml-auto inline-flex items-center rounded-md px-3 py-1.5 bg-cyan-400 text-black font-medium hover:opacity-90">
              İletişim
            </a>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-56px)]">{children}</main>
        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-400">
            © {new Date().getFullYear()} KainTech — Tüm hakları saklıdır.
            <a className="ml-4 underline" href="/privacy">Gizlilik Politikası</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
