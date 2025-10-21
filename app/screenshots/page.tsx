export default function Screenshots() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Ekran Görüntüleri</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="aspect-[9/16] bg-slate-800 rounded-lg" />
        <div className="aspect-[9/16] bg-slate-800 rounded-lg" />
        <div className="aspect-[9/16] bg-slate-800 rounded-lg" />
      </div>
    </section>
  );
}
