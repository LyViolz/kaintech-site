export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Sınav Hazırlığı için <span className="text-cyan-400">KainTech</span>
          </h1>
          <p className="mt-4 text-slate-300">
            Doğru/yanlış takibi, konu tamamlama, timer, haftalık plan — hepsi tek uygulamada.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="rounded-md px-4 py-2 bg-cyan-400 text-black font-medium">Google Play</a>
            <a href="/features" className="rounded-md px-4 py-2 border border-white/15">Özellikler</a>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <div className="aspect-[16/10] w-full rounded-lg bg-slate-800 grid place-items-center">
            <span className="text-slate-400">Uygulama ekran görüntüsü</span>
          </div>
        </div>
      </div>
    </section>
  );
}
