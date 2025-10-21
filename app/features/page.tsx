export default function Features() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Özellikler</h1>
      <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc list-inside">
        <li>Doğru/yanlış takibi</li>
        <li>Konu tamamlama</li>
        <li>Timer (pomodoro/özel)</li>
        <li>Haftalık program</li>
      </ul>
    </section>
  );
}
