const stats = [
  { value: "94%", label: "Detection Confidence" },
  { value: "4", label: "Disease Classes" },
  { value: "100%", label: "Responsive Design" },
  { value: "24/7", label: "Educational Access" },
];

export default function Statistics() {
  return (
    <section className="bg-slate-900 px-5 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[2rem] border border-white/10 bg-slate-950 p-7 text-center transition hover:scale-105"
          >
            <h3 className="text-4xl font-black text-emerald-300">
              {item.value}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}